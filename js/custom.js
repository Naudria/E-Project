var state = "minimized";
// //Check if navbar is expanded or minimized and handle 
let subMenu = document.querySelectorAll("#submenu")

$('#navbar-toggle').click(function() {
    if (state == "expanded") {
        $('.sidebar').css('margin-left', '-180px');
        $(subMenu).css('display', 'none');
        state = "minimized";
    } else {
        if (state == "minimized") {
            $('.sidebar').css('margin-left', '0px');
            $(subMenu).css('display', 'block');
            state = "expanded";
        }
    }
});
