import { useEffect } from "react"
import { useTypedSelector } from "../hooks/useTypedSelector"
import { useDispatch } from "react-redux"

export const AuthPage = () => {
    const dispatch = useDispatch()
    const { users, error, loading } = useTypedSelector(state => state.user)

    useEffect(() => {
        dispatch({ type: "FETCH_USERS" })
    }, [])

    return (
        <div>
        {users.map(user => (
            <div>{ user.name }</div>
        ))
        }</div>
    )
}