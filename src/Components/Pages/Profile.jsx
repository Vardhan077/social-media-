import { useEffect, useState, useContext } from "react"
import { auth } from "../firebase/firebase"


import avatar from '../../assets/images/avatar.png'
import { AuthContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";


const Profile = () => {
    const [profilePic, setProfilePic] = useState("")
    const { user, userData } = useContext(AuthContext);

    useEffect(() => {
        setProfilePic(!(auth?.currentUser?.photoURL) ? avatar : (auth?.currentUser?.photoURL));

    }, [])

    console.log(auth?.currentUser?.email);

    return (
        <div className="p-5">
            <Link to ='/'><IoMdArrowRoundBack className="text-2xl"/></Link>

            <div className="flex flex-col justify-center items-center min-h-screen">
                <img src={`${profilePic}`} className="h-80" />
                <h1 className="m-4 text-4xl font-bold">{`${auth?.currentUser?.email.split('@')[0].toUpperCase()}`}</h1>
                <p className="mt-4 text-xl">{`${auth?.currentUser?.email}`}</p>
            </div>
        </div>
    )
}

export default Profile