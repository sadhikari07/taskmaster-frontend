
## Task:
Today, we’ll write a lambda warmer for the lambdas we’ve already created.

## Feature task:
- Your Lambda to create thumbnail versions of images should never be cold. You should accomplish this in two ways:
- First, create a CloudWatch timer to help keep it alive. Take a screenshot of this for submission.

## Steps on setting up cloud warmer:
CloudWatch Timer:

- You’ll need to ping your Lambda function every 5–15 minutes to keep it warm. This is easier than you might expect.
- First, open up the AWS console and go to CloudWatch. From there, go to Events and click Create rule. 
- Set the event type to Schedule, and we’ll run this event every 1 minute.
- Then select the Lambda function you want to target from the Targets list and Save. you’ll then need to create a name and description.

//Reference: https://read.acloud.guru/how-to-keep-your-lambda-functions-warm-9d7e1aa6e2f0

## Link to the deployed application:
- API: http://taskmaster-dev-cname.us-east-2.elasticbeanstalk.com/tasks
- Deployed Front-end:http://taskmasterfrontend.s3-website-us-east-1.amazonaws.com/ 

## Screenshot of LambdaWaremer:
![LambdaWarmer](https://raw.githubusercontent.com/sadhikari07/taskmaster-frontend/master/assets/Screen%20Shot%202019-07-12%20at%2011.07.45%20AM.png)

## Screenshot of metrics after lambda warmer is activated:
![LambdaWarmer](https://raw.githubusercontent.com/sadhikari07/taskmaster-frontend/master/assets/Screen%20Shot%202019-07-12%20at%2011.08.02%20AM.png)

## Screenshot of lambdawarmer invoking lambda function at different times:
![LambdaWarmer](https://raw.githubusercontent.com/sadhikari07/taskmaster-frontend/master/assets/Screen%20Shot%202019-07-12%20at%2011.08.06%20AM.png)
