import ss from '../../assets/images/Screenshot 2024-07-31 230818.png'

import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
const About = () => (
    <div className="min-h-screen">
        <div className='m-5'>
        <Link to='/'><IoMdArrowRoundBack className="text-2xl" /></Link>

        </div>

        <div className='flex flex-col justify-center items-center m-12'>
            <img src={`${ss}`} className='h-60' />
            <p className="font-sans m-20">This app is a modern social platform that allows users to share their thoughts, images, and experiences with friends and followers. With seamless authentication via Google or email, users can easily sign in, post updates, and interact with the community. The app features a user-friendly interface with real-time updates, making it easy to stay connected and engaged. Whether you're posting a quick update or sharing a favorite image, this app offers a dynamic and interactive experience tailored for social connectivity.This app is a modern social platform that allows users to share their thoughts, images, and experiences with friends and followers. With seamless authentication via Google or email, users can easily sign in, post updates, and interact with the community. The app features a user-friendly interface with real-time updates, making it easy to stay connected and engaged. Whether you're posting a quick update or sharing a favorite image, this app offers a dynamic and interactive experience tailored for social connectivity.This app is a modern social platform that allows users to share their thoughts, images, and experiences with friends and followers. With seamless authentication via Google or email, users can easily sign in, post updates, and interact with the community. The app features a user-friendly interface with real-time updates, making it easy to stay connected and engaged. Whether you're posting a quick update or sharing a favorite image, this app offers a dynamic and interactive experience tailored for social connectivity.</p>

        </div>

    </div>
)

export default About