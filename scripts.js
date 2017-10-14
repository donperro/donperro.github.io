var colores,
els = ['header','.left','.right','footer'];

$(function() {
	$.getJSON("colores.json", function (data) {
		colores = data.colors;
		$('.switch').click(function(){
			colores = shuffle(colores);
			for (i = 0; i < els.length; i++) {
				$(els[i]).css({'background-color': colores[i].code.hex });
			}
		});
		
	});
});

function shuffle(array) {
  var currIndex = array.length, tempVal, randomIndex;
  while (0 !== currIndex) {
  	randomIndex = Math.floor(Math.random() * currIndex);
  	currIndex -= 1;
  	tempVal = array[currIndex];
    array[currIndex] = array[randomIndex];
    array[randomIndex] = tempVal;
  }
  return array;
}