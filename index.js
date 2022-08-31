const chatBox = document.querySelector("#chatbox");
const messageData = document.getElementsByClassName("message");
const sender = document.getElementsByClassName("sender");
const deleteEl = document.getElementsByClassName("delete");

const inputForm = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");
button.setAttribute("id", "button");
button.setAttribute("type", "submit");

let senders = ["Me", "Myself", "I"];

async function fetchData() {
  const joke = await fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const joke = data.value;
      return joke;
    })
    .catch((error) => {
      console.log(error);
    });
  return joke;
}

function getMessage(origin, joke) {
  const isJoke = origin === "button";
  const isText = origin === "input";
  console.log(isText);
  const message = new Object();
  message.time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  });
  message.sender = "";
  message.content = "";
  message.delete = "❌";

  let randomIndex = Math.floor(Math.random() * senders.length);

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message");
  chatBox.appendChild(messageContainer);

  const messageTime = document.createElement("span");
  messageTime.innerHTML = message.time;
  messageContainer.appendChild(messageTime);

  const messageSender = document.createElement("span");
  messageSender.classList.add("sender");

  isJoke
    ? (messageSender.innerHTML = "Fact:")
    : (messageSender.innerHTML = senders[randomIndex] + ":");
  messageContainer.appendChild(messageSender);

  const messageText = document.createElement("span");
  const chatMessage = isText ? input.value : joke;
  console.log(chatMessage);
  messageText.innerHTML = chatMessage;

  messageContainer.appendChild(messageText);
  console.log(input.value);
  console.log(messageText);
  const messageDelete = document.createElement("span");
  messageDelete.innerHTML = message.delete;
  messageDelete.classList.add("delete");
  messageContainer.appendChild(messageDelete);

  messageDelete.addEventListener("click", () => {
    messageDelete.parentElement.remove();
  });
}

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getMessage("input");
  input.value = "";
});

button.addEventListener("click", async () => {
  const joke = await fetchData();
  console.log(joke);
  getMessage("button", joke);
});
