function login(input) {
  let username = input[0];
  let count = 0;
  for (let index = 1; index < input.length; index++) {
    if (username.split("").reverse().join("") === input[index]) {
      console.log(`User ${username} logged in.`);
    } else {
      if (index === input.length - 1) {
        console.log(`User ${username} blocked!`);
      } else {
        console.log(`Incorrect password. Try again.`);
      }
    }
  }
}

login(["Acer", "login", "go", "let me in", "recA"]);
login(["sunny", "rainy", "cloudy", "sunny", "not sunny"]);
login(["momo", "omom"]);
