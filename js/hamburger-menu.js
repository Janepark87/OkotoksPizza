// Header Hamburger Navigation - button for hamburger Bar
// $(document).ready(function() {
//     $('#hamburger-button').on('click', function(){
//         $('#hamburger-nav').toggleClass('open');
//     });
// });

// $(function() {
//     $('#hamburger-button').click(function(){
//         $('#hamburger-nav').toggleClass('open');
//         if($('#hamburger-button > i').is('.fa.fa-bars')){
//             $('#hamburger-button > i').removeClass('fa-bar fa-bars').addClass('fa-bar fa-remove');
//         }else {
//             $('#hamburger-button > i').removeClass('fa-bar fa-remove').addClass('fa-bar fa-bars');
//         }
//     });
// });

$(function() {
    $('#hamburger-button').click(function(){
        $('#hamburger-nav').toggleClass('open');
        $(this).find('i').toggleClass('fa-bars').toggleClass('fa-remove');
    });
});


// Menu - MENU LIST - BUTTON FOR ArrowDown
$(document).ready(function() {
    $('#menulist-button').on('click', function(){
        $('#menulist-nav').toggleClass('open');
    });
});
