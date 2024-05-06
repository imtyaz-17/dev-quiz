import React from 'react';

const Blog = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 gap-4">
                <div className="shadow-lg rounded my-5 p-3">
                    <h2 className="text-xl font-bold text-center mb-2">React Router</h2>
                    <p>
                        React Router is a standard library for routing in React. It enables
                        the navigation among views of various components in a React
                        Application, allows changing the browser URL, and keeps the UI in sync
                        with the URL. With React Router, developers can define routes that map specific URLs to corresponding React components. This declarative approach simplifies the process of handling navigation logic, making it easier to organize and manage complex applications.
                    </p>
                </div>
                <div className="shadow-lg rounded my-5 p-3">
                    <h2 className="text-xl font-bold mb-2 text-center">Context API</h2>
                    <p>
                        The React Context API is a way for a React app to effectively produce
                        global variables that can be passed around. This is the alternative to
                        "prop drilling" or moving props from grandparent to child to parent,
                        and so on. Context is also touted as an easier, lighter approach to
                        state management using Redux. The Context API enables the creation of a centralized state container that can be accessed by any component within the React application. This global state can hold data, such as user authentication status, theme preferences, or language settings, that needs to be shared across multiple components.
                    </p>
                </div>
                <div className="shadow-lg rounded my-5 p-3">
                    <h2 className="text-xl text-center font-bold mb-2">useRef Hook</h2>
                    <p>
                        The useRef is a hook that allows to directly create a reference to the
                        DOM element in the functional component. The useRef returns a mutable
                        ref object. This object has a property called .current. The value is
                        persisted in the refContainer.current property. These values are
                        accessed from the current property of the returned object. The
                        .current property could be initialized to the passed argument
                        initialValue e.g. useRef(initialValue). The object can persist a value
                        for a full lifetime of the component.useRef returns a mutable ref object that persists across re-renders of the component. This ref object contains a .current property, which can be used to access the underlying DOM element or store arbitrary values.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
