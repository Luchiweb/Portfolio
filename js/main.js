const iconBurger = document.querySelector(".icon__burger");
const iconCross = document.querySelector(".icon__cross");

if (iconBurger) {
  const menu = document.querySelector(".navbar__menu");
  iconBurger.addEventListener("click", function () {
    document.body.classList.add("_lock");
    iconBurger.classList.add("_active");
    iconCross.classList.add("_active");
    menu.classList.add("_active");
  });
  iconCross.addEventListener("click", function () {
    document.body.classList.remove("_lock");
    iconBurger.classList.remove("_active");
    iconCross.classList.remove("_active");
    menu.classList.remove("_active");
  });
}
