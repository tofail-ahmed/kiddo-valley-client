import React from 'react';
import DynamicTitle from '../../DynamicTitle/DynamicTitle';

const Blog = () => {
      const pageTitle='Kiddo_Valley-Blog'
      return (
            <div>
                   <DynamicTitle title={pageTitle} />

                  <div className='my-8'>
                        <h2 className='text-4xl font-bold'>
                              Qs:What is an access token and refresh token? How do they work and where should we store them on the client-side?
                        </h2>
                        <h2 className='text-xl font-bold'>
                              Ans:An access token is a credential that is used to authenticate and authorize a client to access protected resources in a system. It is typically short-lived and contains information about the client's permissions and identity.

                              A refresh token is a credential that is used to obtain a new access token when the current access token expires. It is usually long-lived and securely stored on the client-side.

                              Access tokens are sent with each request to access protected resources, while refresh tokens are used to obtain new access tokens without requiring the user to reauthenticate.

                              On the client-side, access tokens are typically stored in memory or local storage for easy access during API calls. However, they should be handled with care to prevent unauthorized access. Refresh tokens should be stored in a secure manner, such as an HTTP-only cookie or a secure storage mechanism provided by the platform or framework being used.
                        </h2>
                  </div>
                  <div className='my-8'>
                        <h2 className='text-4xl font-bold'>
                              Qs:Compare SQL and NoSQL databases?
                        </h2>
                        <h2 className='text-xl font-bold'>
                              Ans:SQL Databases:

                              1.Use structured schemas and tables to store data in a tabular format.
                              2.Have predefined schemas that enforce data integrity and consistency.
                              3.Use a fixed schema, meaning the structure of the data is defined before data insertion.
                              4.Support powerful querying capabilities using SQL.
                              5.Examples: MySQL, PostgreSQL, Oracle, SQL Server.



                              SQL (Structured Query Language) databases and NoSQL (Not Only SQL) databases are two different types of database management systems with distinct characteristics:

                              SQL Databases:

                              Use structured schemas and tables to store data in a tabular format.
                              Have predefined schemas that enforce data integrity and consistency.
                              Use a fixed schema, meaning the structure of the data is defined before data insertion.
                              Support powerful querying capabilities using SQL.
                              Offer strong ACID (Atomicity, Consistency, Isolation, Durability) properties, ensuring data integrity.
                              Suitable for complex, transactional applications with structured data.
                              Examples: MySQL, PostgreSQL, Oracle, SQL Server.



                              NoSQL Databases:

                              1.Use flexible, schema-less data models to store data in various formats (e.g., key-value, document, columnar, graph).
                              2.Allow for dynamic schema changes, making it easier to handle evolving data structures.
                              3.Offer horizontal scalability, allowing for easy distribution of data across multiple servers.
                              4.Examples: MongoDB, Cassandra, Redis, Couchbase.
                        </h2>
                  </div>
                  <div className='my-8'>
                        <h2 className='text-4xl font-bold'>
                              Qs:What is express js? What is Nest JS ?
                        </h2>
                        <h2 className='text-xl font-bold'>
                              Ans:Express.js is a popular and lightweight web application framework for Node.js. It provides a robust set of features and utilities for building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware, and implementing various functionalities in a Node.js application. It follows a minimalist approach, allowing developers to have more control over the application's architecture and components. Express.js is widely adopted in the Node.js ecosystem and is known for its simplicity and flexibility.

                              NestJS is a progressive, TypeScript-based web application framework built on top of Node.js. It is designed to provide a scalable and efficient architecture for building server-side applications. NestJS combines the best features of various frameworks and languages, including Express.js, TypeScript, and Angular. It utilizes decorators, dependency injection, and modules to structure the application and promotes the use of SOLID principles. NestJS offers out-of-the-box support for features like routing, middleware, database integration, authentication, and more. It aims to improve developer productivity and maintainability while providing high performance and scalability. NestJS is often used in enterprise-level applications and is gaining popularity in the Node.js community.
                        </h2>
                  </div>
                  <div className='my-8'>
                        <h2 className='text-4xl font-bold'>
                              Qs:What is MongoDB aggregate and how does it work?
                        </h2>
                        <h2 className='text-xl font-bold'>
                              Ans:
                              The aggregate method in MongoDB allows you to perform advanced data processing and analysis by applying a series of operations, called pipeline stages, to the documents in a collection. Each stage performs a specific transformation or aggregation on the data, such as filtering, grouping, sorting, projecting, joining, and more. The pipeline stages are applied sequentially, allowing you to reshape and analyze the data in a flexible and powerful way.
                        </h2>
                  </div>
            </div>
      );
};

export default Blog;