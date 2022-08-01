# About this Project

This project was bootstrapped with create react app using the typescript template. It was built as part of the front end assessment for the cinsend senior react developer position. 

## Getting Started

1. Clone this repo and run `npm install`
3. Use `npm start` to run the application locally
3. Use `npm run build` to create a production ready build

### Problem and Solution + Architectural Decisions

The spec for this assessment is as follows:

- A home page that links to three tables: “Characters”, “Starships”, and “Planets”
- Each item in each table should include high-level data about that entity (name, etc.)
- Each table uses pagination with previous and next buttons
- React router: clicking any row will bring you to a details page with more information on that entity — refreshing the page should keep you on that details page
- Display the name of each film each entity belongs to in the entity details page
- Add breadcrumb functionality for each table and details page, for example “Home → Characters → Luke Skywalker”

The goal was to provide a solution that is reasonably scalable depending on the provided spec. Any state that needs to be shared was managed by a library called zustand. Zustand is a lightweight library that utliizes the power of hooks. Zustand is responsible to managing all client side state. Server side data is being fetched by axios + react-query (now known as tanstack query). React Query provides a sophisticated caching system plus refetching of stale data. It exposes that data as well as the status of it from a hook that can be consumed anywhere. The combination of react-query and zustand largely replaces a more robust toolkit like Redux for smaller projects. Zustand still utilizes the flux pattern, but the implementation leads to a much better developer experience. A caching system is available throughout the application in order to improve performance. I use a combination of loading animations and skeleton loaders to improve the user experience when they're trying to access data that hasn't been cached. 

### Trade Offs / Hindsight

The Details page currently does not handle an error from a bad url. When you navigate to it through the natural flow it fetches the data as expected. However if you manually visit a path like `/planets/4413` the api call will return a 404. Given more time I'd simply check the status of the fetch and display the appropriate error. 

Additionally there are currenly no tests provided for the application. A simple testing suite that covers important functionality is something I would have liked to include. 

Finally there are some instances of nested maps and other expensive computations that I would have liked to have optimized or memoized. Given the nature of the data fetching being paginated, the O(n²) complexity isn't too big of a deal since it'll be at most the number of columns * 10. 

### Other Notes

The starwars icons used were courtesy of Sherzod Mirzaakhmedov from dribbble. Check it out [here](https://dribbble.com/shots/3907212-Starwars-Icon-Set)