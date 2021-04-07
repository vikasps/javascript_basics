function calculation(){
    var element = document.body;
   element.classList.toggle("dark-mode");
    var principal = document.getElementById('principal').value;
    var rate = document.getElementById('rate').value;
    var time = document.getElementById('time').value;
    var simpleinterest = ((parseInt(principal)*parseInt(rate)*(parseInt(time))/(100)))
    document.getElementById('simpleinterest').value=simpleinterest;
}
