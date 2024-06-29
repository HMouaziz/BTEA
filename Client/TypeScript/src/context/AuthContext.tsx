import {createContext, ReactNode, useEffect, useMemo, useReducer} from "react";

type AuthProviderProps = {
    children: ReactNode;
}

export interface AuthContext {
    isAuthenticated: boolean
    login: () => Promise<void>
    logout: () => Promise<void>
    user: {}
}


export const AuthContext = createContext<AuthContext | null>(null)

const authReducer = (state: any, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case "setAuth":
            return {...state, isAuthenticated: action.payload}
        case "clearAuth":
            return {...state, isAuthenticated: false}
        default:
            console.error("Unhandled action type @ authReducer: ", action.type)
            return state
    }
}

const AuthProvider = ({ children }: AuthProviderProps) => {
    const [state, dispatch] = useReducer(authReducer, {isAuthed: false});

    const verifyAuth = async () => {
        try {
            const { isValid} = {isValid: false} //authService.verifyToken()
            dispatch({
                type: 'setAuth',
                payload: isValid,
            })
        } catch (error) {
            console.error("Unexpected error: ", error)
        }
    }

    const clearAuthenticated = async () => {
        dispatch({
            type: "clearAuth",
            payload: undefined
        });
    };

    const registerUser = async () => {
        return 0
    }

    const loginUser = async () => {
        return 0
    }

    const getUserData = async () => {
        return 0
    }

    const logoutUser = async () => {
        try {
            //authService.logoutUser()
            await clearAuthenticated()
        } catch (error) {
            console.error("Logout failed: ", error)
        }
    }

    useEffect(() => {
        verifyAuth()
    }, [])

    const contextValues = useMemo(
        () => ({
            ...state,
            verifyAuth,
            registerUser,
            loginUser,
            getUserData,
            logoutUser,
        }),
        [state],
    )

    return (
        <AuthContext.Provider value={contextValues}>{children}</AuthContext.Provider>
    )
}

export default AuthProvider;
