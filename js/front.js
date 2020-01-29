function menuClick(item) {
    $("#menu .menuItem").removeClass('active');
    $("#"+item.id).addClass('active');
    $(".tab-content").hide();
    $("#tab_"+item.id).show();
    ga('set', 'page', '/'+item.id);
    ga('send', 'pageview');
}

function menuMobileClick(item) {
    closeMenu();
    $("#mobile_menu .menuItem").removeClass('active');
    $("#"+item.id).addClass('active');
    $(".tab-content").hide();
    $("#tab_"+item.id.replace("mob-","")).show();
    ga('set', 'page', '/'+item.id);
    ga('send', 'pageview');
}

function openMenu() {
    $("#mobile_menu").width("100%");
}

function closeMenu() {
    $("#mobile_menu").width("0");
}

$(document).ready(function(){
    var classes = ["cloud1","cloud2","cloud3","cloud4","cloud5","cloud6"];

    $(".tagcloud span").each(function(){
        $(this).addClass(classes[~~(Math.random()*classes.length)]);
    });
});