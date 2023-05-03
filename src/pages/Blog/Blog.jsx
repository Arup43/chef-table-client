import "./Blog.css";

const Blog = () => {
  return (
    <div className="blogs mb-5 container">
      <div className="blog">
        <h3>
          Question 1: Tell us the differences between uncontrolled and
          controlled components.
        </h3>
        <p>
          Answer: In React, a controlled component is a component that is
          controlled by React state, while an uncontrolled component is a
          component that maintains its own internal state. A controlled
          component receives its current value and an update callback via props,
          and the parent component manages the state of the component. When the
          user interacts with the component, the parent component updates the
          state, which in turn updates the component&apos;s value. An uncontrolled
          component, maintains its own internal state, and when the user
          interacts with the component, it updates its own state, which in turn
          updates the component&apos;s value.
        </p>
      </div>
      <div className="blog">
        <h3>Question 2: How to validate React props using PropTypes</h3>
        <p>Answer: React PropTypes is a built-in feature that allows developers to specify the data type and shape of the props that a component receives. First, you need to import the PropTypes module from the prop-types package. Define your component and specify the propTypes property as an object containing the type and shape of the expected props. If a prop of the wrong type is passed to the component, React will log a warning in the console. </p>
      </div>
      <div className="blog">
        <h3>
          Question 3: Tell us the difference between nodejs and express js.
        </h3>
        <p>
          Answer: Nodejs is a JavaScript runtime and express js is a framework of nodejs.
          Node.js provides a low-level API for handling network requests and I/O operations, whereas Express.js provides a higher-level, more structured framework for building web applications. Node.js is used to build various types of applications, including web applications, APIs, command-line tools, and desktop applications, while Express.js is mainly used for building web applications and APIs. Express.js provides a number of built-in features and middleware, such as session management, error handling, and request parsing, that simplify the development of web applications. Node.js provides only basic routing capabilities, while Express.js provides more advanced routing and middleware capabilities, which makes it easier to handle complex HTTP requests and responses.
        </p>
      </div>
      <div className="blog">
        <h3>
          Question 4: What is a custom hook, and why will you create a custom
          hook?
        </h3>
        <p>
          Answer: A custom hook is a JavaScript reusable function whose name
          starts with &ldquo;use&rdquo; and that may call other built-in hooks
          like useState, useEffect etc. There are many advantages of using
          custom hooks in react: reusability, readability, testability etc. It
          is used to add special and unique feature to a react app. By using
          custom hook, developers get more flexibility.
        </p>
      </div>
    </div>
  );
};

export default Blog;
