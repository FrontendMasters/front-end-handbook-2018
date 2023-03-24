function insertLogo() {
    document.querySelector('.book-summary').insertAdjacentHTML('afterbegin', 
    `<div class="book-logo"><a href="https://frontendmasters.com/?utm_source=website&utm_medium=website&utm_campaign=handbook-2018"><img width=250 height=40 src="https://static.frontendmasters.com/assets/fm/js/images/frontendmasters_3bcb5619.svg"></a></div>`);
}
insertLogo();

/*
 * Google Tag Manager Tracking
 */
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    '//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NF375C');
/*
 * End Google Tag Manager
 */
