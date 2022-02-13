
//button (id)
// abtme
// skil
// portfo
// serv
// conta


// screen (class)

// mainscreen
// aboutscreen
// skillbox
// portfoliobox
// servicebox
// contactbox





$(document).ready(function () {

    $('.aboutphoto img').contextmenu(function () {
        $(this).hide();
    })


    $('#abtme').click(function () {
        $(this).css('background', 'rgb(208, 255, 0)');
        $('.menuarea ul li:gt(0)').css('background', '');
        $('.aboutphoto img').fadeOut(1000).fadeIn(1000).slideUp(1000).slideDown(1000);
        $('.aboutrightpart').animate({ right: '50px' }, 3000);
        $('.aboutrightpart').animate({ right: '0px' }, 1000);
        $('.mainscreen').hide();
        $('.aboutscreen').show();
    });
    $('#skil').click(function () {
        $(this).css('background', 'rgb(255, 255, 255)');
        $('.menuarea ul li:gt(1), .menuarea ul li:lt(1) ').css('background', '');
        $('.mainscreen, .aboutscreen').hide();
        $('.skillbox').show();
    });
    $('#portfo').click(function () {
        $(this).css('background', 'rgb(208, 255, 0)');
        $('.menuarea ul li:gt(2), .menuarea ul li:lt(2) ').css('background', '');
        $('.mainscreen , .aboutscreen,.skillbox').hide();
        $('.portfoliobox').show();
    });
    $('#serv').click(function () {
        $(this).css('background', 'rgb(255, 255, 255)');
        $('.menuarea ul li:gt(3), .menuarea ul li:lt(3) ').css('background', '');
        $('.mainscreen , .aboutscreen,.skillbox, .portfoliobox').hide();
        $('.servicebox').show();
    });
    $('#conta').click(function () {
        $(this).css('background', 'rgb(208, 255, 0)');
        $('.menuarea ul li:gt(4), .menuarea ul li:lt(4) ').css('background', '');
        $('.mainscreen , .aboutscreen,.skillbox,.portfoliobox , .servicebox').hide();
        $('.contactbox').show();
    });

    //btn er kaj ses

    //skill box er kaj

    $('.box1').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box1 p').hide(3000);

        $('.box1 .skillcon').show(3000);
    });
    $('.box1').mouseleave(function () {
        $(this).css('background', '');
        $('.box1 p').show(3000);
        $('.box1 .skillcon').hide(3000);
    });
})