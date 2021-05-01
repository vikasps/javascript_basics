// function table_data(){
//     const table_data = document.getElementById('table_data').value;
//     const tr = document.createElement;
// const sl_no = document.getElementById('sl_no').value;
// const name = document.getElementById('name').value;
// const sub_1 = document.getElementById('sub_1').value;
// const sub_2 = document.getElementById('sub_2').value;
// const sub_3 = document.getElementById('sub_3').value;
// const sub_4 = document.getElementById('sub_4').value;
// const sub_5 = document.getElementById('sub_5').value;
//     const total = parseFloat(sub_1)+parseFloat("sub_2")+parseFloat("sub_3")+parseFloat("sub_4")+parseFloat("sub_5");
//     const percentage = ((total)/(5))
// }

function calculation() {
    const sl_no = document.getElementById("sl_no").value;
    const studentName = document.getElementById("studentName").value;
    const sub_1 = document.getElementById("sub_1").value;
    const sub_2 = document.getElementById("sub_2").value;
    const sub_3 = document.getElementById("sub_3").value;
    const sub_4 = document.getElementById("sub_4").value;
    const sub_5 = document.getElementById("sub_5").value;


    if (sl_no === "") {
        alert("*enter the input");
        return false;
    }
if(studentName ===""){
    alert("*enter the studentName")
    document.getElementById("studentName").focus()
    return false;
}
if(sub_1 ==="" || sub_1<1 ||sub_1>100){
    alert("*enter the  valid tami marks")
    return false;
}
if(sub_2 ===""|| sub_2<1 ||sub_2>100){
    alert("*enter the valid english marks")
    return false;
}
if(sub_3 ===""|| sub_3<1 ||sub_3>100){
    alert("*enter the valid maths marks")
    return false;
}
if(sub_4 ===""|| sub_4<1 ||sub_4>100){
    alert("*enter the valid science marks")
    return false;
}
if(sub_5 ===""|| sub_5<1 ||sub_5>100){
    alert("*enter the valid social marks")
    return false;
}


    const total =
        parseFloat(sub_1) +
        parseFloat(sub_2) +
        parseFloat(sub_3) +
        parseFloat(sub_4) +
        parseFloat(sub_5);
    const average = total / 5;
    // document.getElementById("total").value = total;
    // document.getElementById("average").value = average;
    const table_2 = document.getElementById("table_2");
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${sl_no}</td>
<td>${studentName}</td>
<td>${sub_1}</td>
<td>${sub_2}</td>
<td>${sub_3}</td>
<td>${sub_4}</td>
<td>${sub_5}</td>
<td>${total}</td>
<td>${average}</td>
<td><button  onclick='dataclear(this)' type="reset">clear</button></td> `;
    table_2.appendChild(tr);

    clearData();

}
function dataclear(selected){
    const table_2 = document.getElementById("table_2");
   var td =  selected.parentElement;
  var tr =   td.parentElement;
    table_2.removeChild(tr);

    // console.log('see', selected);
    // let td = selected.parentElement;
    // console.log('td', td);
    // let tr = td.parentElement;
    // // console.log('tr', tr);

    // table_2.removeChild(list.childNodes[tr]);


//     var parent = document.getElementById("table_2").getElementsByTagName("tr")[];
//     var child = document.getElementsByTagName("td")[1];
//  var remove = parent.removechild(child);
// parent.removeChild(remove);
}

function clearData() {
    // alert(222);
    document.getElementById("sl_no").value = "";
    document.getElementById("studentName").value = "";
    document.getElementById("sub_1").value = "";
    document.getElementById("sub_2").value = "";
    document.getElementById("sub_3").value = "";
    document.getElementById("sub_4").value = "";
    document.getElementById("sub_5").value = "";
    return false;
}



// createElement("th"); let text = document. createTextNode(key);
// th. appendChild(text); row. appendChild(th); }  let table = document.
// }
// document.createElement("td");