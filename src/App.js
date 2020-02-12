import React from "react";
import axios from "axios";
/* 
https://www.npmjs.com/package/axios 에서 axios에 관한 것을 알 수 있습니다.
axios는 네트워크로부터 데이터를 요청 할 수 있게 하는 package 입니다.
*/
class App extends React.Component {
  state = {
    isLoading: true
  };
  getMovies = async () => {
    // 해당 함수는 axios를 이용해 url으로 부터 데이터를 가져옵니다.
    // 이 과정은 시간이 걸리기 때문에 완료될 때 까지 시간이 필요하여
    // async라는 키워드를 통해 함수가 비동기 함수임을 알리고,
    // await 키워드를 통해 기다려야할 대상이 무엇인지 알려주고 있습니다.
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
