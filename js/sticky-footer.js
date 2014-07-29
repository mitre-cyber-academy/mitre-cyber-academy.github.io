var stick = function () {
    $('body').css('margin-bottom', $('#page-footer').height() + 10);

}
$(document).ready(function () {
    stick();
});


$(window).resize(function () {
    stick();
});