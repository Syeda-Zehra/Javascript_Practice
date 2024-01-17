var calNew = prompt(" Which operation you want to select? + , - , / , *")

if (calNew !== "+" && calNew !== "-" && calNew !== "/" && calNew !== "*") {
    alert ( "invalid operator" )
}

else {    
var input1 =  prompt("input 1")

var input2 = prompt("input 2")

if (calNew === "+") {

var answer =  Number(input1) + Number(input2)
alert(input1 + " + " + input2 + ' = ' + answer)
}

else if (calNew === "-") {
    var answer2 = Number(input1) - Number(input2)
    alert(input1 + " - " + input2 + " = " + answer2)
}
else if (calNew === "/") {
    var answer3 = Number(input1) / Number(input2)
    alert(input1 + "/" + input2 + "=" + answer3)
}

else if (calNew === "*") {
    var answer4 = Number(input1) * Number(input2)
    alert(input1 + "*" + input2 + "=" + answer4)
}

else {
    alert ( "N/A" ) 
} 
};
    