# Reveal.js Build System

This is a build system for [reveal.js](https://github.com/hakimel/reveal.js) that helps (i) create a presentation from a set of markdown files, and (ii) makes it easy to upgrade to the latest version of `reveal.js`.

## Usage

In order to use this build system:

1. Clone this repository locally with submodules:

```bash
git clone --recurse-submodules
# or if you have already cloned the repository without submodules:
git submodule update --init --recursive
```

2. Create a new file inside the `slides` directory containing the content of your slide deck

3. Run the build script:

```bash
npm run build
```

This will create a `dist` directory and a `static` directory. `static` contains all static files from `Reveal.js` necessary to run your presentation. `dist` contains the generated HTML files for your presentation.

Commit both of these to your repository. Congratulations, you should now be able to open up files in the `dist` folder to view your presentation!

## Options

The build system allows you to set certain options for a certain slide deck using [YAML frontmatter](https://assemble.io/docs/YAML-front-matter.html). 

The following options are available:

* `title`: The title of the presentation, this appears as the title of the HTML page.
* `theme`: The theme to use for the presentation, this is the name of the theme as described in the [reveal.js documentation](https://revealjs.com/themes/).
