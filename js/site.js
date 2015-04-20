$(document).ready(function() {
	
	$('#side-nav').toc({
		headers		: 'h1,h2',
		listType	: 'ul class="nav bs-sidenav"',
		title		: '',
		showSpeed	: 0,
	});
	
	$('#side-nav').affix({
		offset: {
			top: 60
		}
	});

	var $body   = $(document.body);
	var navHeight = $('.navbar').outerHeight(true) + 10;

	$body.scrollspy({
		target: '#side-nav',
		offset: navHeight
	});
	
});