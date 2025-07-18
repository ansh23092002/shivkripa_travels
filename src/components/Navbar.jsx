'use caent'

const Navbar = () => {
  return (
    <div className=' absolute z-10 w-full px-2 border-2 border-white text-black  flex justify-between items-center rounded-2xl'>
    
        <h1 className="font-Title font-bold text-black">shiv kripa</h1>
     
        <ul className="flex gap-5 m-4 ">
            <a href="#" className="hover:bg-zinc-900 ">Services</a>
            <a href="#" className="hover:bg-zinc-900 ">About</a>
            <a href="#" className="hover:bg-zinc-900 ">Contect</a>
        </ul>
    
    </div>
  )
}

export default Navbar
