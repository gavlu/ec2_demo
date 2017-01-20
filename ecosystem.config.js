module.exports = {
  apps: [{
    name: 'server-tutorial',
    script: './index.js'
  }],
  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-54-208-36-38.compute-1.amazonaws.com',
      key: '~/.ssh/TestServerKey2.pem',
      ref: 'origin/master',
      repo: 'git@github.com:gavlu/ec2_demo.git',
      path: '/home/ubuntu/server',
      'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
    }
  }
}