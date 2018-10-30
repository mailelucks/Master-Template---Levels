// ---- Quantity Incrementer ---- //
var timer,
timeToWait = 500;

$('#js-increase-quantity, .increase-quantity').on('click', function (e) {
	e.preventDefault();
	var $qty = $(this).siblings('.increase-decrease-input'),
		currentVal = parseInt($qty.val());
		$update = $qty.closest('form').find('.js-update-quantity');

	if (!isNaN(currentVal)) {
		$qty.val(currentVal + 1).change();
		    clearTimeout(timer);

		    timer = setTimeout(function () {
	    		if(($('html').hasClass('maxw_767')) && ($('body').hasClass('bask'))) {
					$qty.closest('form').submit();
				} else {
			       $update.click();
				}
		    }, timeToWait);
	}
	
});
$('#js-decrease-quantity, .decrease-quantity').on('click', function (e) {
	e.preventDefault();
	var $qty = $(this).siblings('.increase-decrease-input'),
		currentVal = parseInt($qty.val()),
		min = (!isNaN($qty.data('min'))) ? $qty.data('min') : 0;
		$update = $qty.closest('form').find('.js-update-quantity');

	if (!isNaN(currentVal) && currentVal > min) {
		$qty.val(currentVal - 1).change();
	    	clearTimeout(timer);
	    	timer = setTimeout(function () {
	    		if(($('html').hasClass('maxw_767')) && ($('body').hasClass('bask'))) {
					$qty.closest('form').submit();
				} else {
			       $update.click();
				}
		    }, timeToWait);
	}
});

$('.js-update-quantity').on('click', function(){
	if(($('html').hasClass('maxw_767')) && ($('body').hasClass('bask'))) {
		$(this).closest('form').submit();
	}
});