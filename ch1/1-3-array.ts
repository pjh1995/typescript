{
    // Array : 같은 타입
    const fruuts: string[] = ['tomato','banana']; // readonly o
    const scores: Array<number> = [1,3,4]; // readonly x

    function printArray(fruits: readonly string[]) {
        // fruits.push error
    }

    // Tuple : 다른 타입도 가능(가독성 저하), 동적으로 타입을 사용해야 할 경우에만 사용하는 것이 좋음. 
    // interface, type alias, class로 대체 가능
    let student: [string, number];
    student = ['name', 123];
    student[0];
    student[1];
    const [name, age] = student;

}