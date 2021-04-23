const {execFile} = require('child_process');
const {resolve} = require("path");
const gifsicle = require('gifsicle');
const cwd = process.cwd()
execFile(gifsicle, ['-I', resolve(cwd,'./static/output.gif'),'>', resolve(cwd,'./static/pic.txt')], err => {
    console.log(err,'err')
	console.log('Image minified!');
});