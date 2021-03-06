import React, { Component } from "react";

import "./App.css";
import Header from "../Header/Header";
import Table from "../Table/Table";
import DataService from "../../services/DataService";
import SeachBar from "../SearchBar/SearchBar";
import AddTableItem from "../AddTableItem/AddTableItem";
import orderBy from "lodash/orderBy";
import ItemDetails from "../ItemDetails/ItemDetails";

const invertDirection = {
  acs: "desc",
  desc: "acs"
};

class App extends Component {
  dataService = new DataService();
  state = {
    itemList: [],
    inp: "",
    columnToSort: "",
    sortDirection: "desc",
    loader: false,
    selectedId: null
  };
  getData = () => {
    this.dataService.getData().then(itemList => {
      this.setState({ itemList });
    });
  };
  search = (items, inp) => {
    if (inp.length === 0) {
      return items;
    }
    return items.filter(item =>
      Object.values(item).some(
        x =>
          String(x)
            .toLowerCase()
            .indexOf(inp.toLowerCase()) > -1
      )
    );
  };
  onSearchClick = inp => {
    this.setState({ inp });
    document.getElementById("serch_data").value = "";
  };
  addNewData = newData => {
    this.setState(({ itemList }) => {
      const newArr = [newData, ...itemList];
      return {
        itemList: newArr
      };
    });
  };
  toggleForm = () => {
    this.setState(({ addDataForm }) => {
      addDataForm ? (addDataForm = false) : (addDataForm = true);
      return {
        addDataForm: addDataForm
      };
    });
  };
  sortColumn = id => {
    this.setState(state => ({
      columnToSort: id,
      sortDirection:
        state.columnToSort === id ? invertDirection[state.sortDirection] : "acs"
    }));
  };
  toggleLoader = () => {
    this.setState(state => ({
      loader: true
    }))
  }

  selectedId = (id) => {
    this.setState( state => ({
      selectedId: id
    }))
  }


  selectedItem = (items) => {
    return items.filter(el => {
      return el.id === this.state.selectedId;
    })
  }


  render() {
    const { itemList, inp } = this.state;
    const visibleItems = this.search(itemList, inp);
    const displayItem = this.selectedItem(itemList)
    return (
      <div className="App">
        <Header getData={this.getData} 
          toggleLoader={this.toggleLoader}
        />
        <SeachBar onSearchClick={this.onSearchClick} />
        {this.state.addDataForm ? (
          <AddTableItem addNewData={this.addNewData} />
        ) : null}
        <Table
          itemList={orderBy(
            visibleItems,
            this.state.columnToSort,
            this.state.sortDirection
          )}
          toggleForm={this.toggleForm}
          sortColumn={this.sortColumn}
          columnToSort={this.state.columnToSort}
          sortDirection={this.state.sortDirection}
          loader={this.state.loader}
          selectedId={this.selectedId}
        />
        <ItemDetails selectedItem={displayItem}/>
      </div>
    );
  }
}

export default App;
