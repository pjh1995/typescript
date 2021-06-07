{
    /**
     * Enum : union으로 대체 가능!!
     */

    //JavaScript 에는 존재 x 타입스크립트에서 제공해줌
    
    const Max_num = 6;
    const MONDAY = 0;
    const TUESDAY = 1;
    const DAYS_ENUM = Object.freeze({"MONDAY":0});
    const dayOfToday = DAYS_ENUM.MONDAY;

    //TypeScript : 맨앞만 대문자, 값을 지정하지 않을 경우 0~으로 자동 지정
    enum Days {
        Monday,
        Tyesday
    }
    
    console.log(Days.Monday); // 0s

    enum DaysStr {
        Monday = 'mon',
        Tyesday = 'tues'
    }
    
    console.log(Days.Monday); // 'mon'

    let day: Days = Days.Monday;
    day = 3; //////?????????????????
}