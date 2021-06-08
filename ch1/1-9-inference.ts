{
    /**
     * Type Inference
     */
    let text = 'hello';
    
    function print(message) {
        console.log(message);
    }

    print('hello');
    print(1);

    function print1(message:string) {
        console.log(message);
    }

    print('hello');
    // print(1);

    function add(x: number, y: number) {
        return x + y;
    }

    const result = add(1,2);
}