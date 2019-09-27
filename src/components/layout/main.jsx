import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

import Nav from 'components/navigation/nav';
import Footer from 'components/footer/footer';

const Main = ({ children, title }) => (
  <>
    <Head>
      <title>{title} | innover.io</title>
    </Head>

    <Nav />
    {children}
    <Footer />
    <style jsx>
      {`
        :global(body) {
          margin: 0;
          box-sizing: border-box;
        }
      `}
    </style>
  </>
);

Main.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Main;
