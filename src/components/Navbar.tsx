import { Button } from "./ui/button"
import 'remixicon/fonts/remixicon.css'
export const Navbar =()=>{

    return <div className="w-full h-20 flex justify-between items-center font-caleb text-green-400 bg-black pl-16 pr-16">
        <div className="text-3xl">@nsvoriginals</div>
        <div className="flex justify-center items-center gap-10 text-3xl ">
            <h3>Home</h3>
            <h3>About</h3>
            <h3>Contact</h3>
        </div>
        <div className=" ">
           
        <Button className="bg-green-400 text-black rounded-xl font-sans flex items-center justify-center gap-2"><h1>Resume</h1> <i className="ri-profile-line"></i></Button>
        </div>

    </div>
}