$('.header .menu').click(function() {
		if ($('.menubox').hasClass('active')) {
			$(this).removeClass('active')
			$('.menubox').removeClass('active', function() {})
			setTimeout(function() {
				$('.menubox').hide()
			}, 300)
		} else {
			$(this).addClass('active')
			$('.menubox').show(function() {
				$(this).addClass('active')
			})
		}

	});
	$('.menubox .mask').click(function() {
		$('.header .menu').removeClass('active')
		$('.menubox').removeClass('active', function() {})
		setTimeout(function() {
			$('.menubox').hide()
		}, 300)
	})
	$('.menubox li a.subtitle').click(function() {
		$(this).toggleClass('open')
	})