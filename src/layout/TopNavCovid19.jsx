import React, { useEffect, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { clearTopNews, setTopNews } from "../actions/news";
import Covid19DataSource from "../components/Covid19DataSource ";

const TopNavCovid19 = ({ setTopNews, news, clearTopNews }) => {
  const [page, setPage] = useState(1);
  const [categorySourceUrl, setCategorySourceUrl] = useState("");
  const handleCategorySourceSearch = (categorySourceUrl) => {
    setPage(1);
    setCategorySourceUrl(categorySourceUrl);
  };



  useEffect(() => {
    if (categorySourceUrl) {
      const url = `${categorySourceUrl}`;
      setTopNews(url, page);
    }
    return () => {
      clearTopNews();
    };
  }, [categorySourceUrl, page]);
  return (
    <Navbar collapseOnSelect expand="lg" bg="primary">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="left">
            <Nav.Link activeClassName="active" exact as={NavLink} to="/">
              <h5>Indonesia</h5>
            </Nav.Link>
            <Nav.Link activeClassName="active" exact as={NavLink} to="/Programming">
              <h5>Programming</h5>
            </Nav.Link>
            <Nav.Link activeClassName="active" exact as={NavLink} to="/Covid">
              <h5>Covid 19</h5>
            </Nav.Link>
            <Nav.Link activeClassName="active" as={NavLink} to="/bookmarks">
              <h5> Bookmarks</h5>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Container>
        
      <Covid19DataSource
        onCategorySourceSearch={(categorySourceUrl) => {
          handleCategorySourceSearch(categorySourceUrl);
        }}
      />
      </Container>
    </Navbar>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { setTopNews, clearTopNews })(TopNavCovid19);
