/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import fetch from 'isomorphic-fetch';

const withLatestJobs = Page => {
  const WithLatestJobs = props => <Page {...props} />;

  WithLatestJobs.getInitialProps = async context => {
    const { req } = context;
    const baseURL = req ? `${req.protocol}://${req.get('Host')}` : '';
    const res = await fetch(`${baseURL}/api/jobs/latest-jobs`);
    const latestJobs = await res.json();
    return {
      ...(Page.getInitialProps ? await Page.getInitialProps(context) : {}),
      latestJobs,
    };
  };
  return WithLatestJobs;
};

export default withLatestJobs;
