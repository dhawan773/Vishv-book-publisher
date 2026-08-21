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
