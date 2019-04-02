import React, {Component} from 'react';
import { Switch, Route, Redirect, BrowserRouter} from "react-router-dom";
import Index from '../index/index';
import About from '../about/index';
import Book from '../book/index';
import Details from '../details/index';
import User from '../user/index';
function FRouter() {
    let flag = 0;
    return (
      <Switch>
        <Route path="/" exact render={() => (flag == 0 ? (<Redirect to="/index/all"/>) : (<Book/>))}/>
        <Route path='/index/:id' component={Index}/>
        <Route path='/book' component={Book}/>
        <Route path='/details/:id' component={Details}/>
        <Route path='/about' component={About}/>
        <Route path='/user/:id' component={User}/>
      </Switch>
    );
}


export default FRouter;
