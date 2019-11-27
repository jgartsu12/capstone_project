import React, { Component } from "react";
// import axios from "axios"; PYTHON FLASK

export default class LearningDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      learningItem: {}
    };
  }

  componentWillMount() {
    this.getLearningItem();
  }

  // getPortfolioItem() { PYTHON flask
  //   axios
  //     .get(
  //       `https://johncgartsu.devcamp.space/portfolio/portfolio_items/${
  //         this.props.match.params.slug
  //       }`,
  //       { withCredentials: true }
  //     )
  //     .then(response => {
  //       this.setState({
  //         portfolioItem: response.data.portfolio_item
  //       });
  //     })
  //     .catch(error => {
  //       console.log("getportfolioitem error", error);
  //     });
  // }

  render() {
    const {
      banner_image_url,
      category,
      description,
      logo_url,
      name,
      thumb_image_url,
      url
    } = this.state.learningItem;

    const bannerStyles = {
      backgroundImage: "url(" + banner_image_url + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center"
    };

    const logoStyles = {
      width: "200px"
    };

    return (
      <div className="learning-detail-wrapper">
        <div className="banner" style={bannerStyles}>
          <img src={logo_url} style={logoStyles} />
        </div>

        <div className="learning-detail-description-wrapper">
          <div className="description">{description}</div>
        </div>

        <div className="bottom-content-wrapper">
          <a href={url} className="site-link" target="_blank">
            Visit {name}
          </a>
        </div>
      </div>
    );
  }
}