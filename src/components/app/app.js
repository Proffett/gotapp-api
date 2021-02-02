import React, { Component } from "react";
import Header from "../header";
import RandomChar from "../randomChar";
import CharacterPage from "../pages/characterPage";
import HousePage from "../pages/housePage";
import BookPage from "../pages/bookPage";
import ErrorMessage from "../errorMessage";
import { Col, Row, Container, Button } from "reactstrap";


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      randomCharView: true,
      error: false,
    };

    this.onClickHandler = this.onClickHandler.bind(this);

  }

  componentDidCatch() {
    console.log("error");
    this.setState({ error: true });
  }

  onClickHandler() {
    this.setState((oldState) => ({
      randomCharView: !oldState.randomCharView,
    }));
  }

  onItemSelected = (id) => {
    this.setState({
      selectedItem: id,
    });
  };

  render() {
    const { randomCharView } = this.state;
    const randomCharacterView = randomCharView ? <RandomChar /> : null;

    if (this.state.error) {
      return <ErrorMessage />;
    }

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Container>
          <Row>
            <Col lg={{ size: 5, offset: 0 }}>
              <Button color="primary" onClick={this.onClickHandler}>
                toggle
              </Button>
              {randomCharacterView}
            </Col>
          </Row>

          <CharacterPage />

          <BookPage />

          <HousePage />
          {/* <Row>
                           <Col md="6">
                             <ItemList
                               onItemSelected={this.onItemSelected}
                               getData={this.gotService.getAllHouses}
                               renderItem={(item) => item.name}
                             />
                           </Col>
                           <Col md="6">
                             <ItemDetails itemId={this.state.selectedItem} />
                           </Col>
                         </Row> */}

          {/* <Row>
                           <Col md="6">
                             <ItemList
                               onItemSelected={this.onItemSelected}
                               getData={this.gotService.getAllBooks}
                               renderItem={(item) => (
                                 <>
                                   <span>{item.name}</span>
                                   <button>Click me</button>
                                 </>
                               )}
                             />
                           </Col>
                           <Col md="6">
                             <ItemDetails itemId={this.state.selectedBook} />
                           </Col>
                         </Row> */}
        </Container>
      </>
    );
  }
}
