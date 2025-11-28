# Portfolio using Tailwind CSS

A personal portfolio website template styled with Tailwind CSS. This project demonstrates a responsive design with a dark theme, custom typography, and a clean layout.

## Table of Contents

- [Purpose](#purpose)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Future Plans](#future-plans)

## Purpose

The purpose of this project is to provide a minimalist, performant, and easily customizable portfolio template for developers and designers. It showcases how to build a modern responsive UI using Tailwind CSS utility classes without writing custom CSS.

## Features

- **Responsive Design**: Adapts to different screen sizes (Mobile, Tablet, Desktop).
- **Dark Mode**: A dark-themed color palette is the default.
- **Custom Fonts**: Uses the "Poppins" font from Google Fonts.
- **Tailwind CSS**: Utilizes utility-first CSS for rapid UI development.
- **Simple Structure**: easy to understand and modify.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js**: You need to have Node.js installed to run the Tailwind CSS build process.
- **npm**: npm is included with Node.js.

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd portfolio-tailwindcss
    ```

2.  **Install dependencies:**
    This project uses `tailwindcss` as a dev dependency.
    ```bash
    npm install
    ```

## Usage

### Development

To modify the styles or content:

1.  **Watch for changes:**
    Run the build script in watch mode. This will monitor `index.html` and `tailwind.config.js` for changes and rebuild `tailwind.css` automatically.
    ```bash
    npm run build
    ```
    *Note: The `build` script defined in `package.json` runs: `npx tailwindcss -i ./index.css -o ./tailwind.css -w`*

2.  **Edit Content:**
    Open `index.html` in your text editor and modify the content as needed.

3.  **View the site:**
    Open `index.html` in your web browser.

### Production

For production, you typically want to minify the CSS. You can modify the build command or run:
```bash
npx tailwindcss -i ./index.css -o ./tailwind.css --minify
```

## Project Structure

```
.
├── index.html           # Main HTML file containing the structure and content
├── index.css            # Source CSS file with Tailwind directives
├── tailwind.config.js   # Tailwind CSS configuration file (colors, fonts, etc.)
├── package.json         # Project metadata and dependencies
├── README.md            # Project documentation
├── FUTURE_PLAN.md       # Roadmap for future enhancements
└── tailwind.css         # Generated CSS file (do not edit directly)
```

## Customization

### Colors and Fonts

You can customize the theme by editing `tailwind.config.js`.

-   **Colors**: Modify the `colors` object in the `theme.extend` section.
-   **Fonts**: Modify the `fontFamily` object.

### Content

Edit `index.html` to change the text, links, and images. The images are currently sourced from Unsplash.

## Future Plans

We have outlined a roadmap for future enhancements in [FUTURE_PLAN.md](FUTURE_PLAN.md). This includes adding interactivity, a blog section, and more.
