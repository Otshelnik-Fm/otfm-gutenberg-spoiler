jQuery(document).ready(function($){
    $('.otfm-sp__title').click(function(){
        $(this).parent().toggleClass('js-otfm-sp__opened js-otfm-sp__closed');
        if( $(this).parent().hasClass('js-otfm-sp__opened') ){
            $(this).parent().attr('aria-expanded','true');
        } else {
            $(this).parent().attr('aria-expanded','false');
        }
    });

    $('.otfm-sp__wrapper:not([role="button"])').each(function() {
        $(this).attr('role','button');
    });
    $('.otfm-sp__wrapper:not([tabindex="0"])').each(function() {
        $(this).attr('tabindex','0');
    });
    $('.otfm-sp__wrapper:not([aria-expanded="false"])').each(function() {
        $(this).attr('aria-expanded','false');
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

    $('.otfm-sp__wrapper').keydown(function(event) {
       var keyCode = event.which; // захват клавиши
       switch(keyCode){
            case 38: // up arrow - если открыт, закрыть
                $(this).removeClass('js-otfm-sp__opened').addClass('js-otfm-sp__closed').attr('aria-expanded','false');
                event.preventDefault();
                break;
            case 40: // down key - если закрыт, открыть
                $(this).removeClass('js-otfm-sp__closed').addClass('js-otfm-sp__opened').attr('aria-expanded','true');
                event.preventDefault();
                break;
            case 13: case 32: // enter или space - переключить состояние
                $(this).toggleClass('js-otfm-sp__opened js-otfm-sp__closed');
                if( $(this).hasClass('js-otfm-sp__opened') ){
                    $(this).attr('aria-expanded','true');
                } else {
                    $(this).attr('aria-expanded','false');
                }
                event.preventDefault();
                break;
            case 35: // end key - к последнему
                $('.otfm-sp__wrapper').last().focus();
                event.preventDefault();
                break;
            case 36: // home key - к первому
                $('.otfm-sp__wrapper').first().focus();
                event.preventDefault();
                break;
            default:
               // ничего
       }
    });
});