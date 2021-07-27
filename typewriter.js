
const typeWriter = function(string) {
  let splitstring = string.split("");
  let ind = 0;

  
  for (let char of splitstring) {
    setTimeout(() => {
      process.stdout.write(char);
    }, 50 * ind);
    ind ++;
  } 

  setTimeout(() => {
    console.log("\n");
  }, 50 * splitstring.length + 1);
};


// typeWriter("hello there from lighthouse labs");
typeWriter("I think it can, I know it can, it works.");
