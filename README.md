## The Loneliest Chatroom

![Loneliest chatroom sample screenshot](https://user-images.githubusercontent.com/33945/96276340-d8b72f80-0fa0-11eb-8b9e-fe02acde3b11.png)

## Features

Try to implement as many as possible of the following. As always, done is better than perfect and half a loaf is better than none.

- Typing a message into the text input and hitting enter should create a message in the chatbox.
- The text box should be cleared out when enter is pressed to make room for the next message.
- The message should always be from either "Me", "Myself", or "I".
- The message should be timestamped.
- Clicking an X by the message should delete the message.
- Clicking the "I feel lonely" button should make an API request to the [Internet Chuck Norris Joke Database](http://www.icndb.com/) -- specificially, to the random joke endpoint: https://api.chucknorris.io/jokes/random. Hint: you probably want to use [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch) to do this.
- It should create a new message in the chatbox, from "Fact"

## Tech

- Only use vanilla JS to manipulate the DOM.
- The `ONLY` thing you can add to the HTML are `eventHandlers`
- Feel free to add your own custom CSS stylings
