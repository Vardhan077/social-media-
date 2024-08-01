
import About from '../Pages/About'
import avatar from '../../assets/images/avatar.png'
import { AuthContext } from "../AppContext/AppContext";
import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react"
import { auth } from "../firebase/firebase"

import { AiOutlineInfoCircle } from "react-icons/ai";
import { BiSolidMehBlank } from "react-icons/bi";



const LeftSide = () => {

  const [profilePic, setProfilePic] = useState("")


  const { user, userData } = useContext(AuthContext);

  useEffect(() => {
    setProfilePic(!(auth?.currentUser?.photoURL) ? avatar : (auth?.currentUser?.photoURL));

  }, [])


  return (
    <div className=" m-5 mt-20 ">

      <div className='rounded-md border border-gray-500 ' >
        <Link to='/Profile'>
          <div className="flex justify-content items-center ml-4">
            <img src={`${profilePic}`} className="h-20" />
            <h3 className="ml-4 ">PROFILE</h3>
          </div>
        </Link>
      </div>
      

      <div className='mt-7 p-5 rounded-md border border-gray-500'>
        <Link to='/About'>
          <div className="flex justify-content items-center ml-4">
              <AiOutlineInfoCircle className='text-4xl'/>
              <h3 className="ml-10 ">ABOUT</h3>

          </div>
        </Link>
      </div>


      <div className='mt-7 p-5 rounded-md border border-gray-500'>
        <Link to='/Notifications'>
          <div className="flex justify-content items-center ml-4">
              <BiSolidMehBlank className='text-4xl'/>
              <h3 className="ml-9 ">NOTIFICATIONS</h3>

          </div>
        </Link>
      </div>
    </div>
  )

}


export default LeftSide