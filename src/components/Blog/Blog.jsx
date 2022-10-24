import React from "react";

const Blog = () => {
  return (
    <div className="container">
      <h2>4.1 What is cors?</h2>
      <p>
        CORS is a node.js package for providing a Connect/Express middleware
        that can be used to enable CORS with various options.
      </p>
      <hr />
      <h2>
        4.2 Why are you using firebase? What other options do you have to
        implement authentication?
      </h2>
      <p>
        I am using firebase for authentication.
        <br />
        Other options for implement authentication: Keycloak,Okta,Auth0,Amazon
        Cognito.
      </p>
    </div>
  );
};

export default Blog;
