
 // присвоили классу login переменную link
var link = document.querySelector(".login");
// присвоили классу modal переменную modal
var modal = document.querySelector(".modal");
// при нажатии на login, а это у нас переменная link
link.onclick = function() {
  // к modal добавится класс и покажет скрытую форму
   modal.classList.add("modal_on");
}

var modal_off = document.querySelector(".modal_close");
modal_off.onclick = function() {
   modal.classList.remove("modal_on");
}

// map popup
var map_on = document.querySelector(".map_open");
var modal_map = document.querySelector(".modal_map");
map_on.onclick = function() {
     modal_map.classList.add("modal_map_on");
}

var modal_map_off = document.querySelector(".modal_map_close");
modal_map_off.onclick = function() {
   modal_map.classList.remove("modal_map_on");
}
