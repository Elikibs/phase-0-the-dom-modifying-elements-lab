const mainTag = document.querySelector("main#main");
mainTag.remove();

const newHeader= document.createElement("h1");

newHeader.id = "victory";

const championName = "Elisha";
newHeader.innerHTML = `${championName} is the champion`;

document.body.append(newHeader);