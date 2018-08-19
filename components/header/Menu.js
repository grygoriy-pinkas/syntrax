import React from "react";
import Link from "next/link";
import Container from 'muicss/lib/react/container';

import Divider from 'muicss/lib/react/divider';

export default class extends React.Component {
  render() {
    return (
      <Container className="mui--text-left">
      {/* <div className="menu"> */}
        <ul className="menu_list">
          <li className="menu_item">
            <Link href="/">
              <a>Головна</a>
            </Link>
          </li>
          {/* <span className="mui--divider-right">Content 1&nbsp;</span> */}
          <li className="menu_item">
            <Link href="/services">
              <a>Наші послуги</a>
            </Link>
          </li>
          <li className="menu_item">
            <Link href="/news">
              <a>Новини</a>
            </Link>
          </li>
          <li className="menu_item">
            <Link href="/about">
              <a>Про компанію</a>
            </Link>
          </li>
          <li className="menu_item">
            <Link href="/contact">
              <a>Контакти</a>
            </Link>
          </li>
        </ul>
      {/* </div> */}
      </Container>
    );
  }
}
