import React,{Component} from 'react';

import { Navbar, Nav, NavItem,Clearfix,MenuItem, NavDropdown} from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
//import logo from '../utils/cox.png';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class Header extends Component {
    state={
      hover:false,
      isOpen: false
    }
  
    handleOpen = () => {
      this.setState({ isOpen: true })
    }
  
    handleClose = () => {
       this.setState({ isOpen: false })
    }

    handleClick = () => {
      window.open('https://coxcomminc.sharepoint.com/sites/coxone/Pages/Default.aspx');
    }
    handleAdminClick=()=> {
      this.props.redirect();
    }       
    render() {
        const {hover}= this.state;
        const setting =(
          <div className="navInline">
          <i className="fa fa-cog fa-2x" aria-hidden="true"></i>
          </div>
        )
        return (
          <Navbar inverse collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/list" style={{color:'#fff'}}><span style={{marginLeft:-75}}><img src="../utils/cox.png" style={{width:86, height:41, fontFamily: 'Roboto Regular,Roboto', fontWeight: '700', fontStyle: 'normal', fontSize: '16px'}} onClick={this.handleClick}/> &nbsp;&nbsp;&nbsp;<b>BCP</b> HEALTH TRACKER</span></Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse style={{marginRight:-65}}>
              <Nav pullRight>
                <NavDropdown title={setting} id="nav-dropdown"
                onMouseEnter = { this.handleOpen }
                onMouseLeave = { this.handleClose }
                defaultOpen = { this.state.isOpen }
                noCaret>
                <MenuItem disabled>User</MenuItem>
                <MenuItem divider />
                <MenuItem>Log Out</MenuItem>
                <MenuItem onClick={this.handleAdminClick}>Admin</MenuItem> 
                <MenuItem disabled>Version/Release</MenuItem>
                </NavDropdown>              
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }
};

const mapStateToProps = state => {
  return {
  }
}

const mapDispatchToProps = dispatch => {
  return { 
    redirect: () => {dispatch(push('/admin'))}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);

// const navitems = [
//   {link: '#', name: 'Home', title: <Link to="/" style={{color:'#fff'}}><i className="fa fa-home fa-2x" aria-hidden="true"></i></Link>},
//   {link: '#', name: 'Camera', title: <i className="fa fa-camera fa-2x" aria-hidden="true"></i>},
//   {link: '#', name: 'Comments', title: <div className="fa fa-comment fa-2x" aria-hidden="true"><NotificationBadge count={this.state.num} effect={[null, null]} style={{color: 'white', backgroundColor:'red', top: '-25px', right: '-9px'}}/></div>},
//   {link: '#', name: 'Print', title: <i className="fa fa-print fa-2x" aria-hidden="true"></i>},
//   {link: '#', name: 'Download', title: <i className="fa fa-external-link fa-2x" aria-hidden="true"></i>},
//   {link: '#', name: 'LogOut', title: <i className="fa fa-user fa-2x" aria-hidden="true"></i>}  
// ];      
// {navitems.map(item => {
//   return <NavItem key={navitems.indexOf(item)} link={item.link}> <div className="navInline">{item.title} <h4 className="navTextMobile">{item.name}</h4></div></NavItem>;
//   })}                                                              