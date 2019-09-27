import React from 'react';
import Layout from 'components/layout/main';
import PropTypes from 'prop-types';

const articles = ({ article }) => (
  <Layout title={article.title}>
    <h1>{article.title}</h1>
    <p>{article.desc}</p>
    <p>Share</p>
    <p>Comments</p>
  </Layout>
);

articles.getInitialProps = async ({ query }) => {
  const article = {
    title: `Fetch ${query.slug}from api`,
    desc: 'Add article info here',
  };
  return { article };
};

articles.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default articles;
