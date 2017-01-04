/* =================================
   CARGADOR                     
=================================== */
jQuery(window).load(function() {
      
	jQuery(".status").fadeOut();
	jQuery(".preloader").delay(1000).fadeOut("slow");
})

/* =================================
===  RESPONSIVE VIDEO           ====
=================================== */

$(".video-container").fitVids();



/* =================================
===  MAILCHIMP                 ====
=================================== */

$('.mailchimp').ajaxChimp({
    callback: mailchimpCallback,
    url: "http://smartbird.us12.list-manage.com/subscribe/post?u=62489e169d06a95766dd0172e&amp;id=ee34b87088" 
});

function mailchimpCallback(resp) {
     if (resp.result === 'success') {
        $('.subscription-success').html('<i class="icon_check_alt2"></i><br/>' + resp.msg).fadeIn(1000);
        $('.subscription-error').fadeOut(500);
        
    } else if(resp.result === 'error') {
        $('.subscription-error').html('<i class="icon_close_alt2"></i><br/>' + resp.msg).fadeIn(1000);
    }  
}

/* =================================
===  STICKY NAV                 ====
=================================== */

$(document).ready(function() {
  $('.main-navigation').onePageNav({
    scrollThreshold: 0.2, 
    filter: ':not(.external)',
    changeHash: true
  });
  
});




if (matchMedia('(max-width: 480px)').matches) {
    $('.main-navigation a').on('click', function () {
        $(".navbar-toggle").click();
    });
}




$(document).ready(function () {
    mainNav();
});

$(window).scroll(function () {
    mainNav();
});

if (matchMedia('(min-width: 992px), (max-width: 767px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-60'});
    }
}

if (matchMedia('(min-width: 768px) and (max-width: 991px)').matches) {
  function mainNav() {
        var top = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        if (top > 40) $('.sticky-navigation').stop().animate({"top": '0'});

        else $('.sticky-navigation').stop().animate({"top": '-120'});
    }
}




/* =================================
===  BOTÓN BAJAR  ==
=================================== */
jQuery(function( $ ){
			$('#download-button').localScroll({
				duration:1000
			});
		});

/* =================================
===  VIDEO BACKGROUND           ====
=================================== */
if (matchMedia('(min-width: 640px)').matches) {
   
   $(document).ready(function() {
    var videobackground = new $.backgroundVideo($('body'), {
      "align": "centerXY",
      "width": 1280,
      "height": 720,
      "path": "video/",
      "filename": "video",
      "types": ["mp4","ogg","webm"]
    });
  });

}


/* =================================
===  FULL ENCABEZADO        ====
=================================== */
function alturaMaxima() {
  var altura = $(window).height();
  $(".full-screen").css('min-height',altura); 
  
}

$(document).ready(function() {
  alturaMaxima();
  $(window).bind('resize', alturaMaxima);
});


/* =================================
===  SMOOTH SCROLL             ====
=================================== */
var scrollAnimationTime = 1200,
    scrollAnimation = 'easeInOutExpo';
$('a.scrollto').bind('click.smoothscroll', function (event) {
    event.preventDefault();
    var target = this.hash;
    $('html, body').stop().animate({
        'scrollTop': $(target).offset().top
    }, scrollAnimationTime, scrollAnimation, function () {
        window.location.hash = target;
    });
});


/* =================================
===  WOW ANIMATION             ====
=================================== */
wow = new WOW(
  {
    mobile: false
  });
wow.init();


/* =================================
===  OWL CROUSEL               ====
=================================== */
$(document).ready(function () {

    $("#feedbacks").owlCarousel({

        navigation: false,
        slideSpeed: 800,
        paginationSpeed: 400,
        autoPlay: 5000,
        singleItem: true
    });

    var owl = $("#screenshots");

    owl.owlCarousel({
        items: 4, 
        itemsDesktop: [1000, 4], 
        itemsDesktopSmall: [900, 2], 
        itemsTablet: [600, 1],
        itemsMobile: false 
    });


});


/* =================================
===  Nivo Lightbox              ====
=================================== */
$(document).ready(function () {

    $('#screenshots a').nivoLightbox({
        effect: 'fadeScale',
    });

});


/* =================================
===  SUSCRIPCIÓN FORMULARIO        ====
=================================== */
$("#subscribe").submit(function (e) {
    e.preventDefault();
    var email = $("#subscriber-email").val();
    var dataString = 'email=' + email;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email)) {
        $.ajax({
            type: "POST",
            url: "subscribe/subscribe.php",
            data: dataString,
            success: function () {
                $('.subscription-success').fadeIn(1000);
                $('.subscription-error').fadeOut(500);
                $('.hide-after').fadeOut(500);
            }
        });
    } else {
        $('.subscription-error').fadeIn(1000);
    }

    return false;
});




/* =================================
===   FORMULARIO DE CONTACTO         ====
=================================== */
$("#contact").submit(function (e) {
    e.preventDefault();
    var name = $("#name").val();
    var email = $("#email").val();
    var subject = $("#subject").val();
    var message = $("#message").val();
    var dataString = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    function isValidEmail(emailAddress) {
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(emailAddress);
    };

    if (isValidEmail(email) && (message.length > 1) && (name.length > 1)) {
        $.ajax({
            type: "POST",
            url: "sendmail.php",
            data: dataString,
            success: function () {
                $('.success').fadeIn(1000);
                $('.error').fadeOut(500);
            }
        });
    } else {
        $('.error').fadeIn(1000);
        $('.success').fadeOut(500);
    }

    return false;
});




/* =================================
===  EXPAND COLLAPSE            ====
=================================== */
$('.expand-form').simpleexpand({
    'defaultTarget': '.expanded-contact-form'
});



/* =================================
===  STELLAR                    ====
=================================== */
$(window).stellar({ 
horizontalScrolling: false 
});


/* =================================
===  Bootstrap Internet Explorer 10 in Windows 8 and Windows Phone 8 FIX
=================================== */
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement('style')
  msViewportStyle.appendChild(
    document.createTextNode(
      '@-ms-viewport{width:auto!important}'
    )
  )
  document.querySelector('head').appendChild(msViewportStyle)
}

/* =================================
===  RUTAS Y MAPA  ==
=================================== */




$(document).ready(function() {

  $("#cities li a").click(function(){
	  event.preventDefault();
    
	  $(".rutas-div").show();
	 
      $(".btn-cities:first-child").text($(this).text());
      $(".btn-cities:first-child").val($(this).data('value'));
      
      
      //Limpio la cadena del select
	   $('#rutas-dir option').each(function() {$(this).remove(); });
      
      //envío valor de la ruta ciudad
	  rute($(this).data('value'));
	  
	   var rutes=[];

			  /*  MULTISELECT */
				 $('#rutas-dir').multiselect({
					 enableFiltering: true,
					 enableCaseInsensitiveFiltering: true,
					  maxHeight: 200,
					  onChange: function(option, checked, select) {
							
							if(checked==true){
								rutes.push(option.val());
							}
							 if(checked==false){
								
										rutes= $.grep(rutes, function(value) {
										  return value != option.val();
										});
							}
							
							/* MAPA */
							 var options = {
								center: new google.maps.LatLng(-34.397, 150.644),
								mapTypeId: google.maps.MapTypeId.ROADMAP
							};
							
							 var map = new google.maps.Map(document.getElementById("map"), options);
							 var parser = new geoXML3.parser({map: map, processStyles: true});
							 
					 
								 $.each( rutes, function( i, value ) {
									   parser.parse(value); 
									});
							/* FIN MAPA */
						}
				   });
				   
				   
				   $('#rutas-dir option:selected').each(function() {
                      $(this).prop('selected', false);
                     
               });
               
				   $('#rutas-dir').multiselect('refresh');
				   $('#rutas-dir').multiselect('rebuild');
	 
	  
  });
  
   function rute(valor){
	   
	   var valor;
 	   var items = [];
 	   items.length=0;

	   if(valor=='colima'){
		   
			   items = [
				{
					text: "Ruta 1",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAA-Zmf5kFcs0KijlWFPj3Hsa/COLIMA%20Ruta%201.kml",
				},
				{
					text: "Ruta 3",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAyLTUNdFX4HuXwpvHIpl8Ba/COLIMA%20Ruta%203.kml",
				},
				{
					text: "Ruta 4",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADURT-hNpaZR0rOBxN1uzzOa/COLIMA%20Ruta%204.kml",
				},
				{
					text: "Ruta 5",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABbBUiukyzAN2hfVKg6NXUHa/COLIMA%20Ruta%205.kml",
				},
				{
					text: "Ruta 6",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAttsX3t21mYZsm-IgJ5Mi6a/COLIMA%20Ruta%206.kml",
				},{
					text: "Ruta 7",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADVZBPkL3R2Fq2zb8P_ulBja/COLIMA%20Ruta%207.kml",
				},{
					text: "Ruta 9",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAvslRbDn324deLiD_ARVPVa/COLIMA%20Ruta%209.kml'",
				},{
					text: "Ruta 9A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAALRrkCJu8W-hzR9O_OYvq8a/COLIMA%20Ruta%209A.kml",
				},{
					text: "Ruta 10",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAzTkJhWc9fzzbFOKGM5ve0a/COLIMA%20Ruta%2010.kml",
				},{
					text: "Ruta 11",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAi6BMVlCUyoH2M2jTAzdC7a/COLIMA%20Ruta%2011.kml",
				},{
					text: "Ruta 13",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAd91jFtiZ5-a7WUkvmK94ca/COLIMA%20Ruta%2013.kml",
				},{
					text: "Ruta 13A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADKAwgX7pWPJNXDB7yv1KXxa/COLIMA%20Ruta%2013A.kml",
				},{
					text: "Ruta 14",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAZR5ivVxN2IKRnSgMB4gXca/COLIMA%20Ruta%2014.kml",
				},{
					text: "Ruta 15",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADWUdd7s15pWUTrD9X28tkJa/COLIMA%20Ruta%2015.kml",
				},{
					text: "Ruta 17",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADqSr2knSw-oL14UElgcnnUa/COLIMA%20Ruta%2017.kml",
				},{
					text: "Ruta 19",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABAYgwRO_xxDIyNmGLl3O73a/COLIMA%20Ruta%2019.kml",
				},{
					text: "Ruta 20",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABAzHd2xyn2TzAznlPZaWX_a/COLIMA%20Ruta%2020.kml",
				},{
					text: "Ruta 21",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAA_LjpljP1QUjANPgT7odqGa/COLIMA%20Ruta%2021.kml",
				},{
					text: "Ruta 22",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADl_sWb_w3ZV0Bkl3zoIG90a/COLIMA%20Ruta%2022.kml",
				},{
					text: "Ruta 24",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADAnymcIojeeNjTn6Y7QxqVa/COLIMA%20Ruta%2024.kml",
				},{
					text: "Ruta 24A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACx0PHajHES6TYoMDF9KAk9a/COLIMA%20Ruta%2024A.kml",
				},{
					text: "Ruta 27A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAqYFOdMfxCZcv7x9WmdxiXa/COLIMA%20Ruta%2027A.kml",
				},{
					text: "Ruta 28",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADdeHSKcCrRebLiejcTKMfFa/COLIMA%20Ruta%2028.kml",
				},{
					text: "Ruta 29",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABhdkQzWcqSuz2tiPp-hlZIa/COLIMA%20Ruta%2029.kml",
				},{
					text: "Ruta A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAl3M2Q-fps9MVY6zWYQKSsa/COLIMA%20Ruta%20A.kml",
				},{
					text: "Ruta B",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAzTRYL6bXycBsTFQMi98Oaa/COLIMA%20Ruta%20B.kml",
				},{
					text: "Ruta CARD",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABfp_KjECuncx4617RcrX48a/COLIMA%20Ruta%20CARD.kml",
				},{
					text: "Ruta Villa",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABAYO484wksUl_j3PtozI-Aa/COLIMA%20Ruta%20VILLA.kml",
				}
			];
	   }
	   
	    if(valor=='tecoman'){
	
			    items = [
				{
					text: "Ruta 1",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACvUxSsdWXXx0Seb4dJjFuqa/TECOMAN%20Ruta%201.kml",
				},
				{
					text: "Ruta 2",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABRnEF1cKp_p9JDqi8TqnQla/TECOMAN%20Ruta%202.kml",
				},
				{
					text: "Ruta 3",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACTYWGAKV03YUoyOX4UDErua/TECOMAN%20Ruta%203.kml",
				},
				{
					text: "Ruta 4",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABQH17E2jsmmhk1r2zo9CGUa/TECOMAN%20Ruta%204.kml",
				},
				{
					text: "Ruta 5",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADBG-u_eLVLjl5usmn_uSvPa/TECOMAN%20Ruta%205.kml",
				},
				{
					text: "Ruta 7",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABrNz6DXb4uwp0lNw8laGTIa/TECOMAN%20Ruta%207.kml",
				},
				{
					text: "Ruta 8",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAD8t86ysM4XMbuCkWGbbtLoa/TECOMAN%20Ruta%208.kml",
				},
				{
					text: "Ruta 9",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAD05lzgymrJpCxEVVj40X9Ta/TECOMAN%20Ruta%209.kml",
				}
			];
	   }
	   
	 if(valor=='manzanillo'){
		 
		   items = [
		        {
					text: "Ruta 1",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACn68NzI-rH9tg5-P7pLGIQa/DF-1%20Ruta%201.kml",
				},
				{
					text: "Ruta 2",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADTLSR2PeqUF8aFLuvXqAyUa/MANZANILLO%20Ruta%202.kml",
				},
				{
					text: "Ruta 3",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACiZZmjqJDG1NMhWt_SWv9Ma/MANZANILLO%20Ruta%203.kml",
				},
				{
					text: "Ruta 4",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAB6pdV59krU-v1xNv9l2QT8a/MANZANILLO%20Ruta%204.kml",
				},
				{
					text: "Ruta 5",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAKM762AsrndnBQ17bBCP_Ea/MANZANILLO%20Ruta%205.kml",
				},
				{
					text: "Ruta 6",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABeFZ3X5xg4sZC0yY-kIrK7a/MANZANILLO%20Ruta%206.kml",
				},
				{
					text: "Ruta 7",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAKvwgmVx2eqSl1IBFTGQTRa/MANZANILLO%20Ruta%207.kml",
				},
				{
					text: "Ruta 7A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AAAnCq9uZx5Ip6kpPlK_CcAqa/MANZANILLO%20Ruta%207A.kml",
				},
				{
					text: "Ruta 8",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACNgK8f-wnU7CPBzhsWoFbba/MANZANILLO%20Ruta%208.kml",
				},
				{
					text: "Ruta 9",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADIchTEX72GVPYp_yk08g-4a/MANZANILLO%20Ruta%209.kml",
				},
				{
					text: "Ruta 10",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACW287GXOPEkQqUNIH0Gwu_a/MANZANILLO%20Ruta%2010.kml",
				},
				{
					text: "Ruta 10A",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACvLK0RCwJyUP4iTQDdSmfia/MANZANILLO%20Ruta%2010A.kml",
				},
				{
					text: "Ruta 11",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADQ7zSbLbnmsv6E9l6tIJDra/MANZANILLO%20Ruta%2011.kml",
				},
				{
					text: "Ruta 12",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AABVN8gDIHoED2m8nUhhZQrga/MANZANILLO%20Ruta%2012.kml",
				},
				{
					text: "Ruta 14",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AADbR8pxv0-nVSCeqzZyCfffa/MANZANILLO%20Ruta%2014.kml",
				},
				{
					text: "Ruta 15",
					value: "https://www.dropbox.com/sh/bg4i5gjxflrsiut/AACu1QvJWISEwkoe83ZLn-SOa/MANZANILLO%20Ruta%2015.kml",
				}
								
				];

		 }
		 
   if(valor=='mexico')
	   {
		    items = [{
					text: "Ruta 1",
					value: "https://dl.dropbox.com/sh/bg4i5gjxflrsiut/AACn68NzI-rH9tg5-P7pLGIQa/DF-1%20Ruta%201.kml",
				}];
	   
	   }
	   
	   
	 $.each(items, function () {
				$('#rutas-dir').append($('<option>', { 
					value: this.value,
					text : this.text
				}));
			
			});
			  
			
			  
	   
	   }
	   

});


