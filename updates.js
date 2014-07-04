$document.getElementById("updates").load function () {
	$.getJSON ("https://spreadsheets.google.com/feeds/list/1THnq6q2JB0qNX_AQb5rBXc7H7Jrl3hNNbVu2GsHwdaY/od6/public/basic?hl=en_US&alt=json", function (obj) {
		$.each (obj, function (key, value) {
			$("ul").append("<li>+value.heading+</li>")
		})
	});
}