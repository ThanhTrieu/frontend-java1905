$(function(){
	// day la ham khoi tao cua JQ
	// cho doi trinh duyet thuc thi load xong cac ma HTML va CSS roi moi thuc thi code JS nam ben trong
	// sau nay toan bo code viet bang thu vien JQ deu dat trong ham nay
	// alert('Hello word');
	// bat su kien click button bang JQ
	$('button[class="btn"]').click(function(){
		// lay gia tri cua mot thuoc tinh trong phan tu HTML
		let valId = $('#jQuery').attr('id');
		console.log(valId);

		let valClass = $('h1.js').prop('class');
		console.log(valClass);

		$('img').removeAttr('src');

		if($('div[name="content"]').hasClass('box'))
		{
			// xoa luon class do
			$('div[name="content"]').removeClass('box');
		} else {
			// them class
			$('div[name="content"]').addClass('box-2');
		}

		$('#box-2').toggleClass('box-2');

		let text = $('input[class|="my"]').val().trim();
		// val(): lay gia tri trong o text
		// trim(): xoa khoang trang 2 dau
		alert(text);
	});
	// $ == jQuery : keyword
	// ('button[class="btn"]') : selector cua JQ
	// click(): su kien click - khong can tien to "on"
	// function(){} : callback function - xu ly hanh dong nao do cho su kien "click"
	// 
	
	$('#clk2').click(function(){
		// css cho box class box-css
		// signle CSS
		/*
		$('.box-css').css('width','300px');
		$('.box-css').css('height','300px');
		$('.box-css').css('border','1px solid red');
		$('.box-css').css('background-color','yellow');
		*/
		
		// multil
		$('.box-css').css({
			width: '300px',
			height: '300px',
			border: '1px solid red',
			backgroundColor: 'yellow',
			marginTop: '30px'
		});

		// lay ra kich thuoc cua phan tu
		let w = $('.box-css').width();
		let h = $('.box-css').height();
		console.log(`Width: ${w} - Height : ${h}`);

		// xet lai kich thuoc 
		$('.box-css').width(500);
		$('.box-css').height(500);

		let w2 = $('.box-css').width();
		let h2 = $('.box-css').height();
		console.log(`Width: ${w2} - Height : ${h2}`);

		let inW = $('.box-css-2').innerWidth();
		let inH = $('.box-css-2').innerHeight();

		console.log(`inW : ${inW} - inH : ${inH}`);

		$('ul.menu li').eq(2).css('color', 'blue');
		
		if($('input[name="test"]').is(':checked')){
			console.log('Ban da tich chon');
		} else {
			console.log('Ban chua tich chon');
		}

		$('section.section').find('nav>div.primary').find('h5').css('color', 'blue');

		$('section.section').next().next().css({
			width: '300px',
			height: '300px',
			border: '1px solid red'
		});

		$('h4.title').parent().parent().css({
			width: '300px',
			height: '300px',
			border: '1px solid red'
		});

		// lay ra noi dung cua the HTML H1
		let dataTagH1 = $('#jQuery').html('Learning java');
		//alert(dataTagH1);
		// xoa noi dung
		$('#jQuery').empty();
		// xoa the html
		$('#jQuery').remove();
	});

});









