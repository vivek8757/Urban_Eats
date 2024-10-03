import * as css from "./style.css";
import Icon from "./icon.jpg";
import { homepage } from "./script.js";
import { contact } from "./contact.js";
import { menu } from "./menu.js";
console.log("tutorial");
homepage();
// contact();
// menu();
let home = document.querySelector("#home");
let menus = document.querySelector("#menu");
let contacts = document.querySelector("#contact");
let content = document.querySelector(".content");
home.addEventListener("click", () => {
  content.innerHTML = "";
  content.style.backgroundColor = "cornflowerBlue";
  homepage();
});
menus.addEventListener("click", () => {
  content.innerHTML = "";
  menu();
});
contacts.addEventListener("click", () => {
  content.innerHTML = "";
  contact();
});
