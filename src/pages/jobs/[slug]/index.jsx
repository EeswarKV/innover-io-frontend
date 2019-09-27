import React from 'react';
import Layout from 'components/layout/main';
import PropTypes from 'prop-types';

const Jobs = ({ job }) => (
  <Layout title="Jobs">
    <h1>{job.title}</h1>
    <p>{job.desc}</p>
    <p>Apply</p>
  </Layout>
);

Jobs.getInitialProps = async ({ query }) => {
  // should really come from API
  const job = {
    title: `Fetch ${query.slug}from api`,
    desc: 'Add job info here',
  };
  return { job };
};

Jobs.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default Jobs;
