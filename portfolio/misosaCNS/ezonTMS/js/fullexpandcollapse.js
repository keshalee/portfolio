$(document).ready(function(){
    // HTML markup implementation, overlap mode
    $( '#menu' ).multilevelpushmenu({
        containersToPush: [$( '#pushobj' )],
        direction: 'rtl',
        fullCollapse: true,
        collapsed: true,
        preventItemClick: false,

        // Just for fun also changing the look of the menu
        wrapperClass: 'mlpm_w',
        menuInactiveClass: 'mlpm_inactive'
    });

    // Base expand
    $( '#baseexpand' ).click(function(){
        $( '#menu' ).multilevelpushmenu( 'expand' );
    });

});
