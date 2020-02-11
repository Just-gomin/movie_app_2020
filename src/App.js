import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    count: 0
  };
  /* 
    react에서 state를 직접 변경하지 않는 이유는 render를 거치지 않아 화면상에 변경내용을 보일 수 없기 때문 입니다.
    이를 해결하기위해서 setState를 이용하면 변화가 생길 때 마다 자동으로 render를 하여 화면에 적용하게 됩니다.
    즉 setState를 호출할 때 마다 render가 반복됩니다.
  */
  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
    /*
      this.setState({this.state.count + 1}); 을 이용해도 같은 결과를 보여줍니다. 하지만 계속해서 state에 의존하게 되고,
      이 외부 상태에 의존하지 않기 위해서 current를 활용하는 방법이 더 좋은 방법입니다.
    */
  };
  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is {this.state.count}.</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
