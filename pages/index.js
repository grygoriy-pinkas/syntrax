import React from 'react';
import Header from '../components/header/Header'

import "../style.css"
import Body from '../components/body/Body';
import Footer from '../components/Footer';

export default class extends React.Component {
//   static async getInitialProps({ req }) {
//     const userAgent = req ? req.headers['user-agent'] : navigator.userAgent
//     return { userAgent }
//   }
  render() {
    return (
      <div>
        {/* <Head/> */}
        <Header/>
       <Body/>
       <Footer/>
      </div>
    )
  }
}