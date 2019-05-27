console.log(111);

a=12;
console.log(a);
sergey = "hello, world";
console.log(sergey);

b=235
sum = a+b
console.log(sum);

c=213;
console.log(c);

d=12;
sum = c*d
console.log(sum);

v=213;
console.log(v);

s=12;
sum = v/s
console.log(sum);

var fit = 23*7;
console.log(fit);

fit = "zero two";
console.log(fit);

var at="the";
var rt="end";


var contu = at+" "+rt;
console.log(contu);


if (2>3)
console.log("yes");
else
   console.log("no");


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