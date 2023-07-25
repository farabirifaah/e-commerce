import React, { Component } from "react";
import { Header, Project, Hero, TechStack, Footer, Experience } from "parts";
import api from "../../json/ResumePage.json";

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
        <Hero isResume data={api.data.Hero} />
        <TechStack />
        <Experience />
        <Project data={api.data.works} />
        <Footer />
      </>
    );
  }
}
