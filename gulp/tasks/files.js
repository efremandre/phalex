export const files = () => {
	return app.gulp.src(app.path.src.files, {dot:true}).pipe(app.gulp.dest(app.path.build.files));
}