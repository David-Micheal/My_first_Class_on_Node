import { performance } from "perf_hooks";

const timer = performance.now();

console.time("FirstLoop");

const countDown = (n: number) => {
  let result: number = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }

  return result;
};

console.log(countDown(100000000));

console.timeLog("FirstLoop");

console.time("SecondLoop");
const newCount = (n: number) => {
  let res: number[] = [];
  for (let i = n; i > 0; i--) {
    res.push(i);
  }
  return res.reduce((a, b) => a + b);
};
console.log(newCount(100000000));

console.timeLog("SecondLoop");

console.time("Third");
const count = (n: number) => {
  return (n * (n + 1)) / 2;
};

console.log(count(100000000));

console.timeLog("Third");
