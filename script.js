var a=10
var b=15
var fname=prompt("Enter your name")

function add(){
var c=a*b
document.getElementById("no").innerHTML=c

}
add()
function sub(){
var d=b-a
document.getElementById("no2").innerHTML=d
}
function display(){
    document.getElementById("na").innerHTML="Hello, "+fname
}
