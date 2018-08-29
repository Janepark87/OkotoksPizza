$(document).ready(function(){

	$('.mainBar').on('click', 'a', function(e){
		e.preventDefault();

		var target = $(this).attr('href');
		var file;
		switch(target){

			case '#home':
				file = 'html/home.html';
			break;
			case '#about-us':
				file = 'html/aboutus.html';
			break;
			case '#pizza-menu':
				file = 'html/pizzamenu.html';
			break;
			case '#location':
				file = 'html/location.html';
			break;

		}

		$('.subPageArea').load(file);


	})

})
