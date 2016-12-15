module.exports = {
  apps : [
    {
      name      : "EC2 Demo App",
      script    : "index.js",
      env: {
        COMMON_VARIABLE: "true"
      },
      env_production : {}
    }
  ],

  deploy : {
    production : {
      user : "user",
      host : "ec2-52-91-181-50.compute-1.amazonaws.com",
      ref  : "origin/master",
      repo : "git@github.com:gavlu/ec2_demo.git",
      path : "/home/ubuntu/test_app",
      "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env production"
    }
  }
}