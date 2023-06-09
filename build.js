const Mustache = require('mustache');
const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const defaultOptions = {
    title: 'Presentation',
    theme: 'black',
}

if (!fs.existsSync(path.join(__dirname, 'reveal.js'))) {
    console.error('reveal.js not found. Please run `git submodule update --init --recursive`');
    process.exit(1);
}

async function copyStaticFiles() {
    if (!fs.existsSync(path.join(__dirname, 'static'))) {
        fs.mkdirSync(path.join(__dirname, 'static'));
    }
    fs.cpSync(path.join(__dirname, 'reveal.js', 'dist'), path.join(__dirname, 'static', 'dist'), { overwrite: true, recursive: true });
    fs.cpSync(path.join(__dirname, 'reveal.js', 'plugin'), path.join(__dirname, 'static', 'plugin'), { overwrite: true, recursive: true });
}

function writeTemplates() {
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
        const data = fs.readFileSync(path.join(__dirname, 'slides', slide), 'utf8');
        // Write the rendered template to a file
        const frontMatter = matter(data);
        const slideData = Object.assign({}, defaultOptions, frontMatter.data, { slide: frontMatter.content });
        const renderedSlide = Mustache.render(template, slideData);
        const builtSlidePath = path.join(__dirname, 'dist', slide + '.html');
        fs.writeFileSync(builtSlidePath, renderedSlide);
    });
}

copyStaticFiles();
writeTemplates();
