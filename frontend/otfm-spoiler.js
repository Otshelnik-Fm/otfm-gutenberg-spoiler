jQuery(document).ready(function($){
    $('.otfm-sp__title').click(function(){
        $(this).parent().toggleClass('js-otfm-sp__opened js-otfm-sp__closed');
    });
    
    var spWrapper = '<div class="otfm-sp__content" style="height:0;opacity:0;visibility:hidden;"></div>';
    $('.wp-block-otfm-box-spoiler-start').each(function() {
        $(this).removeClass('js-otfm-sp-box__closed').addClass('js-otfm-sp__closed');
        
        var spContent = $(this).nextUntil('.wp-block-otfm-box-spoiler-end');
        if ( spContent.next().hasClass('wp-block-otfm-box-spoiler-end') && !spContent.next().hasClass('wp-block-otfm-box-spoiler-start') ){
            $(spContent).detach().appendTo(this).wrapAll(spWrapper);
        } else {
            $(this).addClass('js-otfm-sp__no_closed_tag').next().detach().appendTo(this).wrapAll(spWrapper);
        }
    });
    
    $('#ogs_cr_st').remove();
});