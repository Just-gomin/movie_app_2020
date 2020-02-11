import React from "react";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    isLoading: true
  };
  componentDidMount() {
    // render 후에 state의 변화를 주어 다시 render가 발생합니다.
    // Movie App의 경우 API로 부터 Data Fetching이 완료되면 영화들을 보여 줄 수 있도록 Render를 합니다.
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
