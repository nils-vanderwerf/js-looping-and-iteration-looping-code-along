// Code your solutions in this file

const people = ['Lisa', 'Kaitlin', 'Jan'];

function writeCards(people) {
    let messages = [];
    for (let i = 0; i < people.length; i++) {
      console.log(`Thank you, ${people[i]}, for the wonderful surprise gift!`);  
      messages[i] = `Thank you, ${people[i]}, for the wonderful surprise gift!`;
    }

    console.log(messages);
    return messages;
  }


function countDown(number) {
    for (let i = number; i >= 0 ; i--) {
        console.log(i);  
      }
}