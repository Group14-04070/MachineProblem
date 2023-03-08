function inputNumber(num){ 
    var ASCIICode = (num.which) ? num.which : num.keyCode
     if (ASCIICode < 48 || (ASCIICode > 57)){
       alert("Enter numbers only")
     }
   }

function Calculate(){   
    var n = document.getElementById("ninput").value;
    var x = document.getElementById("xinput").value;
    var equation = "";
    var toPrint = "";
    var counter = 1;
    var decimal = document.getElementById("decimal").value;
    //var value = math.derivative('x^2', 'x');
    //var value = math.derivative('cosh(x)', 'x');

    if(document.getElementById("ninput").value.match(/^[A-Za-z]+$/)){
        alert("ENTER NUMBERS ONLY!");
        location.reload()
    }
    if(document.getElementById("xinput").value.match(/^[A-Za-z]+$/)){
        alert("ENTER NUMBERS ONLY!");
        location.reload()
    }
    if(document.getElementById("decimal").value.match(/^[A-Za-z]+$/)){
        alert("ENTER NUMBERS ONLY!");
        location.reload()
    }

    var value = 0;
    for (let i = 0; i < n; i++){
        if (counter == 1){
            equation = " cosh("+ x + ")";
            toPrint += equation;
        }
        if (counter == 2){
            equation = " sinh("+ x + ")";
            toPrint = equation;
            counter = 0;
        }
        
        counter++;
    }
    

    var sum = 0;
    var counter2 = 1;
    var iteration = 0;
    document.getElementById("solution1").innerHTML += "= ";
    document.getElementById("solution2").innerHTML += "= ";

    for (let j = 0; j <= n; j++){
        if (counter2 == 1){
            var toSum = (math.sinh(0)/math.factorial(iteration) * (Math.pow(x, iteration)));
            sum += toSum;
        }
        if (counter2 == 2){
            var toSum = ((math.cosh(0)/math.factorial(iteration)) * (Math.pow(x, iteration)));
            sum += toSum;
            counter2 = 0;
        }
        let sup = iteration.toString();
        let sups = sup.sup();
        document.getElementById("solution1").innerHTML += "f" + sups + "(0) + ";
        document.getElementById("solution2").innerHTML += toSum + " + ";
        iteration++;
        counter2++;
    }

    //Output
    let sin = "Sinh(" + x + ")";
    let sins = sin.bold();
    document.getElementById("output").innerHTML = sins + " = " + sum;
    document.getElementById("outputWithDec").innerHTML = decimal + " decimal places";

    //Rounding
    document.getElementById("rounding").innerHTML = "Rounding = " + math.round(sum, decimal);

    var roundTrueVal = math.sinh(x);
    var roundAbsVal = math.round(sum, decimal);

    document.getElementById("roundError").innerHTML = "Error: " + Math.abs(roundTrueVal - roundAbsVal);
    document.getElementById("roundRelative").innerHTML = "Relative Error: " + Math.abs((roundTrueVal - roundAbsVal) / roundTrueVal) * 100;

    //Chopping
    document.getElementById("chopping").innerHTML = "Chopping = " + Math.trunc(sum*Math.pow(10, decimal))/Math.pow(10, decimal);

    var chopTrueVal = math.sinh(x);
    var chopAbsVal = Math.trunc(sum*Math.pow(10, decimal))/Math.pow(10, decimal);

    document.getElementById("chopError").innerHTML = "Error: " + Math.abs(chopTrueVal - chopAbsVal);
    document.getElementById("chopRelative").innerHTML = "Relative Error: " + Math.abs((chopTrueVal - chopAbsVal) / chopTrueVal) * 100;

}
