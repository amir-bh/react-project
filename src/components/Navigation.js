import React from 'react';
import PropTypes from 'prop-types';
import { Collapse, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import { Link, withRouter } from 'react-router-dom';

const Navigation = ({ location: { pathname } }) => {
  return (
    <Navbar color="light" light expand="md">
      <Collapse isOpen navbar>
        <Nav className="m-2" navbar>
          <NavItem active={pathname === '/'} className="mr-5">
            <NavLink>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/"
              >
                PostList
              </Link>
            </NavLink>
          </NavItem>
          <NavItem active={pathname === '/AddPost'} className="mr-5">
            <NavLink>
              <Link
                style={{ color: 'inherit', textDecoration: 'inherit' }}
                to="/AddPost"
              >
                AddPost
              </Link>
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default withRouter(Navigation);
Navigation.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};
