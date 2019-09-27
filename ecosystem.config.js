module.exports = {
  apps: [
    {
      name: 'innoverio-website', // App name that shows in `pm2 ls`
      exec_mode: 'cluster_mode', // enables clustering
      instances: '2', // or an integer
      script: '/usr/local/bin/yarn',
      args: 'start -p 3002',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      env: {
        NODE_ENV: 'production',
        HOST: '127.0.0.1',
        PORT: 3002,
      },
    },
  ],
};
