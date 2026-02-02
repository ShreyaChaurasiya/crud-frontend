import { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Typography,
  Button,
  styled
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addUser } from "../service/api";

const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto 0 auto;
  & > div {
    margin-top: 20px;
  }
`;

const initialValues = {
  name: "",
  username: "",
  email: "",
  phone: ""
};

const AddUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    try {
      await addUser(user);
      navigate("/all");
    } catch (error) {
      console.error("Add User Failed:", error);
      alert("Failed to add user");
    }
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" value={user.name} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input name="username" value={user.username} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input name="email" value={user.email} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input name="phone" value={user.phone} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        <Button variant="contained" onClick={addUserDetails}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
