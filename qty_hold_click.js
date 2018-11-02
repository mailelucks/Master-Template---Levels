// ---- Quantity Incrementer ---- //
var timeout = 0;

$('#js-increase-quantity, .increase-quantity, #js-decrease-quantity, .decrease-quantity').on('mousedown', function() {
    var $element = $(this),
    	$qty = $(this).siblings('.increase-decrease-input'),
		$currentVal = parseInt($qty.val());

		$element.addClass('qty-active');
		
    	timeout = setTimeout(qtyUpdates($element, $qty, $currentVal), 1000);

}).on('mouseup mouseleave', function() {
	var $update = $('.qty-active').closest('form').find('.js-update-quantity');
    clearTimeout(timeout);
    $update.trigger('click');
    $('.qty-active').removeClass('qty-active');
});

function qtyUpdates(element, qty, currentVal){
	if (element.attr('class').indexOf('increase') >= 0) {
		if (!isNaN(currentVal)) {
			qty.val(currentVal + 1).change();
		}
	} else if (element.attr('class').indexOf('decrease') >= 0) {
			min = (!isNaN(qty.data('min'))) ? qty.data('min') : 0;
		if (!isNaN(currentVal) && currentVal > min) {
			qty.val(currentVal - 1).change();
		}
	}
}