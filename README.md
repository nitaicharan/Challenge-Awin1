# Angular Senior Test

This angular application implements pooling from a rest end point in order to feed an angular material progress bar.

## Objective

The objective of this test is to make the progress bar work by implementing the pooling inside the existent method in FetchService.


## Instructions

- Run the node service `node rest-service.js` - this exposes the end-point `http://localhost:3000/fetch` which returns the current progress.
- Complete the method in FetchService to pull from the fetch end-point every 500ms untill the fetch end-point returns 100
- Currently the template has a hardcoded value for the progress bar, pls make the necessary changes to the main.component.html to make the progress bar work.

