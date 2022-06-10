import React, { Component } from "react";

export default class Movie extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { title, poster_src, overview, vote_average, release_date } =
      this.props.movie;
    return (
      <center>
        <table width={800} className="mt-4 table shadow">
          <tbody>
            <tr>
              <td className="td p-2">
                <img src={poster_src} />
              </td>
              <td className="td pt-4">
                <strong>{title}</strong>
                <p className="pr-3">{overview}</p>
                <div className="content mt-6 pt-6">
                  <span>
                    <strong>Rating: </strong>
                    {vote_average}
                  </span>
                  <span className="pr-3">
                    <strong>Date: </strong>
                    {release_date}
                  </span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </center>
    );
  }
}
