 AOS.init({
 	duration: 800,
 	easing: 'slide'
 });

(function($) {

	"use strict";

	var isMobile = {
		Android: function() {
			return navigator.userAgent.match(/Android/i);
		},
			BlackBerry: function() {
			return navigator.userAgent.match(/BlackBerry/i);
		},
			iOS: function() {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
			Opera: function() {
			return navigator.userAgent.match(/Opera Mini/i);
		},
			Windows: function() {
			return navigator.userAgent.match(/IEMobile/i);
		},
			any: function() {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};


	$(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: 'scroll'
  });


	var fullHeight = function() {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function(){
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function() {
		setTimeout(function() { 
			if($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
   $.Scrollax();

	var carousel = function() {
		$('.home-slider').owlCarousel({
	    loop:true,
	    autoplay: true,
	    margin:0,
	    animateOut: 'fadeOut',
	    animateIn: 'fadeIn',
	    nav:false,
	    autoplayHoverPause: false,
	    items: 1,
	    navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
	    responsive:{
	      0:{
	        items:1
	      },
	      600:{
	        items:1
	      },
	      1000:{
	        items:1
	      }
	    }
		});
	
		$('.carousel-testimony').owlCarousel({
			center: true,
			loop: false,
			items:1,
			margin: 30,
			stagePadding: 0,
			nav: false,
			navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 3
				},
				1000:{
					items: 3
				}
			}
		});

	};
	carousel();

	$('nav .dropdown').hover(function(){
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			// timer;
		// timer = setTimeout(function(){
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});

	// scroll
	var scrollWindow = function() {
		$(window).scroll(function(){
			var $w = $(this),
					st = $w.scrollTop(),
					navbar = $('.ftco_navbar'),
					sd = $('.js-scroll-wrap');

			if (st > 150) {
				if ( !navbar.hasClass('scrolled') ) {
					navbar.addClass('scrolled');	
				}
			} 
			if (st < 150) {
				if ( navbar.hasClass('scrolled') ) {
					navbar.removeClass('scrolled sleep');
				}
			} 
			if ( st > 350 ) {
				if ( !navbar.hasClass('awake') ) {
					navbar.addClass('awake');	
				}
				
				if(sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if ( st < 350 ) {
				if ( navbar.hasClass('awake') ) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if(sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();

	
	var counter = function() {
		
		$('#section-counter').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function(){
					var $this = $(this),
						num = $this.data('number');
						console.log(num);
					$this.animateNumber(
					  {
					    number: num,
					    numberStep: comma_separator_number_step
					  }, 7000
					);
				});
				
			}

		} , { offset: '95%' } );

	}
	counter();

	var contentWayPoint = function() {
		var i = 0;
		$('.ftco-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .ftco-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						},  k * 50, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();


	// navigation
	var OnePageNav = function() {
		$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		 	e.preventDefault();

		 	var hash = this.hash,
		 			navToggler = $('.navbar-toggler');
		 	$('html, body').animate({
		    scrollTop: $(hash).offset().top
		  }, 700, 'easeInOutExpo', function(){
		    window.location.hash = hash;
		  });


		  if ( navToggler.is(':visible') ) {
		  	navToggler.click();
		  }
		});
		$('body').on('activate.bs.scrollspy', function () {
		  console.log('nice');
		})
	};
	OnePageNav();


	// magnific popup
	$('.image-popup').magnificPopup({
    type: 'image',
    closeOnContentClick: true,
    closeBtnInside: false,
    fixedContentPos: true,
    mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
     gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    },
    image: {
      verticalFit: true
    },
    zoom: {
      enabled: true,
      duration: 300 // don't foget to change the duration also in CSS
    }
  });

  $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });



	var goHere = function() {

		$('.mouse-icon').on('click', function(event){
			
			event.preventDefault();

			$('html,body').animate({
				scrollTop: $('.goto-here').offset().top
			}, 500, 'easeInOutExpo');
			
			return false;
		});
	};
	goHere();




})(jQuery);

// *PRODUCTS* //
function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{productId:10001, brand:'Asama', img:'./images/products/sp1.jpg', name:'XE ĐẠP ĐIỆN ASAMA EBK SH1801', price:3000},
			{productId:10002, brand:'Giant', img:'./images/products/sp2.jpg', name:'XE ĐẠP ĐIỆN GIANT M133S', price:4000},
			{productId:10003, brand:'Yamaha', img:'./images/products/sp3.jpg', name:'XE ĐẠP ĐIỆN YAMAHA', price:3500},
			{productId:10004, brand:'Hkbike', img:'./images/products/sp4.jpg', name:'XE ĐẠP ĐIỆN HKBIKE', price:3700},
			{productId:10005, brand:'Hyundai', img:'./images/products/sp5.jpg', name:'XE ĐẠP ĐIỆN HYUNDAI', price:3300},
			{productId:10006, brand:'Nijia', img:'./images/products/sp6.jpg', name:'XE ĐẠP ĐIỆN NIJIA', price:2000},
			{productId:10007, brand:'Honda', img:'./images/products/sp7.jpg', name:'XE ĐẠP ĐIỆN HONDA', price:3000},
			{productId:10008, brand:'Asama', img:'./images/products/sp8.jpg', name:'XE ĐẠP ĐIỆN ASAMA EBK SH1801', price:5000},
			{productId:10009, brand:'Giant', img:'./images/products/sp10.jpg', name:'XE ĐẠP ĐIỆN GIANT M133S', price:6000},
			{productId:10010, brand:'Yamaha', img:'./images/products/sp11.jpg', name:'XE ĐẠP ĐIỆN YAMAHA', price:3900},
			{productId:10011, brand:'Hkbike', img:'./images/products/sp12.jpg', name:'XE ĐẠP ĐIỆN HKBIKE', price:2400},
			{productId:10012, brand:'Hyundai', img:'./images/products/sp15.jpg', name:'XE ĐẠP ĐIỆN HYUNDAI', price:1300},
			{productId:10013, brand:'Nijia', img:'./images/products/sp1.jpg', name:'XE ĐẠP ĐIỆN NIJIA', price:5600},
			{productId:10014, brand:'Honda', img:'./images/products/sp2.jpg', name:'XE ĐẠP ĐIỆN HONDA', price:5400},
			{productId:10015, brand:'Yamaha', img:'./images/products/sp3.jpg', name:'XE ĐẠP ĐIỆN YAMAHA', price:8200},
			{productId:10016, brand:'Hkbike', img:'./images/products/sp4.jpg', name:'XE ĐẠP ĐIỆN HKBIKE', price:1200},
			{productId:10017, brand:'Hyundai', img:'./images/products/sp5.jpg', name:'XE ĐẠP ĐIỆN HYUNDAI', price:8300},
			{productId:10018, brand:'Nijia', img:'./images/products/sp6.jpg', name:'XE ĐẠP ĐIỆN NIJIA', price:23000}
		];
		// console.log(productArray)
		localStorage.setItem('product',JSON.stringify(productArray));

	}
}
createProduct()

function deleteItems() {
	localStorage.clear();
}

function showProduct() {
	var productArray = JSON.parse(localStorage.getItem('product'));
	var html = ``;
	for(var i = 0; i < productArray.length; i++) {
		html += `
		<div class="col-sm-6 col-md-6 col-lg-4">
			<div class="product">
				<a class="img-prod" onclick="showProductInfo(${productArray[i].productId})"><img class="img-fluid" src="${productArray[i].img}" alt="">
					<div class="overlay"></div>
				</a>
				<div class="text py-3 px-3">
					<h3><a href="#">${productArray[i].name}</a></h3>
					<div class="d-flex">
						<div class="pricing">
							<p class="price"><span>$${productArray[i].price}</span></p>
						</div>
						<div class="rating">
							<p class="text-right">
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
								<a href="#"><span class="ion-ios-star-outline"></span></a>
							</p>
						</div>
					</div>
					<p class="bottom-area d-flex px-3">
						<a onclick="showProductInfo(${productArray[i].productId})" class="add-to-cart text-center py-2 mr-1"><span>Add to cart <i class="ion-ios-add ml-1"></i></span></a>
						<a onclick="showProductInfo(${productArray[i].productId})" class="buy-now text-center py-2">Buy now<span><i class="ion-ios-cart ml-1"></i></span></a>
					</p>
				</div>
			</div>
		</div>
		`;
	}
	$('#product').html(html);
}

function getProductInfo() {
	var product = JSON.parse(localStorage.getItem('product-detail'));
	if (product) {
		document.getElementById('product-name').innerHTML = product.name;
		document.getElementById('product-price').innerHTML = product.price;
		document.getElementById('product-img').src = product.img;
	}
}

function showProductInfo(productId) {
	var productArray = JSON.parse(localStorage.getItem('product'));
	const product = productArray.find(p => p.productId === productId)
	if (product) {
		localStorage.setItem('product-detail',JSON.stringify(product))
		window.location.href='/product-single.html'
	}

}

// Add to cart
function addToCart() {
	var mau = document.getElementById('mau').value;
	var quantity = document.getElementById('quantity').value;
	var productArray = JSON.parse(localStorage.getItem('product'));
	var productDetail = JSON.parse(localStorage.getItem('product-detail'));
	// console.log(productDetail.productId);
	var productTemp;
	for (var i = 0; i < productArray.length; i++) {
		if (productArray[i].productId === productDetail.productId) {
			productTemp = productArray[i];
			break;
		}
	}
	if (localStorage.getItem('cart') === null) {
		var cartArray = [];
		productTemp.quantity = quantity;
		productTemp.mau = mau;
		productTemp.totalPrice = quantity*productTemp.price;
		cartArray.unshift(productTemp);
		localStorage.setItem('cart', JSON.stringify(cartArray));
	} else {
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		productTemp.quantity = quantity;
		productTemp.mau = mau;
		productTemp.totalPrice = quantity*productTemp.price;
		cartArray.unshift(productTemp);
		localStorage.setItem('cart', JSON.stringify(cartArray));
		alert('Đã thêm vào giỏ hàng');
	}
}

// Show cart
function showCart() {
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	var html = ``;
	var totalPrice = 0;
	if (cartArray.length > 0) {
		for (var i = 0; i < cartArray.length; i++) {
			html += `
			<div class="col-md-12">
				<div class="cart-list">
					<table class="table">
						<thead class="thead-primary">
						</thead>
						<tbody>
							<tr class="text-center">
							<td class="product-remove"><a onclick="deleteCartItem(${cartArray[i].productId})"><span class="ion-ios-close"></span></a></td>
							
							<td class="image-prod"><div class="img" style="background-image:url(${cartArray[i].img});"></div></td>
							
							<td class="product-name">
								<h3>${cartArray[i].name}</h3>
							</td>
							
							<td class="price">$${cartArray[i].price}</td>
							
							<td class="quantity">
								<div class="input-group col-md-12 d-flex mb-12">
									<span class="input-group-btn mr-2">
										<button type="button" onclick="quantityDown2(${cartArray[i].productId})" class="quantity-left-minus btn"  data-type="minus" data-field="">
											<i class="ion-ios-remove"></i>
										</button>
									</span>
									<input type="text" id="quantity" name="quantity" class="form-control input-number" value="${cartArray[i].quantity}" onchange="updateCart(this.value,${cartArray[i].productId})" min="1" max="100">
										<span class="input-group-btn ml-2">
										<button type="button" onclick="quantityUp2(${cartArray[i].productId})" class="quantity-right-plus btn" data-type="plus" data-field="">
											<i class="ion-ios-add"></i>
										</button>
									</span>
								</div>
							</div>
							</td>
							
							<td class="total">$${cartArray[i].price*cartArray[i].quantity}</td>
							</tr><!-- END TR-->
						</tbody>
						</table>
					</div>
			</div>
			`;
			totalPrice += cartArray[i].price*cartArray[i].quantity;
		}
		html += `
		<div class="col col-lg-5 col-md-6 mt-5 cart-wrap">
			<div class="cart-total mb-3">
				<h3>Cart Totals</h3>
				<p class="d-flex">
					<span>Delivery</span>
					<span>$0.00</span>
				</p>
				<p class="d-flex">
					<span>Discount</span>
					<span>$0.00</span>
				</p>
				<hr>
				<p class="d-flex total-price">
					<span>Total</span>
					<span>$${totalPrice}</span>
				</p>
			</div>
			<p class="text-center"><a href="checkout.html" class="btn btn-primary py-3 px-4">Proceed to Checkout</a></p>
		</div>
		`;
	} else {
		html += `
		<tr>
			<td colspan="6" class="text-center">
				<h2 style="text-align: center;">Your cart is empty</h2>
			</td>
		</tr>
		`;
	}
	$('#cart').html(html);
}

// Delete Item
function deleteCartItem(id){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			cartArray.splice(i, 1);
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCart();
}

// Delete cart
function deleteCart(){
	localStorage.removeItem('cart');
	showCartTable();
}

// Quantity Down
function quantityDown(){
	if(document.getElementById('quantity').value > 1){
		document.getElementById('quantity').value-1;
	}
}

//Quantity Up
function quantityUp(){
	document.getElementById('quantity').value + 1;
}

// Quantity Down 2
function quantityDown2(id){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			if(cartArray[i].quantity>1) {
				cartArray[i].quantity--;
			}
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCart()
}

//Quantity Up 2
function quantityUp2(id){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
				cartArray[i].quantity++;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCart()
}

// checkout page
function checkout(){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	var html = '';
	var totalPrice = 0;
	if(cartArray.length>0){
		for (var i = 0; i < cartArray.length; i++) {
			totalPrice += cartArray[i].price*cartArray[i].quantity;
		}
		html += `
		<div class="cart-detail cart-total bg-light p-3 p-md-4">
			<h3 class="billing-heading mb-4">Cart Total</h3>
			<p class="d-flex">
				<span>Subtotal</span>
				<span>$${totalPrice}</span>
			</p>
			<p class="d-flex">
				<span>Delivery</span>
				<span>$0.00</span>
			</p>
			<p class="d-flex">
				<span>Discount</span>
				<span>$3.00</span>
			</p>
			<hr>
			<p class="d-flex total-price">
				<span>Total</span>
				<span>$${totalPrice}</span>
			</p>
		</div>
		`;
	} else {
		html += `
		<div class="col-md-12">
			<div class="cart-detail">
				<div class="row">
					<div class="col-md-2">
					</div>
					<div class="col-md-10">
						<h5>Your cart is empty</h5>
					</div>
				</div>
			</div>
		</div>
		`;
	}
	$('#cart').html(html);
}
