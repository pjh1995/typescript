var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
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
    function printName(firstName, lastName) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('jihyun');
    printName('park', 'jihyun');
    function printMessage(message) {
        if (message === void 0) { message = 'default message'; }
        console.log(message);
    }
    printMessage();
    // Rest parameter
    function addNumbers() {
        var numbers = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            numbers[_i] = arguments[_i];
        }
        return __spreadArray([], numbers).reduce(function (acc, cur) { return acc + cur; });
    }
    console.log(addNumbers(1));
    console.log(addNumbers(1, 2));
    console.log(addNumbers(1, 2, 3));
    // Reduce를 이용한 피보나치 수열
    function fibonacciUseReduce(term) {
        var array = new Array(term).fill(1);
        return array.reduce(function (arr, current, idx) {
            if (idx <= 1) {
                arr.push(idx);
            }
            else {
                arr.push(arr[idx - 2] + arr[idx - 1]);
            }
            return arr;
        }, []);
    }
    console.log(fibonacciUseReduce(9));
    //// Reduce를 이용한 피보나치 수열 refactoring
    function refFibonacciUseReduce(term) {
        return new Array(term).fill(1).reduce(function (arr, current, idx) {
            arr.push(idx <= 1 ? idx : arr[idx - 2] + arr[idx - 1]);
            return arr;
        }, []);
    }
    console.log(refFibonacciUseReduce(9));
    // 재귀를 이용한 피보나치 수열
    function recursionFibonacci(term, arr) {
        if (arr === void 0) { arr = []; }
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
    function recursionFibonacci(term, arr) {
        if (arr === void 0) { arr = []; }
        var len = arr.length;
        if (len === term)
            return arr;
        arr.push(len <= 1 ? len : arr[len - 2] + arr[len - 1]);
        return recursionFibonacci(term, arr);
    }
    console.log(recursionFibonacci(9));
}
