module.exports = {
  apps : [
    {
      name      : 'EC2 Demo App',
      script    : 'index.js',
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production : {}
    }
  ],

  deploy : {
    production : {
      user : 'ubuntu',
      host : 'ec2-52-91-181-50.compute-1.amazonaws.com',
      ref  : 'origin/master',
      'pre-setup': 'ssh-add ~/.ssh/id_rsa',
      key  : '/Users/gavinlue/.ssh/TestServerKey2.pem',
      repo : 'git@github.com:gavlu/ec2_demo.git',
      path : '/home/ubuntu/test_app',
      'post-deploy' : 'npm install && pm2 startOrRestart ecosystem.json --env production'
    }
  }
}