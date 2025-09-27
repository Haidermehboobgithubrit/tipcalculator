const btnE1=document.getElementById("calculate");
const billInput=document.getElementById("bill");
const tipInput=document.getElementById("tip");
const totalspan=document.getElementById("total");

function calculatetotal(){
    const billvalue=Number(billInput.value);
    const tipvalue=Number(tipInput.value);
    const totalvalue=Number(billvalue * (1 + tipvalue/100));
    totalspan.innerText=totalvalue.toFixed(2);
}
btnE1.addEventListener("click" , calculatetotal);
