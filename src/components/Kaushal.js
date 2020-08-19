import React, { Component } from "react";

class Kaushal extends Component {
  render() {
    const kaushal = document.querySelectorAll("#kaushal path");

    for (let i = 0; i < kaushal.length; i++) {
      let a = `Letter ${i} is  ${kaushal[i].getTotalLength()}`;
    }
    return (
      <div id="kaushal">
      <div className="heading">
        <svg viewBox="0 0 1350 600">
          <text text-anchor="end" x="800" y="550" fill="transparent">
            Kaushal 2.0
          </text>
        </svg>
      </div>
      </div>
    );
  }
}

export default Kaushal;
