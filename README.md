# Job Search App

This is a Bambu assignment for the full stack position. The assignment is to create
a job search application

## Getting Started

[The Deployed App](https://d1l0buvv1sm9ma.cloudfront.net/). The app is reponsive and can be viewed on mobile

or can start locally: 

```
npm i
npm run dev   
```

To run the test

```
npm test
```

## Motivation

When I received this assignment, to be honest I did contemplate on what is the best choice of technology should I use.
The web application seems pretty straight forward with just an API call to search the jobs. To further challenge myself, I want to build the app
in the most performant way. The technology that I used are those that would fit the philosophy. 
 
#### Why use next.js?

For a simple web application with minimal interaction and just a simple API call on the backend, for me the best way is to server-render the application. Server-rendered app will boost the
the initial load time since browser is not doing the the rendering on the browser.

#### Why use lambda@Edge?

[Edge-side rendering](https://youtu.be/MBndZddVQdw?t=811) has been on the rise lately. Lambda@Edge provides us with the architecture to deliver our web application
to the users using AWS Lambda together with Cloudfront. Cloudfront is a CDN which means that it will serve our users nearest to the edge location and simultaneously improve
the delivery speed to our users. 

## Further Reading 

[Lambda Edge](https://docs.aws.amazon.com/lambda/latest/dg/lambda-edge.html)

[Cloudfront](https://aws.amazon.com/cloudfront/)

[How Lambda@Edge works](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/lambda-edge-how-it-works-tutorial.html)

[Serverless Nextjs](https://github.com/danielcondemarin/serverless-next.js/tree/master/packages/serverless-nextjs-component)
