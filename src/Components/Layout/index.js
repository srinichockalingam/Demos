import React,{Component , Fragment} from 'react';
import {Link, withRouter} from 'react-router-dom';
import  compose  from 'recompose/compose';
import { AppBar, Toolbar,IconButton,Typography,Hidden,Drawer,Divider, List,ListItem,ListItemText,Collapse} from '@material-ui/core';
import {Menu} from '@material-ui/icons';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import {  withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import '../../css/mdsp-css.min.css';
import SimpleBreadCrumbs from './breadcrumbs';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex',
    paddingTop: theme.spacing(4),
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },

  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    paddingTop: theme.spacing(3),
    //background: 'linear-gradient(70deg, #262261 35%, #323232 90%)'
    background: 'rgb(50,50,50)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    //backgroundImage: 'url(' + image + ')'
    //background: 'rgb(147,147,147)'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(10),
    [theme.breakpoints.up('sm')]: {
      marginLeft: -drawerWidth,
    },
   
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  appIcon:{
    color:"rgb(255,255,255)"
  },
  grow: {
    flexGrow: 1,
  },
  test:{
    paddingTop: theme.spacing(6),
  },
  typo:{
    flexGrow: 1,
    align:"center",
    [theme.breakpoints.up('sm')]: {
      
    },
    paddingTop:15
    //marginLeft: -48,
  }
});

class Layout extends Component{
    state = {
        mobileOpen:false,
        listA:false,
        listB:false,
    }

    

    render(){
        const { classes, location:{pathname},children,writers } = this.props;
        const { mobileOpen}= this.state;
        const { listA,listB}=this.state;
        //const classes = useStyles();
        //const theme = useTheme();
        //const [mobileOpen, setMobileOpen] = React.useState(false);

        const handleDrawerToggle = () => {
            this.setState({mobileOpen: !this.state.mobileOpen})
        };

        const handleClick = () => {
          this.setState({listA: !this.state.listA})
        };

        const handleClick2 = () => {
          this.setState({listB: !this.state.listB})
        };

        const drawer = (
            <div className="mdsp mdsp-defaults">
              <Hidden smDown>
              <div className={classes.toolbar} />
              </Hidden>
              <div className={classes.test} ></div>
              <List
                aria-labelledby="nested-list-subheader"
                className="list"
              >
                <ListItem button onClick={handleClick}>
                  <ListItemText primary={<b>Masters</b>} />
                  {listA ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={listA} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Master/Country" >
                      <ListItemText primary="Country" />
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Master/Factory" >
                      <ListItemText primary="Factory" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider/>
                <ListItem button >
                    <ListItemText primary={<b>Quality Management</b>} />
                </ListItem>
                <Divider/>
                <ListItem button >
                  <ListItemText primary={<b>Production Management</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button >
                  <ListItemText primary={<b>EHS</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button >
                  <ListItemText primary={<b>Raw Materials Management</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button >
                  <ListItemText primary={<b>Finished Goods</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button >
                   <ListItemText primary={<b>Checkshseet</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button >
                  <ListItemText primary={<b>Maintenance Management</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button >
                  <ListItemText primary={<b>Set Up</b>} />                 
                </ListItem>
                <Divider/>
                <ListItem button onClick={handleClick2}>
                  <ListItemText primary={<b>Reports</b>} />
                  {listB? <ExpandLess /> : <ExpandMore />}                 
                </ListItem>
                <Collapse in={listB} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Report/Radar" >
                      <ListItemText primary="Radar Chart" />
                    </ListItem>                    
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Report/Doughnut">
                      <ListItemText primary="Doughnut Chart" />
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Report/Bar" >
                      <ListItemText primary="Bar Chart" />
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Report/Line" >
                      <ListItemText primary="Line Chart" />
                    </ListItem>
                    <ListItem button className={classes.nested} component={Link} to ="/Home/Report/Pie" >
                      <ListItemText primary="Pie Chart" />
                    </ListItem>
                  
                  <ListItem button className={classes.nested} component={Link} to ="/Home/Report/Polar" >
                      <ListItemText primary="Polar Chart" />
                    </ListItem>
                  </List>
                </Collapse>
                <Divider/>
              </List>
            </div>
        );
        return <Fragment>
        <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} onClick={handleDrawerToggle}>
          <Toolbar>
            <div className={classes.typo} align="left">
              <SimpleBreadCrumbs/>
              </div>
              <Hidden smDown>         
            <Typography  className={classes.typo} align="right" variant="h6" noWrap>
              Think Rubber, Think Halcyon
            </Typography>
            </Hidden>   
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          
        </nav>
        <main className={classes.content}>
            {children}
        </main>
      </div>
      </Fragment>
    }
}

export default compose(
    withRouter,
    withStyles(styles)
)(Layout)

/*<MenuList>
                    <MenuItem component={Link} to = "/login">Login</MenuItem>
                    <MenuItem component={Link} to ="/" selected={'/' === pathname}> HOme</MenuItem>
                    <MenuItem component={Link} to ="/writers" selected={'/writers' === pathname}> WRiter</MenuItem>
                    <MenuList>
                    {writers.map(({id, name}) => {
                        const to= `/writers/${id}`
                        return <MenuItem key={id} component ={Link} to={to} selected={to === pathname}>{name}</MenuItem>
                    })}
                    </MenuList>
                </MenuList>
              <Divider />


component={Link} to ="/Home/writers" selected={'/Home/writers' === pathname}
              --------------------
              <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              align="left"
            >
              <Menu />
            </IconButton>
              
              
              
              
              */