$(function(){
	$el = $('.num li');

	$el.each(function(index) {
		var $this = $(this);

		if(sessionStorage[index] === 'true') {
			$this.addClass('on');
		}
	});

	$el.on('click',function(){
		var $this = $(this),
			index = $el.index($this);

		if($this.prop('class').indexOf('on') < 0) {
			sessionStorage[index] = true;
			$this.addClass('on');
		} else {
			sessionStorage[index] = false;
			$this.removeClass('on');
		}
	});
});