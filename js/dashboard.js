/* COUNTER */

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

counter.innerText="0";

const update=()=>{

const target=+counter.getAttribute("data-target");
const count=+counter.innerText;

const inc=target/100;

if(count<target){

counter.innerText=Math.ceil(count+inc);
setTimeout(update,20);

}else{

counter.innerText=target;

}

};

update();

});


/* PIE CHART */

new Chart(document.getElementById("eventChart"),{

type:"pie",

data:{
labels:["Pernikahan","Event Kampus","Ulang Tahun","Perusahaan"],
datasets:[{
data:[45,25,20,10],
backgroundColor:[
"#1e5eff",
"#5f9cff",
"#ffc61b",
"#ff7a7a"
]
}]
}

});


/* BAR CHART */

new Chart(document.getElementById("growthChart"),{

type:"bar",

data:{
labels:["2023","2024","2025","2026"],
datasets:[{
label:"Jumlah Event",
data:[40,85,120,150],
backgroundColor:"#1e5eff"
}]
}

});