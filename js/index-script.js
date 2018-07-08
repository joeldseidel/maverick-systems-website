$(document).ready(function(){
    $('[data-toggle="tooltip"]').tooltip();
    var infoButton = $('#info-button');
    infoButton.on({
        mouseenter: function(){
            $('#header-carousel').carousel("pause");
            changeToolTip();
        },
        mouseleave: function(){
            $('#header-carousel').carousel("cycle");
            $('#info-tooltip').tooltip("hide");
        },
        click: function(){
            $('#header-carousel').carousel("pause");
            changeToolTip();
        }
    });
    $('#header-carousel').click(function(){
        $('#info-tooltip').tooltip("hide");
    });
});
function changeToolTip(){
    var currentSlide = $('div.active').index() + 1;
    var infoToolTip = $('#info-tooltip');
    switch(currentSlide){
        case 1:
            infoToolTip.tooltip("dispose");
            infoToolTip.attr('title', 'Maverick Systems provides powerful tools for manufacturing and industrial organizations to manage inventory, production, and the supply chain').tooltip("show");
            break;
        case 2:
            infoToolTip.tooltip("dispose");
            infoToolTip.attr('title', "Maverick Systems is committed to improving the world with software. Our custom solutions are built to facilitate efficiency and productivity").tooltip("show");
            break;
        case 3:
            infoToolTip.tooltip("dispose");
            infoToolTip.attr('title', "Maverick Systems works to streamline the complex world of industrial supply chains with our extensive work on developing user-oriented metrics and tools").tooltip("show");
            break;
        case 4:
            infoToolTip.tooltip("dispose");
            infoToolTip.attr('title', "Maverick System is 100% student owned. Our team works everyday to deliver quality software to our customers in a timely and effective manner. Contact us to learn more!").tooltip("show");
            break;
    }
}