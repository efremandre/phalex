import replace from 'gulp-replace'; // поиск и замена
import browsersync from 'browser-sync';
import newer from 'gulp-newer'; // проверка обновления
import ifPlugin from 'gulp-if'; // условное ветвление

// экспортируем объект
export const plugins = {
	replace: replace,
	browsersync: browsersync,
	newer: newer,
	if: ifPlugin,
}