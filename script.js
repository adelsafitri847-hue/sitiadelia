// typing
const text = "Siti Adelia Safitri";
let i = 0;
function typing(){
  if(i < text.length){
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,100);
  }
}
typing();

// menu
function toggleMenu(){
  let menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}

// modal
function openModal(src){
  document.getElementById("myModal").style.display="flex";
  document.getElementById("modalImg").src=src;
}
function closeModal(){
  document.getElementById("myModal").style.display="none";
}

// scroll animasi
const elements = document.querySelectorAll('.fade-up');

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el=>observer.observe(el));
