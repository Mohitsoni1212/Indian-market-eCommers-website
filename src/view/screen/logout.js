import { useEffect } from "react"

function Logout() {
    useEffect(()=>{
        localStorage.clear()
        window.location = '/'
    },[]);

    return (
        <></>
    )
}

export default Logout