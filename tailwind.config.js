module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/abstract-art.jpeg')",
        'kids-bg': "url('/kids-bg.jpg')",
        'audio-bg': "url('https://newsday.co.tt/wp-content/uploads/2019/06/4197800-1024x907.jpg')",
        'text-bg': "url('https://4.bp.blogspot.com/-cmgYn5hbjKI/UZXWM1yZloI/AAAAAAAABk0/5ipWF6TqKbI/s1600/ss1.png')",
        'video-bg': "url('https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clare.fm%2Fwp-content%2Fuploads%2Fsites%2F17%2FYoruba-Culture-Week-696x385.jpg')",
      },
      screens: {
        'ipad': '1024px',
        'large-screen': '1500px',
      },
    },
  },
  plugins: [],
}
