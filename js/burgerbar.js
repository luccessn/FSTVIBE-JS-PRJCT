export default function burgerBar() {
  const burgerMenu = document.getElementById("burger-menu");

  const menudv = document.getElementById("menudv");
  burgerMenu.addEventListener("click", function () {
    this.classList.toggle("close");
    menudv.classList.toggle("active");
  });
}
