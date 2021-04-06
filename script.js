function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    res = document.getElementById("result"); 
    if (p > 0) {
    interest = p * r/100*y;
    i = 2021 + y*1;
    res.innerHTML = "If you deposit <span class='highlight'>" + p + "</span>, <br> at an interest rate of <span class='highlight'>" + r + "%</span>.<br> You will receive an amount of <span class='highlight'>" + interest +"</span>,<br> in the year <span class='highlight'>" + i + "</span><br>";
    }
    else
    {
    res.innerHTML = "";
alert("Enter a positive number");
    var textbox1 = document.getElementById("principal");
    textbox1.focus();}
}

function Display()
{
 var slider = document.getElementById("rate");
var output = document.getElementById("ratevalue");
output.innerHTML = slider.value + "%"; // Display the default slider value
}
        
