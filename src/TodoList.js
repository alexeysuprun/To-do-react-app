import React, { Component } from "react";
import { Form, Button, Container, Row, Col, InputGroup,  } from "react-bootstrap";

class TodoList extends Component {
  componentDidUpdate() {
    this.props.inputElement.current.focus();
  }
  render() {
    return (
      <Container>
        <Row className="justify-content-md-center">
          <Col lg="6">

          <Form onSubmit={this.props.addItem}>
              
          <InputGroup className="mb-3 mt-3">
          <Form.Control
              type="text"
              placeholder="Task"
              ref={this.props.inputElement}
              value={this.props.currentItem.text}
              onChange={this.props.handleInput}
            />
            <InputGroup.Append>
            <Button variant="primary" type="submit">
              {" "}
              Add Task{" "}
            </Button>
            </InputGroup.Append>
          </InputGroup>

            

            
          </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default TodoList;
