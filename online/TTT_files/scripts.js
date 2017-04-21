/**
 * Created by kofi on 1/26/17.
 */
$(document).ready(function () {
    $('.chat-toggle').on('click', function (event) {
        $('.chat-sidebar').toggleClass('focus');
        $('.chat-toggle').toggleClass('chat-toggle-width');
        //$('.chat-search').toggleClass('view-search');
        //  $('.chat-search').toggleClass('chat-search');


    });

    $(".hide-chat").click(function () {
        $('.chat-sidebar').toggleClass('focus');
        $('.chat-toggle').toggleClass('chat-toggle-width');
        //$('.chat-search').toggleClass('view-search');
        //$('.chat-search').toggleClass('chat-search');

    });
})
