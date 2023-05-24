# Todo List

I took the approach of presentational vs. container components with this application. [Although Dan Abramov no longer thinks that we should take the concept so seriously](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0), I do like having all the mutation functions in one component.

It did lead to more prop-drilling than I like, however. Please see the alternative version using the Context API and useReducer for an alternative approach withouth prop-drilling.