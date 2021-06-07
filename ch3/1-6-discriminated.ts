{ // function: login => success, fail
    type SuccessState = {
        result: true; // 공통적인 인자를 넘겨서 처리함.
        response: {
            body: string;
        }
    }
    type FailState = {
        result: false;
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    // printLoginState(state)
    // success -> 'success' + body
    // fail => 'fail' + body

    function printLoginState(state: LoginState) {
        if (state.result === true) {
            console.log(`success ${state.response.body}`);
        } else {
            console.log(`fail ${state.reason}`);  
        }   
    }
}