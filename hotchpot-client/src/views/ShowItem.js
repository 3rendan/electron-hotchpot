import React from "react";
import Items from "./Items.js";
import axios from "axios";

class ShowItem extends Component {
  render(){
    return(
      <div className="col-sm-7">
        { this.props.items((item, i) => {
          <div key={item.id} className="items">
            <h3><span className="title">{ item.title } </span>| <span className="author">{ item.author } </span></h3>
            <small>The accession number is { item.accession_number }</small><br />
            <button className="btn btn-warning" onClick={() => this.props.handleUpdate(item.id)}> UPDATE </button>
            <button className="btn btn-danger" onClick={() => this.props.deleteItem(item.id, i)}> DELETE </button>
          </div>
        )
      })}
}


export default ShowItem;
