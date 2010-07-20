// DOCUMENT LOAD
$(document).ready(function(){
	// GENERATE FLOOR LISTING
	genFloorDisplay();	

	// GENERATE 
});

// FUNCTIONS
function genFloorDisplay() {
	$.get('tour_config.xml',function(xml){
		console.log($(xml));
		var id = 0;
		$(xml).find('floor').each(function(){
			id++;
			var room_name = $(this).attr('name');
			var room_src = $(this).attr('src');
			
			console.log('ID:     '+id);
			console.log('NAME:   '+room_name);
			console.log('SOURCE: '+room_src);
			$('#home ul').append('<li class="arrow"><a href="#viewer'+id+'">'+room_name+'</a></li>');
		});
	});
}
