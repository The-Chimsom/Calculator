let display = document.getElementById('display_block');

let nine = document.getElementById('nine')
let eight= document.getElementById('eight')
let seven = document.getElementById('seven')
let six = document.getElementById('six')
let five = document.getElementById('five')
let four = document.getElementById('four')
let three = document.getElementById('three');
let two = document.getElementById('two');
let one = document.getElementById('one');
let del = document.getElementById('delete');
let zero = document.getElementById('zero');
let decimal = document.getElementById('decimal');



nine.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + nine.textContent
        Number(display.textContent)
    } else {
        display.textContent = nine.textContent
    }
   // display.textContent = 9;
});
eight.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + eight.textContent
        Number(display.textContent)
    } else {
        display.textContent = eight.textContent
    }
//display.textContent = 8;
});
seven.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + seven.textContent
        Number(display.textContent)
    }  else {
        display.textContent = seven.textContent
    }
// display.textContent = 7;
});
six.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + six.textContent
        Number(display.textContent)
    }  else {
        display.textContent = six.textContent
    }
   // display.textContent = 6;
});
five.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + five.textContent
        Number(display.textContent)
    }  else {
        display.textContent = five.textContent
    }
   // display.textContent = 5;
});
four.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + four.textContent
        Number(display.textContent)
    }  else {
        display.textContent = four.textContent
    }
   // display.textContent = 4;
});
three.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + three.textContent
        Number(display.textContent)
    }  else {
        display.textContent = three.textContent
    }
   // display.textContent = 3;
});
two.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + two.textContent
        Number(display.textContent)
    }  else {
        display.textContent = two.textContent
    }
    
});
one.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + one.textContent
        Number(display.textContent)
    }  else {
        display.textContent = one.textContent
    }
     
});
zero.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + zero.textContent
        Number(display.textContent)
    }  else {
        display.textContent = zero.textContent
    }
});
decimal.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== ""){
        display.textContent = display.textContent + decimal.textContent
        Number(display.textContent)
    }  else {
        display.textContent =decimal.textContent
    }
});
del.addEventListener('click', function(event){
    console.log(event);
    if (display.textContent !== "") {
        display.textContent = "";
    } else {
        display.textContent 
    }
});