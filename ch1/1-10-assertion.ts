{
    /**
     * Type Assertions xxx
     * 타입 확정!
     */

    function jsStrFunc(): any {
        return 'hello';
    }
    const result = jsStrFunc();
    console.log((result as string).length);
    console.log((<string>result).length);

    const wrong: any = 5;
    console.log((wrong as Array<number>).push(3)); // error~~~~~~~~~~!

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    numbers!.push(3); // !. :: 값이 있다고 확신할때만 사용.

    const button1 = document.querySelector('class')!; /// 버튼이 없다면..!?!?
    const button2 = document.querySelector('class');

    if (button1) {
        console.log(button1.nodeValue);
    }
}