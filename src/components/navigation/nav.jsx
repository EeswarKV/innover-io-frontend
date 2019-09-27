import React from 'react';
import Link from 'next/link';

const links = [
  { href: '/', label: 'Home' },
  { href: '/mission', label: 'Mission' },
  { href: '/community', label: 'Community' },
  { href: '/events', label: 'Events' },
  { href: '/jobs', label: 'Jobs' },
  { href: '/contact', label: 'Contact' },
].map(link => ({ key: `nav-link-${link.href}-${link.label}`, ...link }));

const Nav = () => (
  <nav className="navBar">
    <a className="company-title" href="/">
      innover.io
    </a>
    <ul>
      {links.map(({ key, href, label }) => (
        <li key={key}>
          <Link href={href}>
            <a href={href}>{label}</a>
          </Link>
        </li>
      ))}
    </ul>

    <style jsx>
      {`
        nav {
          display: flex;
          justify-content: space-between;
          background-color: grey;
        }

        ul {
          display: flex;
          list-style: none;
        }

        nav > ul {
          padding: 0px;
        }

        li {
          color: white;
          display: flex;
          padding: 10px 15px;
        }
        a {
          color: white;
          text-decoration: none;
          font-size: 16px;
        }

        .company-title {
          margin: 20px;
          font-size: 30px;
        }
      `}
    </style>
  </nav>
);

export default Nav;
