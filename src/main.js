import '/style.css'
import imgUrl from '/logo.png'

const launchBtn = document.getElementById("launchBtn");
launchBtn.addEventListener("click", () => {
  window.location.href = "/add-volume";
});


document.getElementById('nav-logo').src = imgUrl