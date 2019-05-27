console.log(121);

a=11
console.log(a);
irina= "I love horse!";
console.log(irina);

b=16;
sum = a+b;
console.log(sum);

$(document).ready(function(){
   
   $(":button").click(function(){
      $(":button").hide();
      $("#wrap1").addClass("add");
      $("#wrap1").animate({height:280},2200); 
      $("#wrap1").animate({width:400},2300); 
      $("#wrap1").animate({padding:20},2100,function(){
         $("#text1").hide(2000,function(){ $("#text2").show(2000);});
      });
   });

});























