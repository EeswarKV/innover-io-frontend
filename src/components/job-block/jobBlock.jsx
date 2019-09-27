import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const jobBlock = ({ jobs, title }) => (
  <>
    <h2>{title}</h2>
    <ul>
      {jobs.map(({ _id, href, label }) => (
        <li key={_id}>
          <Link href={href}>
            <a href={href}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>
  </>
);

jobBlock.propTypes = {
  title: PropTypes.string.isRequired,
  jobs: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default jobBlock;
