import { createContext, useEffect, useState } from 'react'
import { getUserInfo } from '../services/UserService'
import { getAccessToken } from '../Store/AccessTokenStore'

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    

    const getUser = () => {
        return getUserInfo().then(response => setUser(response))
    }

    useEffect(() => {
        if ( getAccessToken ) {
        getUser()
        }
    },[])

    const image = () => {
        return user.image
    }

    const value = {
        getUser,
        user,
        setUser,
        image
    }

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
