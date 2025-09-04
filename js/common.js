$(document).ready(function(){
    // footer
    // 사업자 정보 열고 닫기
    $('.btn-company').on('click', function() {
        $(this).toggleClass('open');
        $('.company-wrap').slideToggle();

        if ( $(this).hasClass('open') ) {
            $(this).attr('title', '리디(주) 사업자 정보 닫기');
        } else {
            $(this).attr('title', '리디(주) 사업자 정보 열기');
        }
    });

    // common
    // top button
    
	$(window).scroll(function () { // 일정 스크롤 이후 버튼 보이기
		if ($(this).scrollTop() > 300) {
			$('#btn-top').fadeIn();
		} else {
			$('#btn-top').fadeOut();
		}
	});

    $("#btn-top").click(function () { // 부드럽게 올라가기
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
});