{
  // // Javascript
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript
  // function tsFetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // JavaScript => TypeScript
  // Optional parameter (?:)
  function printName(firstName: string, lastName?: string): void {
    console.log(firstName);
    console.log(lastName);
  }

  printName('jihyun');
  printName('park', 'jihyun');

  function printMessage(message: string = 'default message') {
    console.log(message);
  }

  printMessage();

  // Rest parameter

  function addNumbers(...numbers: number[]): number {
    return [...numbers].reduce((acc, cur) => acc + cur);
  }

  console.log(addNumbers(1));
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3));

  // Reduce를 이용한 피보나치 수열
  function fibonacciUseReduce(term: number): number {
    const array: number[] = new Array(term).fill(1);
    return array.reduce((arr?: Array[number], current: number, idx: number): number[] => {
      if (idx <= 1) {
        arr.push(idx);
      } else {
        arr.push(arr[idx - 2] + arr[idx - 1]);
      }
      return arr;
    }, []);
  }

  console.log(fibonacciUseReduce(9));

  //// Reduce를 이용한 피보나치 수열 refactoring
  function refFibonacciUseReduce(term: number): number[] {
    return new Array(term).fill(1).reduce((arr?: number[], current: number, idx: number): number[] => {
      arr.push(idx <= 1 ? idx : arr[idx - 2] + arr[idx - 1]);
      return arr;
    }, []);
  }

  console.log(refFibonacciUseReduce(9));

  // 재귀를 이용한 피보나치 수열
  function recursionFibonacci(term: number, arr: number[] = []): number[] | Function {
    if (arr.length === term) {
      return arr;
    }

    if (arr.length <= 1) {
      arr.push(arr.length);
      return recursionFibonacci(term, arr);
    }

    arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
    return recursionFibonacci(term, arr);
  }

  console.log(recursionFibonacci(9));

  // 재귀를 이용한 피보나치 수열 리팩토링
  function recursionFibonacci(term: number, arr: number[] = []): number[] | Function {
    const len: number = arr.length;
    if (len === term) return arr;
    arr.push(len <= 1 ? len : arr[len - 2] + arr[len - 1]);
    return recursionFibonacci(term, arr);
  }

  console.log(recursionFibonacci(9));
}
