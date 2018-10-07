import React, { Component } from "react";
import "./square.css";

class Counters extends Component {
  render() {
    const { counters, onHandleImage } = this.props;

    let rows = [];
    let value, counter, imageTag;

    for (var i = 0; i < 3; i++) {
      let rowID = `row${i}`;
      let cell = [];
      for (var idx = 0; idx < 3; idx++) {
        let cellID = `cell${i}-${idx}`;
        if (i === 0) {
          value = counter = counters[idx].id;
        } else if (i === 1) {
          value = counter = counters[3 + idx].id;
        } else {
          value = counter = counters[6 + idx].id;
        }
        let boundHandleImage = onHandleImage.bind(this, value);

        counters.forEach(image => {
          if (image.id === value) {
            imageTag = image.image;
          }
        });

        cell.push(
          <td key={cellID} id={cellID} value={value} onClick={boundHandleImage}>
            <img src={imageTag} />
          </td>
        );
      }
      rows.push(
        <tr key={i} id={rowID}>
          {cell}
        </tr>
      );
    }

    return (
      <div>
        <table id="image-board">
          <tbody>{rows}</tbody>
        </table>
      </div>
    );
  }
}

export default Counters;
