
$(document).ready(function () {

    $('.slider').slick({
        // dots: true,
        // variableWidth:true,
        // adaptiveHeight:true,
        arrows: true,
        infinite: false,
        speed: 300,
        slidesToShow: 8,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                // centerMode: true,

            }

        }, {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                dots: false,
                infinite: true,

            }


        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                dots: false,
                infinite: false,

            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: false,
                autoplay: false,
                autoplaySpeed: 2000,
            }
        }]
    });


});
