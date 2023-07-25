import React, { Component } from "react";
import { Header, Project, Hero, Footer } from "parts";
import api from "../../json/LandingPage.json";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }

  componentDidMount() {
    window.title = "Staycation | Home";
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header {...this.props} />
        <Hero />
        <Project data={api.data.works} />
        <Footer />
      </>
    );
  }
}
