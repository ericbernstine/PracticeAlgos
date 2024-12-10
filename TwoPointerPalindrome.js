const palindromeTwoPointer = (str) => {
    str = str.toLowerCase();
    str = [...str];
  let startPoint = 0;
  let endPoint = str.length - 1;
  while (startPoint <= endPoint) {
    if (str[startPoint] != str[endPoint]) {
      return "no palindrome";
    } else {
      startPoint++;
      endPoint--;
    }
  }
  return "palindrommmeeee!";
};

console.log(palindromeTwoPointer("hello"));
