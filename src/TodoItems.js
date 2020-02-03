import React, { Component } from "react";
import { Container, ListGroup, Row, Col } from "react-bootstrap";

class TodoItems extends Component {
  createTasks = item => {
    return (
      <ListGroup>
        <ListGroup.Item
          key={item.key}
          onClick={() => this.props.deleteItem(item.key)}
          mb="1"
        >
          {item.text}
        </ListGroup.Item>
      </ListGroup>
    );
  };
  render() {
    const todoEntries = this.props.entries;
    const listItems = todoEntries.map(this.createTasks);

    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">
            <ul className="theList" style={{ paddingLeft: "0px" }}>
              {listItems}
            </ul>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoItems;
