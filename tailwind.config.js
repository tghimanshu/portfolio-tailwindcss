/**
 * Tailwind CSS configuration file.
 *
 * This configuration defines the content paths, theme extensions including custom colors
 * and fonts, and other settings for the Tailwind CSS build process.
 *
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  /**
   * The paths to all of your template files.
   * Tailwind will scan these files for class names to generate the corresponding CSS.
   *
   * @type {string[]}
   */
  content: ["./*.html"],

  /**
   * The theme configuration.
   * This section allows you to customize the default Tailwind theme.
   *
   * @type {object}
   */
  theme: {
    /**
     * Extends the default theme.
     * Values defined here will be added to the existing theme defaults, rather than overriding them.
     *
     * @type {object}
     */
    extend: {
      /**
       * Custom color palette extensions.
       * These colors are available as utilities like `bg-body`, `text-theme`, etc.
       *
       * @property {string} body - The background color for the body (#17171F).
       * @property {string} selected-text - Color for selected text highlights (#A3A3FF).
       * @property {string} theme - The main theme color (#3F3FFF).
       * @property {string} nav - Background color for navigation elements (#404053).
       * @property {string} secondary - Secondary text or element color (#9191A4).
       * @property {string} badge - Background color for badges (#3F3F51).
       * @property {string} input-border - Border color for input fields (#565666).
       * @property {string} input - Background color for input fields (#2A2A35).
       */
      colors: {
        body: "#17171F",
        "selected-text": "#A3A3FF",
        theme: "#3F3FFF",
        nav: "#404053",
        secondary: "#9191A4",
        badge: "#3F3F51",
        "input-border": "#565666",
        input: "#2A2A35",
      },
      /**
       * Custom font family definitions.
       *
       * @property {string[]} poppins - The Poppins font family with a generic fallback.
       */
      fontFamily: {
        poppins: ["'Poppins'", "sans-serif"],
      },
    },
  },
};
