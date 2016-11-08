/* 공통 */

$(function(){
	//버튼 클릭
    $(".btn").on("mousedown",function(){
        $(this).addClass("on");
    }).on("mouseup",function(){
        $(this).removeClass("on");
    });
    
	//TAB
	$(".tab_con").hide();
	$("ul.tab_tit li:first .btn").addClass("active").show();
	$(".tab_con:first").show();

	$("ul.tab_tit li .btn").click(function() {
		$("ul.tab_tit li .btn").removeClass("active");
		$(this).addClass("active");
		$(".tab_con").hide();

		var activeTab = $(this).attr("href");
		$(activeTab).fadeIn(200);
		return false;
	});
    
    //대화 필터
    $("#history_pannel .pan_tit .btn").on("click", function(){
        $("#history_pannel .pan_tit .btn").removeClass("active");
        $(this).addClass("active");
    });
    //대화 선택
    $("#history_pannel .history_list .btn").on("click", function(){
        $("#history_pannel .history_list .btn").removeClass("active");
        $(this).addClass("active");
    });
	
     //아코디언 메뉴
    accoMenu();
    
});
   
// 아코디언메뉴
var accoMenu = function(){
    var accoItem = $(".btn_acco"),
    accoCon = $(".acco_con");
    accoItem.on("click", function(e){
        e.preventDefault();
        accoItem.parent(".acco_item").removeClass("active");
        accoCon.slideUp(200);
        if($(this).parent(".acco_item").find("a").next().is(":hidden") == true){
            $(this).parent(".acco_item").addClass("active");
            $(this).parent(".acco_item").find("a").next().slideDown(200);
        }
    });
};