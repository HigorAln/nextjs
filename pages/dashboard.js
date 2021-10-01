import useAuth from "../hooks/useAuth"

export default function Dashboard(){
    const {user} = useAuth();
    console.log(user)
    return(
        <div>
            <h1>Dash: {`user: ${user.displayName}`}</h1>
        </div>
    )
}