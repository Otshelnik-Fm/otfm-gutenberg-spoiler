jQuery(".otfm_spoiler_title").click(function(){
  jQuery(this).toggleClass("otfm_title_spoiler_open");
  jQuery(this).next().toggleClass("otfm_spoiler_open");
});