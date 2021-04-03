
function myFunction(){
    var mark1 = document.getElementById('mark_1').value;
var mark2 = document.getElementById("mark_2").value;
var mark3 = document.getElementById("mark_3").value;
var mark4 = document.getElementById("mark_4").value;
var mark5 = document.getElementById("mark_5").value;
var total =parseInt(mark1)+parseInt(mark2)+parseInt(mark3)+parseInt(mark4)+parseInt(mark5);
document.getElementById('total').value=total;
}


