{
    /**
     * Union Types: OR
    */

    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('right');

    type TileSize = 8 | 16 | 32;
    // const tile: TileSize = 2; //Error;
    const tile: TileSize = 8;

    // function: login => success, fail
    type SuccessState = {
        response: {
            body: string;
        }
    }
    type FailState = {
        reason: string;
    }
    type LoginState = SuccessState | FailState;

    function login({code, reason}): LoginState {
        if (code === 1) {
            return {
                response: {
                    body : "success"
                }
            }
        } else {
            return { reason }            
        }
    }


    // printLoginState(state)
    // success -> 'success' + body
    // fail => 'fail' + body

    function printLoginState1(state: LoginState) {
        if ('response' in state) {
            console.log(`success ${state.response.body}`);
        } else {
            console.log(`fail ${state.reason}`);  
        }   
    }
}