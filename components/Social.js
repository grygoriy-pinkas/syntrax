import React from "react";
import Panel from 'muicss/lib/react/panel';
import Container from 'muicss/lib/react/container';

export default class Social extends React.Component {
  render() {
    return (
      // <div className="social">
      <Container className="mui--text-right">
              <p className="social_title">Ми в соцмережах:</p>
          <a className="fb"><img src="/static/social.svg" alt="fb" /></a>
          </Container>
      // </div>
    );
  }
}

