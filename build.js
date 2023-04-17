const Mustache = require('mustache');
const fs = require('fs');
const path = require('path');

if (!fs.existsSync(path.join(__dirname, 'reveal.js'))) {
    console.error('reveal.js not found. Please run `git submodule update --init --recursive`');
    process.exit(1);
}

if (!fs.existsSync(path.join(__dirname, 'dist'))) {
    fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Read the template file
const template = fs.readFileSync(path.join(__dirname, 'index.html.mustache'), 'utf8');
// Get each slide
const slides = fs.readdirSync(path.join(__dirname, 'slides'));
// Render the template for each slide
slides.forEach((slide) => {
    // Read the slide data
    const slideData = fs.readFileSync(path.join(__dirname, 'slides', slide), 'utf8');
    // Write the rendered template to a file
    const renderedSlide = Mustache.render(template, { slide: slideData });
    const builtSlidePath = path.join(__dirname, 'dist', slide + '.html');
    fs.writeFileSync(builtSlidePath, renderedSlide);
});
