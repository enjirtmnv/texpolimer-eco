import $ from 'jquery';

$(document).ready(function () {

    $('.categories__list-desk-application').click(function (event) {
        if (window.matchMedia('(min-width: 768px)').matches) {
            $('.list-desk-application').slideToggle(400);
        }
        if (!$('.categories').hasClass('add-categories-box-shadow')) {
            $('.categories').addClass('add-categories-box-shadow');
        } else {
            setTimeout(function () {
                $('.categories').removeClass('add-categories-box-shadow');
            }, 399);
        }

    });

    $(document).mouseup(e => {
        if (!$('.list-desk-application').is(e.target)
            && $('.list-desk-application').has(e.target).length === 0 &&
            !$('.categories__list-desk-application').is(e.target)
            && $('.categories__list-desk-application').has(e.target).length === 0
        ) {
            $('.list-desk-application').slideUp(400);
            setTimeout(function () {
                $('.categories').removeClass('add-categories-box-shadow');
            }, 399);
        }
    });

});


