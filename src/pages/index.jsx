import React from 'react';
import Layout from 'components/layout/main';

const HomePage = () => (
  <Layout title="Welcome">
    <h1>Hello, we are innover.io</h1>
    <p>We help to grow and outperform organizations</p>
    <p>
      We build applications that generate revenue using the latest in web and data technologies. Our
      approach is different than most, because we take the time to learn your business
      inside-and-out before we make a single technology choice.
    </p>
    <div>
      <h2>Join the innover.io community</h2>
      <p>Stay up to date</p>
      <ul>
        <li>Master your skills in development, online marketing and project management</li>
        <li>Share your knowledge with other community members</li>
        <li>Work together on innovative ideas and projects</li>
        <li />
      </ul>
      <button type="submit">Join the community now</button>
    </div>
    <div>
      <h2>Looking for a new opportunity?</h2>
      <ul>
        <li>Are you a freelancer?</li>
        <li>Are you an employee?</li>
      </ul>
    </div>
    <div>
      <h2>Services</h2>
      <div>
        <h3>Top Talent Recruitment</h3>
        <p>
          Leverage the innover.io network to acquire Top Talent and grow faster than ever before.
          You know what you are doing and need additional resources to drastically reduce your
          time-to-market.
        </p>
        <button type="submit">Power your team now</button>
      </div>
      <div>
        <h3>Product & Service Enhancement</h3>
        <p>
          innover.io enhances your product or services using short iterations so you can give
          immediate feedback and quickly see the this feedback integrated within your product.
        </p>
        <button type="submit">Tell us what&apos;s troubling you</button>
      </div>
      <div>
        <h3>Innovation Lab</h3>
        <p>
          innover.io can help you in tapping in onto revenue growth strategies that put you in front
          of your competition. Develop your idea together with our team of cross-functional experts.
        </p>
        <button type="submit">Pitch your idea now</button>
      </div>
    </div>
    <div>
      <h2>Latest community contibutions</h2>
      <div>list new articles here</div>
    </div>
    <div>
      <h2>Future events</h2>
      <div>list new articles here</div>
    </div>
    <div>
      <h2>Subscribe for our weekly newsletter</h2>
      <div>list new articles here</div>
    </div>
  </Layout>
);

export default HomePage;
