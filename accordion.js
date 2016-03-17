(function initialize($) {

  $.fn.kcAccordion = function kcAccordion(
    { closeOther } = {}) {
    const that = $(this).children('.kc-element');

    that.children('.kc-head').on('click', function headClicked() {
      const next = $(this).next('.kc-content');
      const expanded = next.hasClass('kc-expanded');

      if(closeOther) {
        that.children('.kc-content')
          .removeClass('kc-expanded')
          .css('max-height', '');
      }

      if(!expanded) {
        next
          .addClass('kc-expanded')
          .css('max-height', `${next[0].scrollHeight}px`);
      }
      else if(!closeOther) {
        next
          .removeClass('kc-expanded')
          .css('max-height', '');
      }
    });
  };
})(jQuery);

export {};
