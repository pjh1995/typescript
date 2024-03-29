{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: 'loading';
  };

  type SuccessState = {
    state: 'success';
    response: {
      body: string;
    };
  };

  type FailState = {
    state: 'fail';
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(props:ResourceLoadState) {
    switch(props.state) {
      case "loading":
        console.log("👀 loading");
        break;
      case "success":
        console.log(`😃 ${props.response.body}`); 
        break;
      case "fail": 
        console.log(`😱 ${props.reason}`); 
        break;
    }
  }

  printLoginState({ state: 'loading' }); // 👀 loading...
  printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
  printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
