// JavaScript Document
$(document).ready(function(){
	
	$(".menu").click(function(){
		//alert($(window).width());
		if($(window).width() > 480){
			$("#mySidenav").width(300);
			$("#main").animate({marginLeft: "300px"});
			$("#main").animate({opacity: "0.5"},0.2);
		}
		else if($(window).width() < 480){
			$("#mySidenav").width(300);
			$("#main").animate({marginLeft: "50px"});
			$("#main").animate({opacity: "0.5"},0.2);
		}
	})
	
	$(".closebtn").click(function(){
		//alert($(window).width());
		if($(window).width() > 480){
			$("#mySidenav").width(0);
			$("#main").animate({marginLeft: "0px"});
			$("#main").animate({opacity: "1"},1);
		}
		else if($(window).width() < 480){
			$("#mySidenav").width(0);
			$("#main").animate({marginLeft: "0px"});
			$("#main").animate({opacity: "1"},1);
		}
	})
})