(function() {


	var song;
	var gamePlay;
	$("#send").click(function(){
		
		if ($('#music-search').val() !== '') {
			$('#searching').css('display', 'block');
			$('#searchbar').css('display', 'none')
            $.ajax({
                type: 'POST',
                url: '/api',
                data: { search: $('#music-search').val()},
                success: function(output){
                    if(output){ 
                    	console.log(output)
                    	song = output;
                    	$('#searching').css('display', 'none');
                    	$('#artist').css('display', 'block');
                    	$('#song-name').html(song.title);
                    	$('#artist-name').html(song.primary_artist.name);
                    	$('#artist-pic').attr('src', song.song_art_image_thumbnail_url);
                    	
                        
                    }else{
                         return true; // this will redirect you to the action defined in your form tag, since no output was found.
                    }
                }
            });
        }

        return false;
    });
	$('#again').on('click', function() {
        $('#searchbar').css('display', 'block');
        $('#music-search').val('');
        $('#artist').css('display', 'none');
        clearInterval(gamePlay);
        $('body').css('background-image', 'url(background.jpg)').css('background-repeat', 'no-repeat').css('background-position', "0px, 0px");
        $('#artist-pic').css('width', '50%').css('margin-left', '25%')
        $('#play').css('display', 'inline-block');
        $('marquee').remove();
    })
    $('#play').on('click', function() {
    	$('body').css('background-image', 'url(stars.jpg)').css('background-repeat', 'repeat').css('background-position', "700px, 500px");
    	var lyricText = document.createElement('marquee');

    	$('#artist').append("<marquee id='lyrics' scrollamount='0' behavior='scroll' direction='left'></marquee>");
    	$('marquee').html(song.lyrics);
        $('marquee').attr('scrollamount', '10');
        $('#artist-pic').css('width', '20%').css('margin-left', '40%')
        $('#play').css('display', 'none');
    	var begin= new Date().getTime();
        gamePlay = setInterval(function() {
            // if (spritePos < spriteArray.length) {
            //     spritePos ++;
            // } else {
            //     spritePos = 0;
            // }
            
            // d.style.backgroundPosition = spriteArray[spritePos];
            var x= Math.floor((new Date().getTime()-begin)/25);
            document.body.style.backgroundPosition = -x + 'px, 500px';
           
        }, 50);
    })
})();