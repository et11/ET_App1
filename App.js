import React, { Component } from 'react';
import './App.css';
import { Layout,Header,Navigation,Drawer,Content } from 'react-mdl';
import Main from './components/Main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
  
     /* Uses a header that scrolls with the text, rather than staying locked at the top */
    <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title={<Link style={{textDecoration: 'none', color: 'white'}} to="/">et_app1</Link>} scroll>
            <Navigation>
                <Link to="/paintings">Paintings</Link>
                <Link to="/drawings">Drawings</Link>
                <Link to="/about">About</Link>
            </Navigation>
        </Header>
        <Drawer title={<Link style={{textDecoration: 'none', color: 'black'}} to="/">et_app1</Link>}>
            <Navigation>
                <Link to="/paintings ">Paintings</Link>
                <Link to="/drawings">Drawings </Link>
                <Link to="/about">About</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main />
        </Content>
      </Layout>
    </div>
   
    );
  }
}

export default App;
