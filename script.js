function toggleMenu(){
  const nav=document.querySelector(".nav nav");
  if(!nav)return;
  nav.style.display=nav.style.display==="flex"?"none":"flex";
  nav.style.position="absolute";
  nav.style.top="68px";
  nav.style.left="0";
  nav.style.right="0";
  nav.style.background="#fff";
  nav.style.padding="14px 20px";
  nav.style.flexDirection="column";
  nav.style.borderBottom="1px solid #e5e9f0";
}
document.getElementById("year").textContent=new Date().getFullYear();
document.querySelectorAll(".sidebar a").forEach(a=>{
  a.addEventListener("click",()=>{
    document.querySelectorAll(".sidebar a").forEach(x=>x.classList.remove("active"));
    a.classList.add("active");
  });
});
function showStrikeStatus(){
  alert(
    "Vishv Book Publication\n\n" +
    "Status: Strike Off\n\n" +
    "This is a website status display only."
  );
}
function toggleStatus(){
  const badge = document.getElementById("statusBadge");

  if (badge.textContent.trim() === "Strike Off") {
    badge.textContent = "Active";
    badge.classList.remove("danger");
    badge.classList.add("active-status");
  } else {
    badge.textContent = "Strike Off";
    badge.classList.remove("active-status");
    badge.classList.add("danger");
  }
}
function showStrikeStatus() {
  const status = document.getElementById("companyStatus");

  if (!status) return;

  if (status.textContent.trim() === "Strike Off") {
    status.textContent = "Active";
    status.classList.remove("red");
    status.classList.add("active-status");
  } else {
    status.textContent = "Strike Off";
    status.classList.remove("active-status");
    status.classList.add("red");
  }
}
function openApplicationForm(){
  const form = document.getElementById("applicationForm");

  if(form){
    form.style.display = "flex";
  }
}

function closeApplicationForm(){
  const form = document.getElementById("applicationForm");

  if(form){
    form.style.display = "none";
  }
}

function sendApplicationToWhatsApp(){
  const name = document.getElementById("appName").value.trim();
  const mobile = document.getElementById("appMobile").value.trim();
  const house = document.getElementById("appHouse").value.trim();
  const area = document.getElementById("appArea").value.trim();
  const city = document.getElementById("appCity").value.trim();
  const district = document.getElementById("appDistrict").value.trim();
  const pin = document.getElementById("appPin").value.trim();
  const state = document.getElementById("appState").value.trim();

  if(!name || !mobile || !house || !area || !city || !district || !pin || !state){
    alert("Please fill all details.");
    return;
  }

  const message =
`Send Me An Address This Format.

1. Full Name = ${name}
2. Mobile No. = ${mobile}
3. House No. = ${house}
4. Area Name = ${area}
5. City = ${city}
6. District = ${district}
7. Pin Code No. = ${pin}
8. State = ${state}`;

  const whatsappNumber = "918000704863";
  const whatsappURL =
    "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(message);

  window.open(whatsappURL, "_blank");
}
