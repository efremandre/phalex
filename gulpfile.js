// основной модуль
import gulp from 'gulp';

// импорт путей
import { path } from './gulp/config/path.js';

// импорт плагинов
import { plugins } from './gulp/config/plugins.js';

// передаем значения в глобальную переменную
global.app = {
	isBuild: process.argv.includes('--build'),
	isDev: !process.argv.includes('--build'),
	path: path,
	gulp: gulp,
	plugins: plugins,
}

// импорт задач
import { clean } from './gulp/tasks/clean.js';
import { files } from './gulp/tasks/files.js';
import { html } from './gulp/tasks/html.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { otfToTtf, ttfToWoff, fontsStyle } from './gulp/tasks/fonts.js';
import { images } from './gulp/tasks/images.js';
import { server } from './gulp/tasks/server.js';
import { zip } from './gulp/tasks/zip.js'

// наблюдатель за изменениями в файлах
function watcher() {
	gulp.watch(path.watch.files, files);
	gulp.watch(path.watch.html, html);
	gulp.watch(path.watch.scss, scss);
	gulp.watch(path.watch.js, js);
	gulp.watch(path.watch.images, images);
}

// последовательная обработка шрифтов
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// основные задачи
const mainTasks = gulp.series(fonts, gulp.parallel(files, html, scss, js, images));

// построение сценариев
const dev = gulp.series(clean, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(clean, mainTasks);
const deployZip = gulp.series(clean, mainTasks, zip);

export { dev, build, deployZip }

// выполнение сценария по умолчанию
gulp.task('default', dev);



