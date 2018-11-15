## Info

- [Getting to Know and Love AWS Elastic Beanstalk Configuration Files ](https://medium.com/@marilu597/getting-to-know-and-love-aws-elastic-beanstalk-configuration-files-ebextensions-9a4502a26e3c)


## Command

```bash
# mongodb
export MONGODB_URI="mongodb://prefTest:W51uRQkkkkwLtD2g@cluster0-shard-00-00-1j8k4.mongodb.net:27017,cluster0-shard-00-01-1j8k4.mongodb.net:27017,cluster0-shard-00-02-1j8k4.mongodb.net:27017/prefTest?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

# Prepare
export AWS_PROFILE=default

# create 
jack create test-web-develop
jack create test-web-staging

# deploy
jack deploy test-web-staging

```