import { AppBar, Toolbar, styled, Button } from "@mui/material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = styled(AppBar)`
  background: #111111;
`;

const Tabs = styled(NavLink)`
  font-size: 20px;
  margin-right: 20px;
  color: inherit;
  text-decoration: none;
`;

const NavBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Hide navbar on login & signup
  if (location.pathname === "/login" || location.pathname === "/signup") {
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  return (
    <Header position="static">
      <Toolbar>
        <Tabs to="/">Code For Interview</Tabs>
        <Tabs to="/all">All Users</Tabs>
        <Tabs to="/add">Add User</Tabs>

        <Button
          color="inherit"
          sx={{ marginLeft: "auto" }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Toolbar>
    </Header>
  );
};

export default NavBar;
