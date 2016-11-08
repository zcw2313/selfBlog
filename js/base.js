/**
 * Created by zzjz111 on 2015/9/8.
 */
$(function(){
   $(".menu-show a").click(function(){
       $(".menu").animate({right:'0px'},"1000");
       $(".menu span").click(function(){
           $(".menu").animate({right:'-200px'},"1000");
       });
   });
});