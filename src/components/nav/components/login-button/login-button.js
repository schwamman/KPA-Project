
var keyPrefix = "6Pphk3dbK4Y-";
import getKeys from "lodash/keys";

export default {
  data () {
    var subdomain = getSubdomain();
    if (!subdomain) return { url: null, img: null };

    var url = "https://"+subdomain+".kpaehs.com";
    var img = "https://go.kpaehs.com/customer-logo?subdomain="+encodeURIComponent(subdomain);

    return {
      url: url,
      img: img,
    };
  }
}


function isSubdomainSignedIn (subdomain) {
  return !!getCookieValue(keyPrefix+subdomain)
};

function getSubdomain(){
  if (window.isDev)
    return "";

  var subdomain  = getCookieValue('last-subdomain');
  if (subdomain && isSubdomainSignedIn(subdomain))
    return subdomain;

  var cookies = getCookies();
  var keys = getKeys(cookies);
  keys.forEach(key => {
    var val = cookies[key];
    if (!val) return;
    if (key.indexOf(keyPrefix) === 0)
      return key.replace(keyPrefix, "");
  });
};

var getCookies = function(){
  var pairs = document.cookie.split(";");
  var cookies = {};
  for (var i=0; i<pairs.length; i++){
    var pair = pairs[i].split("=");
    cookies[(pair[0]+'').trim()] = unescape(pair[1]);
  }
  return cookies;
};

function getCookieValue(a) {
  var b = document.cookie.match('(^|;)\\s*' + a + '\\s*=\\s*([^;]+)');
  return b ? b.pop() : '';
}
