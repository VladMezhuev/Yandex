const accordions = [...document.getElementsByClassName("questions__item")];

accordions.forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("is-active");
  });
});
