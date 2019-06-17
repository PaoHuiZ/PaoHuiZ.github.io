$(document).ready(function() { 
	$(".foot .cer").on("click","img",function(){
		$(".shade").show();
		
		var file="/assets/v5/images/"+$(this).attr("name");
		$(".cerPop img").attr("src",file);
		var ml=($(".cerPop img").width())/2;
		$(".cerPop").css({"marginLeft":"-"+ml+"px"});
		$(".cerPop").fadeIn();
	})
	$(".cerPop").on("click",function(){
		$(".shade").hide();
		$(".cerPop").hide();
	})

	$('.product').hover(function(){
		$('.productBox').show();
	},function(){
		$('.productBox').hide();
	})
	$('.Suggest').hover(function(){
		$('.SuggestBox').show();
	},function(){
		$('.SuggestBox').hide();
	})
	$('.as_regards').hover(function(){
		$('.as_regardsBox').show();
	},function(){
		$('.as_regardsBox').hide();
	})


	$(".footWechat").hover(function(){
		$(this).find('img').css('display','block');
	},function(){
		$(this).find('img').css('display','none');
	})


});
