import { height, width } from "./contants";

let _nextStep = "RIGHT";
export const setNextStep = nextStep => {
  _nextStep = nextStep;
};

export const rl = function*(x, y) {
  while (true) {
    yield "1 0";
    const next = move([x, y], _nextStep);
    switch (_nextStep) {
      case "UP":
        yield `${x} ${y} ${x} ${--y}`;
        break;
      case "LEFT":
        yield `${x} ${y} ${--x} ${y}`;
        break;
      case "RIGHT":
        yield `${x} ${y} ${++x} ${y}`;
        break;
      case "DOWN":
        yield `${x} ${y} ${x} ${++y}`;
        break;
    }

    if (isOutBoard([x, y])) throw "Saiu da parada";
    sleep(1);
    console.clear();
  }
};

export const move = ([x, y], step) => {
  switch (step) {
    case "UP":
      return [x, y - 1];
    case "LEFT":
      return [x - 1, y];
    case "RIGHT":
      return [x + 1, y];
    case "DOWN":
      return [x, y + 1];
  }
  return [x, y];
};

export const sleep = time => {
  let c = 0;
  for (var i = 0; i < time * 100000000; i++) {
    c++;
  }
  console.log(c);
};

export const distance = (A, B) => {
  return Math.abs(A[0] - B[0] + A[1] - B[1]);
};

export const isOutBoard = node => {
  return node[0] < 0 || node[1] < 0 || node[0] >= width || node[1] >= height;
};

export const lastElement = array => {
  if (array.length > 0) return array[array.length - 1];
}
