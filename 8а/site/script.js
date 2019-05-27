$(document).ready(function(){
   
   $(":button").click(function(){
      $(":button").hide();
      $("#wrap1").addClass("add");
      $("#wrap1").animate({height:280},2000); 
      $("#wrap1").animate({width:400},2000); 
      $("#wrap1").animate({padding:20},2000,function(){
         $("#text1").hide(2000,function(){ $("#text2").show(2000);});
      });
   });

});