jQuery(document).ready(function($){
	$(".name").fitText(1, { minFontSize: '16px', maxFontSize: '30px' });
	$(".bio").fitText(1.5, { minFontSize: '12px', maxFontSize: '16px' });
	$('.lines-button').click(function(e){
		e.preventDefault();
		$(this).toggleClass('back');
		$('#sidebar, #wrap').toggleClass('open');
	});

	$('.value').each(function(index, object){
		$(object).width($(object).data('width'));
	})

	// INSTAGRAM
	// var feed = new Instafeed({
 //    userId: 231734,
	// 	get: 'user',
 //    accessToken: '231734.467ede5.3e48feab91a347db9313a309be625d1a',
 //    clientId: '227e7fa4eef84d21a5ecc7be9b53101a',
 //    resolution: 'standard_resolution',
 //    target: 'instagram',
 //    template: '<li><a href="#" class="insta-image" data-link="{{link}}" data-image="{{image}}" data-caption="{{caption}}" data-likes="{{likes}}" data-type="{{model.type}}" data-video="{{model.videos.standard_resolution.url}}"><img src="{{image}}" alt=""></a></li>',
 //    limit: 12,
 //    success: function(data){
 //    	console.log(data)
 //    }
 //  });
 //  feed.run();


  // STRING PARSING FOR LINKS, USERNAME & HASHTAGS
  String.prototype.parseURL = function() {
		return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
			return url.link(url);
		});
	};
	String.prototype.parseUsername = function() {
		return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
			var username = u.replace("@","")
			return u.link("http://instagram.com/"+username);
		});
	};
	String.prototype.parseHashtag = function() {
		return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
			var tag = t.replace("#","")
			return t.link("http://statigr.am/viewer.php#/tag/"+tag+"/");
		});
	};

  $(document).on('click', '.insta-image', function(e){
  	e.preventDefault();
  	link = $(this).data('link')
  	image = $(this).data('image')
  	caption = $(this).data('caption').parseURL().parseUsername().parseHashtag()
  	likes = $(this).data('likes')
  	type = $(this).data('type')
  	video = $(this).data('video')

  	if (type == 'image') {
  		media = '<a href="'+link+'"><img src="'+image+'" alt=""></a>'
  	} else {
  		media = '<a href="'+link+'"><video id="video" class="" preload="auto" autoplay loop poster="'+image+'" data-setup="{}" webkit-playsinline="" width="100%" height="auto" src="'+video+'"></video></a>'
  	}
  	$('#modals').html(
  		'<div id="insta_preview" class="modal fade">'+
			  '<div class="modal-dialog">'+
			    '<div class="modal-content">'+
			      '<div class="modal-body">'+
			      	'<i class="close fa-times" data-dismiss="modal" aria-hidden="true"></i>'+
			      	media+
			      '</div>'+
			      '<div class="modal-footer">'+
			        '<p>'+caption+'</p>'+
			      '</div>'+
			    '</div>'+
			  '</div>'+
			'</div>'
		);
		$('#insta_preview').modal({
			show: true,
		  keyboard: true,
			backdrop: true
		});

		$('.modal').on('hidden.bs.modal', function () {
			$('#modals').html('');
		})
  });
});

