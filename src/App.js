import "./App.css";
import axios from "axios";
import React, { Component } from "react";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { rows: [], data: 1 };
  }
  componentDidMount() {
    this.Search("a star");
  }

  Search = (keyword) => {
    var dataArray = [];
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=57430c65451f5f07a9f1e453b4a54a21&query=${keyword}`
      )
      .then((res) => {
        res.data.results.forEach((item) => {
          item.poster_path == null
            ? (item.poster_src =
                "https://via.placeholder.com/185x262.png?text=No%20Image")
            : (item.poster_src =
                "https://image.tmdb.org/t/p/w185" + item.poster_path);

          dataArray.push(item);
        });
        this.setState({ rows: dataArray });
      });
  };
  render() {
    return (
      <div className="App">
        {/*JSX  (javascript+xml)*/}
        <div className="header mb-6">
          <table className="navbar">
            <tbody>
              <tr>
                <td>
                  <img
                    src={require("./assets/img/logo.svg").default}
                    className="App-logo w-50 h-50"
                  />
                </td>
                <td>My React webapp</td>
              </tr>
            </tbody>
          </table>
          <center className="navbar pl-0 pb-1">
            <table>
              <tbody>
                <tr>
                  <td width={800}>
                    <input
                      className="input-search wp-100"
                      placeholder="Your Keyword?"
                      onChange={(e) => {
                        this.Search(e.target.value);
                      }}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
        <div className="mt-10">
          {this.state.rows.map((item) => (
            <Movie movie={item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}
export default App;
