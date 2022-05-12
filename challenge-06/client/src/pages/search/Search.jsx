import React, { useState, useEffect, Fragment } from "react";

import Navbar from '../../components/Navbar'
import Search from '../../components/Search'
import Footer from '../../components/Footer'

import userService from '../../services/user.service';
import eventBus from '../../common/EventBus';

export default function SearchPage() {
  const [content, setContent] = useState("");

  useEffect(() => {
    userService.getUserBoard().then(
      (response) => {
        setContent(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setContent(_content);

        if (error.response && error.response.status === 401) {
          eventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <Fragment>
      <div>{content}</div>
      <Navbar isHome />
      <div className='-mt-12'>
        <Search />
      </div>
      <Footer />
    </Fragment>
  )
}
