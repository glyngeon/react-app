import { createContext, useContext } from "react"

const UserContext = createContext({
    loggedInUser: 'default'
})


export default UserContext;