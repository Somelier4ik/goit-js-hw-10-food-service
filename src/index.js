import dataMenu from "./menu.json";
import template from "./template.hbs";

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const menuEl = document.querySelector(".js-menu");
const checkbox = document.querySelector("#theme-switch-toggle");
const body = document.querySelector("body");

function renderHtml(domEl, dataEl, templateFoo) {
  domEl.insertAdjacentHTML("beforeend", dataEl.map(templateFoo).join(""));
}

renderHtml(menuEl, dataMenu, template);

checkbox.addEventListener("change", onChangeTheme);

if (localStorage.getItem("activeTheme") === "dark-theme") {
  checkbox.checked = "true";
}

function onChangeTheme(evt) {
  if (evt.target.checked) {
    localStorage.setItem("activeTheme", Theme.DARK);
  } else {
    localStorage.setItem("activeTheme", Theme.LIGHT);
  }

  body.classList = localStorage.getItem("activeTheme");
}
body.classList = localStorage.getItem("activeTheme");
