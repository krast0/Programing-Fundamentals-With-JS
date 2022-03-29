function chatLogger(array) {
  let index = 0;
  let chat = [];
  for (let i = 0; i < array.length; i++) {
    let element = array[i].split(" ");
    let command = element[0];
    switch (command) {
      case "end":
        break;
      case "Chat":
        let messageChat = element[1];
        chat.push(messageChat);
        break;
      case "Delete":
          let messageDelete = element[1]
          if(chat.includes(messageDelete)){
          chat.splice(chat.indexOf(messageDelete),1)
          }
          break;
          case 'Edit':
              let messageEdit = element[1]
              let newMessage = element[2]
              if(chat.includes(messageEdit)){
                  chat.splice(chat.indexOf(messageEdit),1,newMessage)
              }
              break;
              case 'Pin':
              let messagePin = element[1]
              if(chat.includes(messagePin)){
                  let indexOfPin = chat.indexOf(messagePin)
                  chat.splice(indexOfPin,1)
                  chat.push(messagePin)
              }
              break;
              case 'Spam':
                let spamArr = []
                  for (let i = 1; i < element.length; i++) {
                      let spammed = element[i];
                      chat.push(spammed)
                      
                  }

        break;
    }
  }
  console.log(chat.join('\n'));
}
// chatLogger([
//   "Chat Hello",
//   "Chat darling",
//   "Edit darling Darling",
//   "Spam how are you",
//   "Delete Darling",
//   "end",
// ]);
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])
