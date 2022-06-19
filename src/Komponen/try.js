import React from 'react';
import './try.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export function Tombol(props) {
  return (
    <Button color="danger">Danger!</Button>
  );
};

export function Data(props) {
  return (
    <Form>
      <FormGroup>
        <Label for="exampleEmail">
          Email
        </Label>
        <Input
          id="exampleEmail"
          name="email"
          placeholder="example@gmail.com"
          type="email"
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleUsername">
          Username
        </Label>
        <Input
          id="exampleUsername"
          name="username"
          placeholder="Bill Gates"
          type="username"
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">
          Password
        </Label>
        <Input
          id="examplePassword"
          name="password"
          placeholder="********"
          type="password"
        />
      </FormGroup>
    </Form>
  );
};