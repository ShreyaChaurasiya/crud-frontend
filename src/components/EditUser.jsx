import { useState, useEffect } from "react";
import { FormGroup, FormControl, InputLabel, Input, Typography, Button, styled } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { getUser, editUser } from "../service/api";

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

const EditUser = () => {
  const [user, setUser] = useState(initialValues);
  const navigate = useNavigate();
  const { id } = useParams(); // ✅ keep as string

  useEffect(() => {
    loadUser();
  }, [id]);

  const loadUser = async () => {
    try {
      const response = await getUser(id);
      setUser(response.data);
    } catch (error) {
      console.error("Error loading user", error);
    }
  };

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const updateUser = async () => {
    try {
      await editUser(user, id);
      navigate("/all");
    } catch (error) {
      console.error("Error updating user", error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Edit User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input name="name" value={user.name} onChange={onValueChange} />
      </FormControl>

      <FormControl>
        <InputLabel>UserName</InputLabel>
        <Input
          name="username"
          value={user.username}
          onChange={onValueChange}
        />
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
        <Button variant="contained" onClick={updateUser}>
          Edit User
        </Button>
      </FormControl>
    </Container>
  );
};

export default EditUser;