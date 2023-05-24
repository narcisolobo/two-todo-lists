# Todo List - Two Approaches

## Todo List
I took the approach of presentational vs. container components with this application. [Although Dan Abramov no longer thinks that we should take the concept so seriously](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), I do like having all the mutation functions in one component.

It did lead to more prop-drilling than I like, however. Please see the alternative version using the Context API and `useReducer` for an alternative approach withouth prop-drilling.

## Todo List with Context
`useEffect` and `useState` are the most important hooks to learn in React. After those two big ones, students should learn the Context API and `useReducer`.

This simple todo list application shows how `useReducer` and the Context API work nicely together to manage global state. The difference is not insignificant. With this approach, two major benefits arise. Aside from the absence of prop-drilling, students must also be adept at writing pure functions. The "TOGGLE_TODO" action in the reducer would not work otherwise.