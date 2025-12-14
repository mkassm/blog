const config = {
  siteTitle: `Mohamed Kassem Blog`, // Site title.
  siteTitleAlt: `Mohamed Kassem blog`, // Alternative site title for SEO.
  siteLogo: `/icons/icon-512x512.png`, // Logo used for SEO and manifest.
  siteUrl: `https://blog.mohamedkassem.xyz`, // Domain of your website without
  // pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to
  // example.github.io/gatsby-starter-business/.
  siteDescription: `Mohamed Kassem blog is the personal blog and my digital garden, a place to share my thoughts. A Brew of Awesomeness with a Pinch of Magic...`, // Website description used for RSS feeds/meta description tag.
  siteRss: `/rss.xml`,
  googleTagManagerID: `GTM-TQMG9BC`, // GTM tracking ID //GTM_ID.
  userName: `Mohamed Kassem`,
  coffeeLink: `https://www.buymeacoffee.com/aboelkassem`,
  userTwitter: `mo_kassm`,
  siteFBAppID: `mkassm`,
  userLocation: `Cairo, Egypt`,
  copyright: `Copyright © Mohamed Kassem Blog 2020-${new Date()
    .getFullYear()
    .toString()
    .substr(2, 2)}. All Rights Reserved.`, // Copyright string for the footer of
  // the website and RSS feed.
  themeColor: `#676767`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#ffffff`, // Used for setting manifest background color.
  cookieConsent: `This website uses cookies which are used to collect anonymous information to improve your browsing experience and for analytics and metrics.`,
  keywords: `mkassm, Mohamed Kassem, aboelkassem, aboelkassem blog, mohamed abdelrahman, mohamed aboelkassem, blog aboelkassem, csharp, asp.net core, distributed systems, golang, silverkey, silverkey technologies, pwc, pwc etic, taly`,
};

module.exports = config;
