import { useEffect, useState } from "react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  styled,
  Button,
  Typography,
} from "@mui/material";
import { getUsers, deleteUser } from "../service/api";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
`;

const Thead = styled(TableRow)`
  background: #000;
  & > th {
    color: #fff;
    font-size: 18px;
  }
`;

const TBody = styled(TableRow)`
  & > td {
    font-size: 16px;
  }
`;

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsersDetails();
  }, []);

  const getUsersDetails = async () => {
    try {
      const response = await getUsers();
      console.log("Users API response:", response.data);
      setUsers(response.data);
    } catch (error) {
      console.error("Failed to fetch users:", error);
      alert("Failed to load users");
    } finally {
      setLoading(false);
    }
  };

  const deleteUserData = async (id) => {
    try {
      await deleteUser(id);
      getUsersDetails();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete user");
    }
  };

  if (loading) {
    return <Typography align="center">Loading users...</Typography>;
  }

  if (users.length === 0) {
    return <Typography align="center">No users found</Typography>;
  }

  return (
    <StyledTable>
      <TableHead>
        <Thead>
          <TableCell>ID</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>UserName</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Actions</TableCell>
        </Thead>
      </TableHead>

      <TableBody>
        {users.map((user) => (
          <TBody key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.username}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.phone}</TableCell>
            <TableCell>
              <Button
                variant="contained"
                sx={{ mr: 1 }}
                component={Link}
                to={`/edit/${user.id}`}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteUserData(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TBody>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default AllUsers;
