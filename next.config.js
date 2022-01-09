module.exports = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    // domains: ['mdbootstrap.com'],
  },
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/isori/iwe': { page: '/isori/iwe'},
      '/isori/fidio': { page: '/isori/fidio'},
      '/isori/afetigbo': { page: '/isori/afetigbo'},
    };
  },
}
