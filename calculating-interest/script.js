function calculation(event){
    event.preventDefault();
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var time = document.getElementById('time').value;
    var simpleinterest = ((parseInt(principal)*parseInt(rate)*(parseInt(time))/(100)))
    document.getElementById('simpleinterest').value=simpleinterest;
    // document.getElementById("simpleinterest").addEventListener("click", function calculation(event){
    //     event.preventDefault()
}

function c_i_calculation(event){
    event.preventDefault();
    var principal =parseFloat(document.getElementById('principal').value);
        var rate = parseFloat(document.getElementById('rate').value);
        var time = parseFloat(document.getElementById('time').value);

        // A = (p * Math.pow((1 + (r / (n * 100))), (n * t)));

        var compoundinterest = principal*Math.pow((1+(rate/100)),time);
console.log(compoundinterest);
document.getElementById("compoundinterest").value=compoundinterest;
    }