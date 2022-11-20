//getting data from 
document.querySelector("form").addEventListener("submit",inputFields);

let studentName=document.querySelector("#name");
let studentEmail=document.querySelector("#email");
let studentPhNo=document.querySelector("#number");
let para=document.querySelector(".red_alet");

function inputFields(event){
event.preventDefault();
//console.log(studentName,studentEmail,studentPhNo);
let name=studentName.value;
let email=studentEmail.value;
let phNo=studentPhNo.value;
if(email=="")
{
setTimeout(()=>{
para.style.display="block";
},100);
}
//putting data in table
else{
let tr= document.createElement("tr");
let td1= document.createElement("td");
td1.innerText=name;
let td2= document.createElement("td");
td2.innerText=email;
let td3= document.createElement("td");
td3.innerText=phNo;
let btn=document.createElement("button");
btn.setAttribute("class","deleteBtn");
btn.innerText="Remove";
tr.append(td1,td2,td3,btn);
document.querySelector("tbody").append(tr);
para.style.display="none";
studentEmail.value="";
studentPhNo.value="";
studentName.value="";
}
}

// deleting table row

const tableEL=document.querySelector("table");
tableEL.addEventListener("click",deleteRow);

function deleteRow(e){
  if(!(e.target.classList.contains("deleteBtn")))
    return;
    const btn=e.target;
    btn.parentElement.remove();
}