import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material'
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../Hooks/useAuth';
import PayNow from '../PayNow/PayNow';
import Review from '../Review/Review';
import AdminRoute from '../AdminRoute/AdminRoute';
import AddProduct from '../Admin/AddProduct/AddProduct';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';



const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  let { path, url } = useRouteMatch();
  const { logOut, admin } = useAuth()
  const drawer = (
    <div>
      <Toolbar />
      <Divider />

      <Link to="/home" >  <Button> Home </Button></Link> <br />
      {
        !admin ? <Box>
          <Link to={`${url}/payNow`} >  <Button> Pay Now </Button></Link> <br />
          <Link to={`${url}/myOrders`} >  <Button> My Orders</Button></Link> <br />
          <Link to={`${url}/review`} >  <Button>Review </Button></Link> <br /></Box> :
          <Box>
            <Link to={`${url}/admin`} >  <Button>Manage All Orders</Button></Link> <br />
            <Link to={`${url}/addProduct`} >  <Button>Add a Product</Button></Link> <br />
            <Link to={`${url}/manageProducts`} >  <Button>Manage Products</Button></Link> <br />
            <Link to={`${url}/admin`} >  <Button>Make Admin</Button></Link> <br />
          </Box>

      }


      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Button onClick={logOut} >Log Out</Button>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Typography paragraph>

        </Typography>
        <Switch>
          <Route exact path={path}>

          </Route>
          <AdminRoute path={`${path}/myOrders`}>
            <MyOrders />
          </AdminRoute>
          <AdminRoute path={`${path}/payNow`}>
            <PayNow />
          </AdminRoute>
          <AdminRoute path={`${path}/review`}>
            <Review />
          </AdminRoute>
          <AdminRoute path={`${path}/addProduct`}>
            <AddProduct />
          </AdminRoute>
          <AdminRoute path={`${path}/manageProducts`}>
            <ManageProducts />
          </AdminRoute>
          <AdminRoute path={`${path}/admin`}>
            <MakeAdmin />
          </AdminRoute>
        </Switch>
      </Box>

    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;
