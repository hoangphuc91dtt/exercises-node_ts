// bt1
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];
for (let i = 0; i < color.length; i++) {
  let choice = i + 1;
  let suffix;
  if (choice % 100 >= 11 && choice % 100 <= 13) {
    suffix = "th";
  } else {
    suffix = o[choice % 10] || "th";
  }
  console.log(choice + suffix + " choice is " + color[i] + ".");
}

// bt 2
let array: any[] = [NaN, 0, 15, false, -22, "", undefined, 47, null];

function retrieve(rev: any[]): number[] {
  let result: number[] = [];
  rev.forEach((truthy) => {
    if (Boolean(truthy) === true) {
      result.push(truthy);
    }
  });
  return result;
}
console.log(retrieve(array));
