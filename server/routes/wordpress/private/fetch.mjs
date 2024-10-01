import fs from "node:fs";
import axios from "axios";
import _ from "lodash";
import { DateTime } from 'luxon';
import getFilepath from './get-filepath.mjs';

export default (callback) => {
  var loadResource = function(resource){
    var totalPages = null;
    var docs = null;
    var perPage = 100;
    var url = "https://blog.kpaehs.com/wp-json/wp/v2/"+resource+"/?per_page="+perPage;
    console.warn(url);
    return axios
      .get(url)
      .then(response => {
        totalPages = parseInt(response.headers["x-wp-totalpages"]);
        docs = response.data;

        if (totalPages > 1) {
          var additionalRequests = _.times(totalPages - 1, p => {
            var page = p + 2;
            return axios.get("https://blog.kpaehs.com/wp-json/wp/v2/"+resource+"/?page="+page+"&per_page="+perPage);
          });
          return Promise.all(additionalRequests)
            .then(resultSets => {
              resultSets.forEach(resultSet => [].push.apply(docs, resultSet.data));
              return docs;
            });
        }

        return docs;
      });
  };

  Promise.all([
    loadResource("categories"),
    loadResource("tags"),
    loadResource("media"),
    loadResource("posts"),
  ])
    .then(([categories, tags, medias, posts]) => {

      var data = {
        categories: categories.map(c => {
          return {
            id: c.id,
            name: c.name,
            slug: c.slug,
            description: c.description,
          };
        }),
        tags: tags.map(t => {
          return {
            id: t.id,
            name: t.name,
            slug: t.slug,
            description: t.description,
          };
        }),
        medias: _.chain(medias).map(m => {
          var anyUrl = _.last(_.values(m.media_details.sizes));
          if (!anyUrl) return;
          return {
            id: m.id,
            medium: (m.media_details.sizes.medium_large||m.media_details.sizes.large||m.media_details.sizes.full||{}).source_url || anyUrl,
            large: (m.media_details.sizes.large||m.media_details.sizes.full||{}).source_url || anyUrl,
            full: m.media_details.sizes.full.source_url || anyUrl,
          };
        }).filter().value()
      };

      data.posts = posts.map(p => {
        p.categories = _.sortBy(p.categories, 'id');

        return {
          id: p.id,
          fulldate: new DateTime(new Date(p.date)).toFormat("MMMM d, yyyy"),
          slug: p.slug,
          url: p.link.replace(/https?:\/\/blog.iscout.com/, ''),
          title: String(p.title.rendered || '').replace(/iScout/g, 'KPA Flex'),
          body: p.content.rendered
            .replace(/http:/g, 'https:')
            .replace(/blog[.]iscout/g, 'blog.kpaehs')
            .replace(/[.]iscout/g, '.kpaehs')
            .replace(/[@]iscout[.]com/g, '@kpaehs.com')
            .replace(/iScout/g, 'KPA Flex')
            .replace(/<img +loading="lazy" +width="\d+" +/g, '<img ')
            .replace(/srcset="[^"]+"/g, ' ')
            .replace(/sizes="[^"]+"/g, ' ')
            .replace(/ height="\d+"/gi, ' ')
            .replace(/"\/wp-content/g, '"https://blog.kpaehs.com/wp-content'),
          excerpt: p.excerpt.rendered,
          image: _.find(data.medias, {id:p.featured_media}),
          category: _.find(data.categories, {id: p.categories && p.categories[0]}),
          categoryIds: p.categories || [],
          tags: _.filter(_.map(p.tags, id => _.find(data.tags, {id:id}))),
        };
      });

      fs.writeFile(getFilepath(), JSON.stringify(data, null, 2), function () {
        callback(null, data);
      });
    })
    .catch(function(err){
      var msg = (err && err.data) || String(err);
      if (err.stack) msg += "\n"+err.stack;
      console.log("Failed to fetch from wordpress:");
      console.log(msg);
      callback(msg);
    });
};
