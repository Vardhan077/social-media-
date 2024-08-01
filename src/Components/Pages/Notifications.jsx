
import { Link } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import { BiSolidMehBlank } from "react-icons/bi";

const Notifications = () => (
    <div className="min-h-screen flex-col justify-center items-center">
        <div className='m-5'>
        <Link to='/'><IoMdArrowRoundBack className="text-2xl" /></Link>

        </div>

        <div className='flex flex-col justify-center items-center m-12'>
            <BiSolidMehBlank className="text-8xl" />
            <h1 className="text-xl">Nothing to Show!!</h1>
        </div>

    </div>
)

export default Notifications