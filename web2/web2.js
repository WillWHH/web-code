/*同页面链接的滑动跳转*/
$(document).ready(function() {
    $('#a_title').click(function(){
        $('html, body').animate({scrollTop:$('#title').offset().top-50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_meta').click(function(){
        $('html, body').animate({scrollTop:$('#meta').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_table').click(function(){
        $('html, body').animate({scrollTop:$('#table').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_tr').click(function(){
        $('html, body').animate({scrollTop:$('#tr').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_td').click(function(){
        $('html, body').animate({scrollTop:$('#td').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_caption').click(function(){
        $('html, body').animate({scrollTop:$('#caption').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_dl').click(function(){
        $('html, body').animate({scrollTop:$('#dl').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_dd').click(function(){
        $('html, body').animate({scrollTop:$('#dd').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_dt').click(function(){
        $('html, body').animate({scrollTop:$('#dt').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_blockquote').click(function(){
        $('html, body').animate({scrollTop:$('#blockquote').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_q').click(function(){
        $('html, body').animate({scrollTop:$('#q').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_code').click(function(){
        $('html, body').animate({scrollTop:$('#code').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_pre').click(function(){
        $('html, body').animate({scrollTop:$('#pre').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_p').click(function(){
        $('html, body').animate({scrollTop:$('#p').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_br').click(function(){
        $('html, body').animate({scrollTop:$('#br').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_hr').click(function(){
        $('html, body').animate({scrollTop:$('#hr').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_a').click(function(){
        $('html, body').animate({scrollTop:$('#a').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_img').click(function(){
        $('html, body').animate({scrollTop:$('#img').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_ul').click(function(){
        $('html, body').animate({scrollTop:$('#ul').offset().top+50}, 'slow');
    });
});
$(document).ready(function() {
    $('#a_ol').click(function(){
        $('html, body').animate({scrollTop:$('#ol').offset().top+50}, 'slow');
    });
});
/*侧边栏的显示和隐藏*/
$(document).ready(function() {
    $('#img1').click(function(){
        $(".menu").slideToggle(1000);
    });
});
