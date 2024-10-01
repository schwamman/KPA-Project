export default {
  data () {
    return {
      columns: [
        {
          title: "Company",
          url: "/contact",
          icon: require("./client/company-icon.png"),
          links: [
            { title: "Contact Us", url: "/contact" },
            { title: "Team", url: "/team" },
            { title: "Security & Backups", url: "/security" },
            { title: "Getting Started", url: "/getting-started" },
            { title: "IT Suggestions", url: "/it" },
            { title: "Mobile Apps", url: "/features/ehs-app-for-iphone-android" },
            { title: "Free Trial", url: "/signup" },
            { title: "API", url: "/features/api" },
          ]
        },
        {
          title: "Articles",
          url: "/articles",
          icon: require("./client/articles-icon.png"),
          links: [
            { title: "Webinar", url: "/webinar" },
            { title: "Newsletter", url: "/newsletter" },
            { title: "Articles", url: "/articles" },
            { title: "Best Practices", url: "/articles/best-practices" },
            { title: "Safety Culture", url: "/articles/safety-culture" },
            { title: "Glossary", url: "/glossary" },
            { title: "Help & Support", url: "/help" },
          ]
        },
        {
          title: "Industries",
          url: "/industries",
          icon: require("./client/industries-icon.png"),
          links: [
            { title: "Oil and Gas", url: "/industries/oil-and-gas-ehs-management-software" },
            { title: "Construction", url: "/industries/construction-ehs-management-software" },
            { title: "Sub-Contractors", url: "/industries/sub-contractor-ehs-management-software" },
            { title: "Manufacturing", url: "/industries/manufacturing-ehs-management-software" },
            { title: "Electric / Power", url: "/industries/electric-power-ehs-management-software" },
            { title: "Consultants", url: "/industries/ehs-management-software-for-consultants" },
            { title: "Retail", url: "/industries/retail-ehs-management-software" },
            { title: "Agriculture", url: "/industries/agriculture-ehs-management-software" },
          ]
        }
      ]
    };
  }
}
