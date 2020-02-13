import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

/* 
https://www.npmjs.com/package/axios 에서 axios에 관한 것을 알 수 있습니다.
axios는 네트워크로부터 데이터를 요청 할 수 있게 하는 package 입니다.
*/
class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    // 해당 함수는 axios를 이용해 url으로 부터 데이터를 가져옵니다.
    // 이 과정은 시간이 걸리기 때문에 완료될 때 까지 시간이 필요하여
    // async라는 키워드를 통해 함수가 비동기 함수임을 알리고,
    // await 키워드를 통해 기다려야할 대상이 무엇인지 알려주고 있습니다.
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // 해당 url에서 가져온 data에서 우리가 필요로 하는 data의 위치를 맞추기 위해 변수를 위와 같이 설정했다.

    this.setState({ movies, isLoading: false });
    // setState에서 state에 있는 변수 이름과 해당 변수와 대응 시킬 변수의 이름이 같다면
    // setState({movies:movies}) 대신에 setState({movies})를 사용할 수 있다.
  };
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    // 현 클래스에 있는 state를 render함수 내 지역변수에 할당 합니다.
    return (
      <section class="container">
        {isLoading ? (
          <div class="loader">
            <span class="loader_text">Loading...</span>
          </div>
        ) : (
          <div class="movies">
            {movies.map(movie => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              );
            })}
          </div>
        )}
      </section>
    );
  }
}

export default App;
