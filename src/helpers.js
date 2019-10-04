function choice(arr) {
  let randInd = Math.floor(Math.random() * arr.length);
  return arr[randInd];
};

export {choice};