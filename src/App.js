import React from 'react';
import {Route, Switch, Link} from 'react-router-dom'
import './App.css';
import Homepage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup.component';

let pageChange=(data)=>{
  return (data.history.push('/page2'))
}

let Page1=(props)=>{
  return(
    <React.Fragment>
    <div>PAGE 1</div>
    <button onClick = {()=>{pageChange(props)}}>Go To PAGE 2</button>
    </React.Fragment>
  )
}

let Page2=()=>{
  return(
    <div>PAGE 2</div>
  )
}

let Page3=(props)=>{
  console.log(props)
  return(
  <div>PAGE 3 {props.match.params.pageId} </div>
  )
}

function App() {
  return (
    <div className="container-fluid">
        <Header />
        <Switch>
          <Route exact  path = '/' component = {Homepage}/>
          <Route exact  path = '/page1' component = {Page1}/>
          <Route exact  path = '/page2' component = {Page2}/>
          <Route exact  path = '/page3/:pageId' component = {Page3}/>
          <Route exact path = '/shop' component = {ShopPage}/>
          <Route exact path = '/signin' component = {SignInAndSignUpPage} />
        </Switch>
    </div>
  );
}

export default App;
