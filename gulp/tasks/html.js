import fileInclude from 'gulp-file-include';
// import webpHtmlNosvg from 'gulp-webp-html-nosvg';
import htmlbeautify from 'gulp-html-beautify';
import htmlmin from 'gulp-htmlmin';
// import pug from 'gulp-pug';

export const html = () => {
	return app.gulp.src(app.path.src.html)
		.pipe(fileInclude())
		// .pipe(pug({
		// 	// сжатие HTML файла
		// 	pretty: true,
		// 	// показывать в терминале какой файл обработан
		// 	verbose: true,
		// }))
		.pipe(htmlbeautify({indentSize: 2}))
		// .pipe(
		// 	app.plugins.if(
		// 		app.isBuild,
		// 		webpHtmlNosvg()
		// 	)
		// )
		.pipe(
			app.plugins.if(
				app.isBuild,
				htmlmin({
					// collapseWhitespace: true, // удаляем все переносы
					removeComments: true // удаляем все комментарии
				})
			)
		)
		.pipe(app.plugins.replace(/\.\.\/\.\.\/assets\//g, "./assets/"))
		.pipe(app.plugins.replace(/\.\.\/\.\.\/files\//g, "./files/"))
		.pipe(app.gulp.dest(app.path.build.html))
		.pipe(app.plugins.browsersync.stream());
}