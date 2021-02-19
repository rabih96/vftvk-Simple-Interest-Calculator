function compute() {

    //  Get the values of the amount, rate and number of years.
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calculate interest.
    var interest = (principal * years * rate) / 100;

    // Get the year and add the years the user selected.
    var now = new Date();
    var future_year = Number(now.getFullYear()) + Number(years);

    // Check if principal value is positive and diaply results.
    if(principal <= 0){
        alert("Enter a positive number")
        document.getElementById("principal").focus();
    }else{
        document.getElementById("result").innerHTML = "If you deposit <mark>" + principal + "</mark>,<br>at an interest rate of <mark>" + rate + " %</mark>.<br>You will receive an amount of <mark>" + interest + "</mark>,<br>in the year <mark>" + future_year + "</mark>";
    }
 }

function rateChange() {
    // Get the rate value and apply it to the span  
    var rate = document.getElementById("rate").value;
    document.getElementById("interest_rate").innerHTML = rate + " %"
}
        