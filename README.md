# Reveal.js Build System

This is a build system for [reveal.js](https://github.com/hakimel/reveal.js) that helps (i) create a presentation from a set of markdown files, and (ii) makes it easy to upgrade to the latest version of `reveal.js`.

It makes upgrading to the latest version of reveal.js as easy as running `git submodule update --remote`, and creates a `dist` directory with all the necessary files to run your presentation.

### Options

The build system allows you to set certain options for a certain slide deck using [YAML frontmatter](https://assemble.io/docs/YAML-front-matter.html). 

The following options are available:

* `title`: The title of the presentation, this appears as the title of the HTML page.
* `theme`: The theme to use for the presentation, this is the name of the theme as described in the [reveal.js documentation](https://revealjs.com/themes/).
