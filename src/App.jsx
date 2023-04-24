// https://github.com/lwcheun/React_Expense_Tracker/blob/92701e56006e6054cb877fa451d4cc42b6e74053/src/App.js
import React from 'react';

import { GlobalContext } from './context/GlobalState';

import Loading from './components/pages/Loading';
import Letter from './components/atoms/Letter';
import Header from './components/organisms/Header';
import Content from './components/organisms/Content';
import Footer from './components/organisms/Footer';


require('./assets/styles/App.css');

export default class App extends React.Component  {
  static contextType = GlobalContext;

  componentDidMount() {
    console.log('DOM LOADED')
    
    setTimeout(() => {
      this.context.isLoading({
        isLoading: true
      });
    }, 2000);
  }

  render() {
    const {loading} = this.context;

    return (
      <>
      <div className={loading? "disabled_loader" : "enabled_loader"}>
        <Loading />
        <section id="onepage">
          <Letter text="  Devloppeur  Web.  "/>
          <Header/>
          <Content/>
          <Footer/>
        </section>
      </div>
      </>
    );
  }
};