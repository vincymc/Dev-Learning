﻿$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });

    //add Bootstrap's scrollspy

    $('body').scrollspy({
        target: '.navbar',
        offset:160
    });

    // smooth scrolling

    $('nav a,.scroll-button a').bind('click', function () {

        $('html,body').stop().animate({
            scrollTop:$($(this).attr('href')).offset().top-100
        }, 1500, 'easeInOutExpo')
        event.preventDefault();
    });

    // parallax scrolling with stellar.js

    $(window).stellar();

    //initialize WoW for element animation
    new WOW().init();

    //initialize NanoGallery
    $(document).ready(function () {
        $("#nanoGallery3").nanoGallery({
            thumbnailWidth:'auto',
            thumbnalHeight: 100,
            //locationHash: false,
            
            thumbnailHoverEffect: 'borderLighter,imageScaleIn80'     
          
        });
    });    

});


