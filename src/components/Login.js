import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <Form>
      <FormGroup>
        <Label>Email</Label>
        <Input type="text" placeholder="Enter Email"></Input>
        <Label>Password</Label>
        <Input type="text" placeholder="Enter Password"></Input>
      </FormGroup>
      <Link to="/home">
        <Button
          style={{
            width: 250,
            backgroundColor: "#f9423a",
            color: "#ffffff",
          }}
        >
          Submit
        </Button>
      </Link>
    </Form>
  );
};
