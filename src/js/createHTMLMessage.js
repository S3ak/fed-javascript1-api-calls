import message from "./components/Message.js";

const messageContainer = document.querySelector(".message-container");

const messageHTMLNode = message("warning", "sdf fsdf sdf dsf");

messageContainer.innerHTML = messageHTMLNode;
