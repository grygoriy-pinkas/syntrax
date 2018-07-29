import React from "react";
import Link from "next/link";

export default class extends React.Component {
  render() {
    return (
      <div className="menu">
        <ul className="menu_list">
          <li className="menu_item">
            <Link href="/">
              <a>Головна</a>
            </Link>
          </li>
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
      </div>
    );
  }
}
