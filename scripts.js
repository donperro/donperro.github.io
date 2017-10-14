$(function() {
	var colores;
	$.getJSON("colores.json", function (data) {
		colores = data;
	});
	console.log(colores);
});