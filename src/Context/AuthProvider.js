import { createContext, useState, useEffect } from "react";
import { auth } from "../Firebase/firebase";

export const authContext = createContext();

let AuthProvider = (props) => {
    let [user, setUser] = useState(null);
    let [loading, setLoading] = useState(true);

    useEffect(() => {
        let unsub = auth.onAuthStateChanged((nuser) => {  
            if(nuser){
                let {displayBane, email, uid, photoURL} = nuser;
                setUser({displayBane, email, uid, photoURL})
            }else{
                setUser(null);
            }

            setLoading(false);
        })
        return () => {unsub()};
    }, [])
    return <authContext.Provider value = {user}>
        {!loading && props.children}
    </authContext.Provider>;
}

export default AuthProvider;