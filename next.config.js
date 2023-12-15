// next.config.js

const {i18n} = require('./next-i18next.config');

module.exports = {
   reactStrictMode: true,
    swcMinify: true,
    i18n,
    async redirects() {
        return [
          {
            source: '/publishing-2',
            destination: '/',
            permanent: true,
          },
          {
            source: '/privacy-policy-2',
            destination: '/datenschutzerklarung',
            permanent: true,
          },
          {
            source: '/wp-comments-post.php',
            destination: '/',
            permanent: true,
          },
          {
            source: '/terms-and-conditions-crm',
            destination: '/',
            permanent: true,
          },
          {
            source: '/webAnwendungen',
            destination: '/web-anwendungen',
            permanent: true,
          },
          {
            source: '/about-us',
            destination: '/uber-uns',
            permanent: true,
          },
          {
            source: '/uberUns',
            destination: '/uber-uns',
            permanent: true,
          },
          {
            source: '/category/uncategorized',
            destination: '/',
            permanent: true,
          },
          {
            source: '/quotely',
            destination: '/',
            permanent: true,
          },
          {
            source: '/contact',
            destination: '/kontakt',
            permanent: true,
          },
          {
            source: '/mobileAnwendungen',
            destination: '/mobile-anwendungen',
            permanent: true,
          },
          {
            source: '/branches',
            destination: '/',
            permanent: true,
          },
          {
            source: '/colosseum',
            destination: '/',
            permanent: true,
          },
          {
            source: '/hello-world',
            destination: '/',
            permanent: true,
          },
          {
            source: '/icap-publishing',
            destination: '/',
            permanent: true,
          },
          {
            source: '/privacy-policy-crm',
            destination: '/',
            permanent: true,
          },
        ];
    },
    images: {
        domains: ['icapgroupgmbh.com', "167.99.243.41", "https://api-admin.icapgroupgmbh.com", "api-admin.icapgroupgmbh.com", "icap-group-images.fra1.cdn.digitaloceanspaces.com"], // Add the domain(s) you want to allow for images
    },
    // Any other configuration options you may have
};
