let step = 0;

const steps = document.querySelectorAll(".step");
const indicators=document.querySelectorAll(".progress-step");

/* =====================
   SHOW STEP
===================== */

function showStep(i){

steps.forEach(s=>s.classList.remove("active"))
steps[i].classList.add("active")

// 🔥 SLIDE EFFECT
const slider = document.querySelector(".step-slider")

updateProgress()

}
/* =====================
   NEXT BUTTON
===================== */

document.querySelectorAll(".btn-next").forEach(btn=>{

btn.addEventListener("click",()=>{

if(!validateStep()) return

step++

if(step===steps.length-1){
generateSummary()
}

showStep(step)

})

})

/* =====================
   BACK BUTTON
===================== */

document.querySelectorAll(".btn-back").forEach(btn => {

  btn.addEventListener("click", () => {

    if (step > 0) {
      step--;
      showStep(step);
    }

  });

});

/* =====================
   OPTION CARD SELECT
===================== */

document.querySelectorAll(".option-card").forEach(card => {

  card.addEventListener("click", () => {

    const parent = card.parentElement;

    parent.querySelectorAll(".option-card")
      .forEach(c => c.classList.remove("selected"));

    card.classList.add("selected");

  });

});

/* =====================
   GENERATE SUMMARY
===================== */

function generateSummary() {

  const layanan = document.querySelector(".step:nth-of-type(1) .selected")?.innerText || "-";
  const event = document.querySelector(".step:nth-of-type(2) .selected")?.innerText || "-";
  const paket = document.querySelector(".step:nth-of-type(4) .selected");

  const nama = document.getElementById("nama").value || "-";
  const wa = document.getElementById("wa").value || "-";
  const tanggal = document.getElementById("tanggal").value || "-";
  const waktu = document.getElementById("waktu").value || "-";
  const lokasi = document.getElementById("lokasi").value || "-";
  const kapasitas = document.getElementById("kapasitas").value || "-";

  const basePrice = paket ? parseInt(paket.dataset.price) : 0;

  let addonPrice = 0;
  let addons = [];

  document.querySelectorAll(".addons input:checked").forEach(a => {

    addonPrice += parseInt(a.value);
    addons.push(a.parentElement.innerText.trim());

  });

  const total = basePrice + addonPrice;

  /* PRICE */

  document.getElementById("price").innerText =
    "Total Estimasi: Rp " + total.toLocaleString("id-ID");

  /* SUMMARY */

  document.getElementById("summary").innerHTML = `
    <b>Nama:</b> ${nama} <br>
    <b>Event:</b> ${event} <br>
    <b>Layanan:</b> ${layanan} <br>
    <b>Tanggal:</b> ${tanggal} ${waktu} <br>
    <b>Lokasi:</b> ${lokasi} <br>
    <b>Kapasitas Tamu:</b> ${kapasitas} orang <br>
    <b>Paket:</b> ${paket ? paket.innerText : "-"} <br>
    <b>Tambahan:</b> ${addons.join(", ") || "Tidak ada"}
  `;

  /* WHATSAPP MESSAGE */

  const pesan = `Halo Clevent,

Saya ingin memesan jasa cleaning event.

Nama: ${nama}
Event: ${event}
Layanan: ${layanan}
Tanggal: ${tanggal}
Waktu: ${waktu}
Lokasi: ${lokasi}
Kapasitas: ${kapasitas}
Paket: ${paket ? paket.innerText : "-"}
Tambahan: ${addons.join(", ") || "Tidak ada"}

Total estimasi: Rp ${total.toLocaleString("id-ID")}`;

  const nomor = "6283186886551";

  document.getElementById("waLink").href =
    `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

}

function validateStep(){

let valid=true

/* STEP 1 layanan */

if(step===0){

let layanan=document.querySelector(".step:nth-of-type(1) .selected")

if(!layanan){
alert("Silakan pilih jenis layanan terlebih dahulu")
valid=false
}

}

/* STEP 2 event */

if(step===1){

let event=document.querySelector(".step:nth-of-type(2) .selected")

if(!event){
alert("Silakan pilih jenis event terlebih dahulu")
valid=false
}

}

/* STEP 3 detail */

if(step===2){

let nama=document.getElementById("nama")
let wa=document.getElementById("wa")
let tanggal=document.getElementById("tanggal")
let lokasi=document.getElementById("lokasi")

document.querySelectorAll(".error-text").forEach(e=>e.style.display="none")
document.querySelectorAll("input").forEach(i=>i.classList.remove("input-error"))

if(nama.value===""){
nama.classList.add("input-error")
document.getElementById("error-nama").style.display="block"
valid=false
}

if(wa.value===""){
wa.classList.add("input-error")
document.getElementById("error-wa").style.display="block"
valid=false
}

if(tanggal.value===""){
tanggal.classList.add("input-error")
document.getElementById("error-tanggal").style.display="block"
valid=false
}

if(lokasi.value===""){
lokasi.classList.add("input-error")
document.getElementById("error-lokasi").style.display="block"
valid=false
}

}

/* STEP 4 paket */

if(step===3){

let paket=document.querySelector(".step:nth-of-type(4) .selected")

if(!paket){
alert("Silakan pilih paket terlebih dahulu")
valid=false
}

}

return valid

}

const progressSteps = document.querySelectorAll(".progress-step")
const progressFill = document.getElementById("progressFill")

function updateProgress(){

progressSteps.forEach((stepEl,index)=>{

stepEl.classList.remove("active")

if(index<=step){
stepEl.classList.add("active")
}

})

let percent = (step/(progressSteps.length-1))*100
progressFill.style.width = percent + "%"

}

document.addEventListener("DOMContentLoaded", () => {
  showStep(step);
});