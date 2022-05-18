var gradeA = 90
var gradeB = 70
var gradeC = 50

var percentage = parseInt( prompt("What is your percentage?") ) 

console.log("PERCENTAGE" ,percentage)

if(percentage> 100 || percentage < 1 || isNaN(percentage) ){
 alert("Invalid input. ")
}
else if(percentage>=gradeA  &&  percentage <= 100 ){
   alert(" You've received grade A ")  
}
else if(percentage>= gradeB){

   alert(" You've received grade B ")  

}else if(percentage>= gradeC){
alert("You've received grade C")
}else{
alert("You've failed")
}
