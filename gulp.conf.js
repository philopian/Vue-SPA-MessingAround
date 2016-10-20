/**************************************************************************************/
/*          FILE PATHS                                                                */
/**************************************************************************************/
var path = require('path');
var staticWebDir = path.join(__dirname, "www");
var serverDir    = path.join(__dirname, "server");

module.exports = {
	bowerJson				: path.join(__dirname, "bower.json"),
	bowerrc					: path.join(__dirname, ".bowerrc"),
	bowerDir				: path.join(__dirname, "www/bower_components"),
	www 						: staticWebDir,
	indexHtml 			: path.join(staticWebDir, "index.html"),
	html 						: path.join(staticWebDir, "*.html"),
	css 						: path.join(staticWebDir, "css/*.css"),
	cssDir 					: path.join(staticWebDir, "css"),
	js 							: path.join(staticWebDir, "js/*.js"),
	sassFiles 			: path.join(staticWebDir, "sass/*.scss"),
	assetFiles 			: path.join(staticWebDir, "assets/**/*"),
	dataDirectory 	: path.join(staticWebDir, "data/*"),
	leafletImages		: path.join(staticWebDir, "bower_components/**/dist/images/*.{png,svg}"),
	bootstrapfonts	: path.join(staticWebDir, "bower_components/bootstrap/fonts/*"),
	fontAwesomefonts: path.join(staticWebDir, "bower_components/font-awesome/fonts/*"),
	frontendFiles   : [
		path.join(staticWebDir, "js/*.js"),
		path.join(staticWebDir, "js/**/*.js"),
		path.join(staticWebDir, "css/*"),
		path.join(staticWebDir, "css/*/**"),
		path.join(staticWebDir, "*")
	],
	dist:path.join(__dirname, "dist/"),
	distCss:path.join(__dirname, "dist/css/"),
	distJs:path.join(__dirname, "dist/js/")
};
