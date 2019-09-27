import React from 'react';
import Layout from 'components/layout/main';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Index = ({ articles }) => (
  <Layout title="articles">
    <h1>Articles</h1>
    <p>Why join the innover.io community</p>
    <div>
      <h2>Become publisher and gain reconnaissance as expert</h2>
      <ul>
        <li>
          Gain reconnaissance within your niche and get the most interesting and innovative projects
        </li>
        <li>
          We will promote your content on social networks so you can reach thousands of experts
          worldwide
        </li>
      </ul>
      <button type="submit">Post your first article now!</button>
    </div>
    <div>
      <h2>Tag cloud here</h2>
      <ul>
        <li>Frontend Development</li>
        <li>React</li>
        <li>PWA</li>
      </ul>
    </div>
    <p>List latest articles here</p>
    <ul>
      {articles.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a href={href}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </Layout>
);

Index.getInitialProps = async () => {
  // should really come from API
  const articlesList = [
    {
      href: '/community/react-vs-vue-vs-angular',
      label: 'Comparing react, vue and Angular',
    },
    {
      href: '/community/pwa-join-the-revolution',
      label: 'Why use PWA?',
    },
  ].map(link => ({ key: `nav-link-${link.href}-${link.label}`, ...link }));

  return { articles: articlesList };
};

Index.propTypes = {
  articles: PropTypes.shape([]).isRequired,
};

export default Index;
