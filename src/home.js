import spaghetti from "./images/spaghetti.jpg";

function createHomePage() {
	const container = document.querySelector("#content");

	const header = document.createElement("h1");
	header.innerText = "Welcome to my restaurant!";

	const subtitle = document.createElement("h3");
	subtitle.innerText = "It's the best ever";

	const hr = document.createElement("hr");
	const quoteContainer = document.createElement("div");
	quoteContainer.id = "quote-container";

	const img = document.createElement("img");
	img.src = spaghetti;
	img.setAttribute("alt", "spaghetti");

	const quote = document.createElement("p");
	quote.id = "quote";
	quote.innerText =
		"This restaurant is the best one I've ever seen! I would reccommend this to everyone";

	quoteContainer.appendChild(img);
	quoteContainer.appendChild(quote);

	container.appendChild(header);
	container.appendChild(subtitle);
	container.appendChild(hr);
	container.appendChild(quoteContainer);
}

export default createHomePage;
