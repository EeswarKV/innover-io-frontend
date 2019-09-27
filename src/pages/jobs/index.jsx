import React from 'react';
import Layout from 'components/layout/main';
import PropTypes from 'prop-types';
import flowRight from 'lodash.flowright';
import withLatestJobs from 'hoc/withLatestJobs';
import JobBlock from 'components/job-block/jobBlock';

const JobsPage = ({ latestJobs }) => (
  <Layout title="Jobs">
    <h1>Jobs</h1>
    <p>Why work with us</p>
    <div>
      <h2>As a freelancer</h2>
      <ul>
        <li>Work on challenging and innovative projects</li>
        <li>Be part of the innover.io community and expand your skills</li>
        <li>We can help you optimize your revenue due our extensive experience with IP</li>
        <li>Access to courses and training</li>
      </ul>
      <button type="submit">Find your dream project now!</button>
    </div>
    <div>
      <h2>As an employee</h2>
      <ul>
        <li>Work on challenging and innovative projects</li>
        <li>Be part of the innover.io community and expand your skills</li>
        <li>You&apos;ll share in the profits of the company through innovative IP clause</li>
        <li>Access to courses and training</li>
      </ul>
      <button type="submit">Find your dream job now!</button>
    </div>
    <div>
      <h2>As an employer</h2>
      <ul>
        <li>We can assist you in your search for top talent</li>
        <li>Post your job and reach X visitors per month</li>
        <li>We can also actively search for you</li>
      </ul>
      <button type="submit">Post your job now!</button>
    </div>
    <div>
      <h2>Search for a job</h2>
      <ul>
        <li>By keyword</li>
        <li>Regio/City/distance</li>
        <li>Employee/Freelance/Internship</li>
        <li>List/Map view</li>
        <li>Save your search and convert it to an alert</li>
      </ul>
      <button type="submit">Search</button>
      <button type="submit">Save this search and receive job alerts</button>
    </div>
    <div>
      <JobBlock title="Latest Jobs" jobs={latestJobs} />
    </div>
  </Layout>
);

JobsPage.propTypes = {
  latestJobs: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default flowRight([withLatestJobs])(JobsPage);
