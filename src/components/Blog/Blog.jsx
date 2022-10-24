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
      <hr />
      <h2>4.3 How does the private route work?</h2>
      <p>
        The react private route component renders child components ( children )
        if the user is logged in. If not logged in the user is redirected to the
        /login page with the return url passed in the location state property.
      </p>
      <hr />
      <h2>4.4 What is Node? How does Node work?</h2>
      <p>
        Node. js is a JavaScript runtime environment that achieves low latency
        and high throughput by taking a “non-blocking” approach to serving
        requests. <br />
        Node allows developers to write JavaScript code that runs directly in a
        computer process itself instead of in a browser. Node can, therefore, be
        used to write server-side applications with access to the operating
        system, file system, and everything else required to build
        fully-functional applications.
      </p>
    </div>
  );
};

export default Blog;
