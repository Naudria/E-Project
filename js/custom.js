
$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#caret').toggleClass('reverse');
        $('.close-button').toggle();
    });

});



