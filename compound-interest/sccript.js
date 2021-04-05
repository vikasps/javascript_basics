function c_i_calculation(){
    var principal =parseFloat(document.getElementById('principal').value);
        var rate = parseFloat(document.getElementById('rate').value);
        var time = parseFloat(document.getElementById('time').value);
        // A = (p * Math.pow((1 + (r / (n * 100))), (n * t)));

        var compoundinterest = principal*Math.pow((1+(rate/100)),time)
console.log(compoundinterest)
document.getElementById("compoundinterest").value=compoundinterest;
    }