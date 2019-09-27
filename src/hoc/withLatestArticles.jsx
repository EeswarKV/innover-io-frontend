/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import fetch from 'isomorphic-fetch';

const withLatestArticles = Page => {
  const WithLatestArticles = props => <Page {...props} />;

  WithLatestArticles.getInitialProps = async context => {
    const { req } = context;
    const baseURL = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseURL}/api/articles`);
    const articles = await res.json();
    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      articles,
    };
  };
  return WithLatestArticles;
};

export default withLatestArticles;
