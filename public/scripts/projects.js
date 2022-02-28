$(window).ready(function(req, res) {
    $('.info-card').find('.button-container').hide()

    $('.info-card').mouseenter(async function() {
        $(this).children().find('.button-container').show();
    });

    $('.info-card').mouseleave(async function() {
        $(this).children().find('.button-container').hide();
    });
});