(function initialize($) {

  $.fn.kcAccordion = function kcAccordion(
    { closeOther } = {}) {
    const that = $(this).children('.kc-element');

    // Head clicked
    that.children('.kc-head').on('click', function headClicked() {
      const next = $(this).next('.kc-content');
      const expanded = next.hasClass('kc-expanded');

      if(closeOther) closeOthers();
      if(!expanded) expandElement(next);
      else if(!closeOther) closeElement(next);
    });

    // Content clicked
    that.children('.kc-content').on('click', function contentClicked(){
      const $this = $(this);
      const expanded = $this.hasClass('kc-expanded');

      if(closeOther && !expanded) closeOthers();
      if(!expanded) expandElement($this);
    });

    function closeOthers() {
      that.children('.kc-content')
        .removeClass('kc-expanded')
        .css('max-height', '');
    }

    function closeElement(element) {
      element
        .removeClass('kc-expanded')
        .css('max-height', '');
    }

    function expandElement(element) {
      element
        .addClass('kc-expanded')
        .css('max-height', `${next[0].scrollHeight}px`);
    }
  };
})(jQuery);

export {};
