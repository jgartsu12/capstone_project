import React, { Component } from "react";


import LearningItem from "./learning-item";

export default class LearningContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to the Learning Center Dashboard",
      isLoading: false,
      data: []
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  handleFilter(filter) {
    if (filter === "CLEAR_FILTERS") {
      this.getLearningItems();
    } else {
      this.getLearningItems(filter);
    }
  }

//   change to python api flask
//   getPortfolioItems(filter = null) {
//     axios
//       .get("https://johncgartsu.devcamp.space/portfolio/portfolio_items")
//       .then(response => {
//         if (filter) {
//           this.setState({
//             data: response.data.portfolio_items.filter(item => {
//               return item.category === filter;
//             })
//           });
//         } else {
//           this.setState({
//             data: response.data.portfolio_items
//           });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }

  learningItems() {
    return this.state.data.map(item => {
      return <LearningItem key={item.id} item={item} />;
    });
  }

  componentDidMount() {
    this.getLearningItems();
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="homepage-wrapper">
        <div className="filter-links">
          <button
            className="btn"
            onClick={() => this.handleFilter("Home")}
          >
            Home
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Library")}
          >
            Library
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Support")}
          >
            Support
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("Progress")}
          >
            Progress
          </button>
          <button
            className="btn"
            onClick={() => this.handleFilter("CLEAR_FILTERS")}
          >
            All
          </button>
        </div>
        <div className="portfolio-items-wrapper">{this.learningItems()}</div>
      </div>
    );
  }
}