module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
  mode: 'jit',
  purge: {
    enabled: true,
    content: ['./src/**/*.{html,ts}']
  },
  corePlugins: {
    preflight: false,
  },

}
