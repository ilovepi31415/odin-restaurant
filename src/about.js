function createAbout() {
	const container = document.querySelector("#content");
	const header = document.createElement("h1");
	header.innerText = "About Us";
	const body = document.createElement("p");
	body.innerText =
		"We have a wonderful history, but it's very long and I don't feel like getting into it at all right now. That's ok though, because now that you're here we can just hang out and chat for a little bit. How's your day been so far? Mine hasn't been too great. After the incident it's been a lot harder to convince people to eat here at the restaurant so there's a pretty good chance that I'll be going bankrupt in the near future. But whatcha gonna do I guess";

	container.appendChild(header);
	container.appendChild(body);
}

export default createAbout;
