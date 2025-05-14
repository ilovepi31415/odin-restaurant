import "./style.css";
import createHomePage from "./home.js";
import createMenu from "./menu.js";

const container = document.querySelector("#content");
const home = document.querySelector("#btn-home");
const menu = document.querySelector("#btn-menu");

home.addEventListener("click", () => {
	container.replaceChildren();
	createHomePage();
});

menu.addEventListener("click", () => {
	container.replaceChildren();
	createMenu();
});

createHomePage();
