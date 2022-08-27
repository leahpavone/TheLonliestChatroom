const chatBox = document.querySelector("#chatbox");
const messageData = document.getElementsByClassName("message");
const sender = document.getElementsByClassName("sender");
const deleteEl = document.getElementsByClassName("delete");

const inputForm = document.querySelector("form");
const input = document.querySelector("input");
const button = document.querySelector("button");

let messages = [];
let senders = ["Me", "Myself", "I"];

const getSender = (sendersArray) => {
  let randomIndex = Math.floor(Math.random() * sendersArray.length);
  let sender = sendersArray[randomIndex];
  return sender;
};
getSender(senders);

const messageObj = {
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  }),
  sender: "",
  messageContent: "",
  delete: "❌"
};

inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  messages.push(input.value);

  input.value = "";

  const messageContainer = document.createElement("div");
  messageContainer.classList.add("message");
  chatBox.appendChild(messageContainer);

  const messageTime = document.createElement("span");
  messageTime.innerHTML = messageObj.time;
  messageContainer.appendChild(messageTime);

  const messageSender = document.createElement("span");

  messageSender.classList.add("sender");
  messageObj.sender = messageSender.innerHTML = getSender(senders) + ":";
  messageContainer.appendChild(messageSender);

  const messageText = document.createElement("span");
  messageContainer.appendChild(messageText);
  messages.map((message) => {
    messageText.innerHTML = message;
    messageObj.messageContent = message;
  });

  const messageDelete = document.createElement("span");
  messageDelete.innerHTML = messageObj.delete;
  messageDelete.classList.add("delete");
  messageContainer.appendChild(messageDelete);

  messageDelete.addEventListener("click", () => {
    messageDelete.parentElement.remove();
  });
});

// ==============    Chuck Norris API

button.addEventListener("click", () => {
  function fetchData() {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => {
        if (!response.ok) {
          throw Error("ERROR");
        }
        return response.json();
      })
      .then((data) => {
        const jokeContainer = document.createElement("div");
        jokeContainer.classList.add("message");
        chatBox.appendChild(jokeContainer);

        const jokeTime = document.createElement("span");
        jokeTime.innerHTML = messageObj.time;
        jokeContainer.appendChild(jokeTime);

        const jokeSender = document.createElement("span");
        jokeSender.classList.add("sender");
        messageObj.sender = jokeSender.innerHTML = "Fact:";
        jokeContainer.appendChild(jokeSender);

        const jokeText = document.createElement("span");
        jokeContainer.appendChild(jokeText);
        jokeText.innerHTML = data.value;

        const jokeDelete = document.createElement("span");
        jokeDelete.innerHTML = messageObj.delete;
        jokeDelete.classList.add("delete");
        jokeContainer.appendChild(jokeDelete);

        jokeDelete.addEventListener("click", () => {
          jokeDelete.parentElement.remove();
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  fetchData();
});
