function show(id) {
  const sections = document.querySelectorAll('.section');

  sections.forEach(sec => {
    sec.style.display = "none";
    sec.style.opacity = "0";
  });

  const active = document.getElementById(id);

  if (active) {
    active.style.display = "block";

    setTimeout(() => {
      active.style.opacity = "1";
    }, 50);
  }
}

window.onload = function () {
  show('home');
};

function openLink(type) {
  if (type === "github") {
    window.open("https://github.com/cjyothika2002", "_blank");
  } 
  else if (type === "linkedin") {
    window.open("https://www.linkedin.com/in/jyothika-charupalli-24360633b", "_blank");
  } 
  else if (type === "email") {
    window.location.href = "mailto:cjyothika2002@gmail.com";
  }
}

function openImage(src) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");

  modal.style.display = "block";
  img.src = src;
}

function closeImage() {
  document.getElementById("imageModal").style.display = "none";
}

window.onclick = function(event) {
  const modal = document.getElementById("imageModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};