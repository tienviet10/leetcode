
// ! JavaScript NOTE

// -------------------------------------------------------------------------------------
// ? Truthy && Falsy

// * Using &&
// console.log(0 && 1);  // print 0
// console.log('' && 'Hi');  // print '' (empty string)

// * When checking hashMap -> to avoid:
// const hashMap = {
//   x: 0
// };

// if (hashMap.x) {
//   console.log('hashMap.x is truthy');
// } else {
//   console.log('ALTHOUGH hashMap has x, hashMap.x is falsy');
// }


// -------------------------------------------------------------------------------------
// ? Closure function

// * Closure function 1
// const counter = (function() {
//   let privateCounter = 0;
//   const changeBy = (val) => {
//     privateCounter += val;
//   };

//   return {
//     increment() {
//       changeBy(1);
//     },

//     decrement() {
//       changeBy(-1);
//     },

//     value() {
//       return privateCounter;
//     },
//   };
// })();

// console.log(counter.value()); // 0.

// counter.increment();
// counter.increment();
// console.log(counter.value()); // 2.

// counter.decrement();
// console.log(counter.value()); // 1.


// -------------------------------------------------------------------------------------
// ? Higher Order Function

// * HOF 1
// const noisy = (f) => {
//   return (...args) => {
//     console.log("calling with", args);
//     let result = f(...args);
//     console.log("called with", args, ", returned", result); return result;
//   };
// };
// noisy(Math.min)(3, 2, 1);


// -------------------------------------------------------------------------------------
// ? Curry function

// * Curry function 1
// const curry = (func) => {
//   console.log('func', func);
//   console.log('func.length', func.length);
//   return function curried(...args) {
//     console.log('args', args);
//     if (args.length >= func.length) {
//       return func.apply(this, args);
//     } else {
//       return function(...arg2) {
//         console.log('arg2', arg2);
//         return curried.apply(this, args.concat(arg2));
//       };
//     }
//   };
// };

// * Curry function 2
// const curry = (func) => {
//   const curried = (...args) => {
//     if (args.length >= func.length) {
//       return func(...args);
//     } else {
//       return (...arg2) => {
//         return curried(...args.concat(arg2));
//       };
//     }
//   };
//   return curried;
// };


// const sum = (a, b, c) => {
//   return a + b + c;
// };

// let curriedSum = curry(sum);

// curriedSum(1, 2, 3);
// curriedSum(1)(2, 3);
// console.log(curriedSum(1, 5)(3));


// -------------------------------------------------------------------------------------
// ? Automatic type conversion

// * careful type convert
// console.log('8 * null', 8 * null); // → 0
// console.log('"5" - 1', "5" - 1); // → 4
// console.log('"5" + 1', "5" + 1); // → 51
// console.log('"five" * 2', "five" * 2); // → NaN
// console.log('false === 0', false === 0); // → true
// console.log('null == undefined', null == undefined); // → true
// console.log('null == 0', null == 0); // → false


// -------------------------------------------------------------------------------------
// ? Breaking Out of a Loop

// * break out of for loop
// for (let current = 20; ; counter = counter + 1) {
//   if (current % 7 === 0) {
//     console.log(current);
//     break;
//   }
// }


// -------------------------------------------------------------------------------------
// ? ...

// * Rest parameters -> get all arguments
// const max = (...numbers) => {
//   let result = -Infinity;
//   for (let number of numbers) {
//     if (number > result) result = number;
//   }
//   return result;
// };
// console.log(max(4, 1, 9, -2));

// * Rest parameters -> get all arguments
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...rest] = arr;
// console.log('rest', rest); // -> [3, 4, 5]


// -------------------------------------------------------------------------------------
// ? Debounce

// * Debounce implementation (JS)
// const debounce = (cb, delay = 1000) => {
//   let timerId;
//   return (...args) => {
//     clearTimeout(timerId);
//     timerId = setTimeout(() => {
//       cb(...args);
//     }, delay);
//   };
// };

// * Debounce implementation (React)
// function useDebounce<T>(value: T, delay: number): T {
//   const [debouncedValue, setDebouncedValue] = useState < T > (value);

//   useEffect(() => {
//     const timerId = setTimeout(() => {
//       setDebouncedValue(value);
//     }, delay || 500);

//     return () => {
//       clearTimeout(timerId);
//     };
//   }, [value, delay]);

//   return debouncedValue;
// }


