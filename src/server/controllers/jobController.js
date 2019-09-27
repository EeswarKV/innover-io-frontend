const jobs = [
  {
    _id: '1',
    href: '/jobs/java-developer-brussels-telecom',
    label: 'Java Developer',
  },
  {
    _id: '2',
    href: '/jobs/functional-analyst-brussels-banking',
    label: 'Functional Analyst',
  },
];

exports.latestJobs = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(jobs);
};
