import React from 'react';
import Layout from 'components/layout/main';
import Link from 'next/link';
import PropTypes from 'prop-types';

const EventsPage = ({ articles }) => (
  <Layout title="Events">
    <h1>Events</h1>
    <p>Both internal as exernal events that we like and be there.</p>
    <p>Become publisher</p>
    <p>Tag cloud here</p>
    <div>
      <h2>Future Events</h2>
      <ul>
        {articles.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a href={href}>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h2>Past events</h2>
    </div>
  </Layout>
);

EventsPage.getInitialProps = async () => {
  // should really come from API
  const articlesList = [
    {
      href: '/articles/react-vs-vue-vs-angular',
      label: 'Comparing react, vue and Angular',
    },
    {
      href: '/articles/pwa-join-the-revolution',
      label: 'Why use PWA?',
    },
  ].map(link => ({ key: `nav-link-${link.href}-${link.label}`, ...link }));

  return { articles: articlesList };
};

EventsPage.propTypes = {
  articles: PropTypes.shape([]).isRequired,
};

export default EventsPage;
