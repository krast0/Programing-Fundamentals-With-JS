<<<<<<< HEAD
function smallestOfThreeNums(n1, n2, n3) {
  let result = 0;
  if (n1 <= n2 && n1 <= n3) {
    result = n1;
  } else if (n2 <= n3 && n2 <= n1) {
    result = n2;
  } else if (n3 <= n1 && n3 <= n2) {
    result = n3;
  }
  console.log(result);
}

smallestOfThreeNums(2, 2, 2);
smallestOfThreeNums(600, 342, 123);
=======
function smallestOfThreeNums(n1, n2, n3) {
  let result = 0;
  if (n1 <= n2 && n1 <= n3) {
    result = n1;
  } else if (n2 <= n3 && n2 <= n1) {
    result = n2;
  } else if (n3 <= n1 && n3 <= n2) {
    result = n3;
  }
  console.log(result);
}

smallestOfThreeNums(2, 2, 2);
smallestOfThreeNums(600, 342, 123);
>>>>>>> da11289cb69d68790781c3048bc587dcd18f3a64
