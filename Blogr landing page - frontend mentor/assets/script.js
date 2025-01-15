var btn = document.getElementById("mobilemenu");
var mobilenav = document.getElementById("mobilenav");

mobilenav.style.left = "-100%";

btn.onclick = function(){
    if(mobilenav.style.left == "-100%"){
        mobilenav.style.left = "50%";
        btn.src = "images/icon-close.svg";
    }

    else{
        mobilenav.style.left = "-100%";
        btn.src = "images/icon-hamburger.svg";
    }
}


//Suporte para dispositivos touch
document.querySelectorAll('li > a').forEach(item => {
    item.addEventListener('click', function (e) {
      const expanded = this.getAttribute('aria-expanded') === 'true' || false;
      this.setAttribute('aria-expanded', !expanded);
      const dropdown = this.nextElementSibling.nextElementSibling; // Refere-se ao `.dropdown-menu`
      if (dropdown) {
        dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
      }
      e.preventDefault();
    });
  });