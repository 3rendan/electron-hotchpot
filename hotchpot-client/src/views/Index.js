import React from "react";
// import "src/css/main.css";
import Items from "./Items.js";
import ShowItem from "./ShowItem.js";
import NewItems from "./NewItems.js";
import UpdateItem from "./UpdateItem.js";
// import Show from "./components/Show.js";
import axios from "axios";
class Index extends React.Component {
  state = {
    items: false
  }
  componentDidMount() {
    this.getItems();
  }
  getItems = () =>{
    fetch('http://localhost:3000/items')
    .then(response => response.json())
    .then(json => this.setState({items: json}))
    .catch(error => console.error(error))
  }

  handleUpdate = (id) => {
    console.log(id);

    fetch('/items/' + id, {
      body: JSON.stringify(),
      method: 'PUT',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedItem => updatedItem.json())
    .then(jsonedItem => {
      fetch('/items')
        .then(response => response.json())
        .then(items => {
          this.setState({ items: items })
        })
    })
  }
  deleteItem = (id, i) =>{
    fetch("http://localhost:3000/items/" + id,
      {
        method: "DELETE"
      })
      .then(data => {
        this.setState({
          items: [
            ...this.state.items.slice(0, i),
            ...this.state.items.slice(i + 1)
          ]
        })
      })
    }
render(){
  return (
    <div className="Index">
    <div className="container">
      <div className="row">
        <>
          <NewItems items={this.state.items} getItems={this.getItems} />
        </>
        <>
          <Items deleteItem={this.deleteItem} handleUpdate={this.handleUpdate} items={this.state.items} />
        </>
        <>
          <ShowItem title="m"/>
        </>
      </div>
      </div>
    </div>
  );
}
}

export default Index;
