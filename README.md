# Two type of Export/ Import

1- default Export/ Import:-
    export default Component
    import Component from 'path'

2- named Export/ Import:-
    export const Component
    inport {Component} from 'path'



# React Hooks
 (Normal Js utility function )
 useState() - superpowerful hook in react variable
 useEffect() - mostly using for api call


 # Routing - Two type of routing in web app
 1- Client side routing
 2- server side routing
 


 # Life Cycle render process
 - Parent Constructor
 - parent renderer
    - first child Constructor
    - first child renderer

    - Second child constructor
    - Second child renderer

    - <DOM update in Single Batch
    - First child componentDidMount
    - Secound child componentDidMount
- parent componentDidMount



# ----- Mouting ---------
- Contructor
- renderer ( render with dummay data)
- Component Did Mount 
    - Api call
    - this.state ( update) - state variable is updated

# ------- Updating ------------
- renderer (Api data)
- <HTML with new data>
- component Did Update

- component will unmount 



# Higher Order Component




# Redux toolkit 
- Call event - dispatch (action) => call function (reducer) => Manage state => subscribe action/ update ( selector)

- Install npm install @reduxjs/toolkit  and  npm install react-redux
- Build our store
- connect our store to our app
- slice (card slice)
- dispatch (action)
- selector




# Testing type ( Developer)
- npm install --save-dev @testing-library/react
- unit test - when we test small unit of code 
- Integration testing - multiple component testing
- end to end testing (e2e) - whole app flow 
