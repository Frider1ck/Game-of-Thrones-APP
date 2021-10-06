import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import Header from "../header";
import RandomChar from "../randomChar";
import "./app.css";
import ErrorMessage from "../errorMessage";
import CharacterPage from "../characterPage";
import HousesPage from "../housesPage/hosesPage";
import BooksPage from "../booksPage";
import BooksItem from "../ItemPage";
import gotService from '../../services/gotService'
import {BrowserRouter as Router, Route} from "react-router-dom";



export default class App extends Component {
  gotService = new gotService();


  state = {
    showCont: true,
    error: false,
  };

  componentDidCatch() {
    this.state({
      error: true,
    });
  }

  showContent = () => {
    this.setState({
      showCont: !this.state.showCont,
    });
  };

  render() {
    const res = this.state.showCont ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }
    return (
      <Router>
        <div className='app'>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              {res}
              <button className="btn" onClick={this.showContent}>
                {" "}
                Togle
              </button>
            </Col>
          </Row>
          <Route path='/characters' component={CharacterPage}/>
          <Route path='/houses' component={HousesPage}/>
          <Route path='/books' exact component={BooksPage}/>
          <Route path='/books/:id' render={({match}) => {
          const {id} = match.params;
          <BooksItem bookId={id} />}
          }/>

        </Container>
      </div>
      </Router>
    );
  }
}
