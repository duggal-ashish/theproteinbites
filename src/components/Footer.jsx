import { NavLink } from 'react-router-dom'
import logo from '../assets/logo2.png';
import fb from '../assets/facebook-f-brands-solid-full.svg';
import insta from '../assets/instagram-brands-solid-full.svg';
import linkedin from '../assets/linkedin-in-brands-solid-full.svg';
import x from '../assets/x-twitter-brands-solid-full.svg';
function Footer() {
  return (
    <footer className="!m-0 bg-gradient-to-br from-[#fffbe6] via-[#eafff1] to-[#7FB45A]/20 text-black-500 mt-20 py-6 md:flex md:flex-col md:items-center md:">
        <div className="grid grid-col-1 border-b-1 pb-2 mb-2 md:w-[90%] md:grid-cols-3 lg:grid-cols-3 gap-4 px-6  md:place-items-center md:items-baseline md:text-xl">
            <div>
                <NavLink to="/" className="flex items-center space-x-2">
                          <img src={logo} alt="The Protein Bite" className="w-12 h-12" />
                          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                            The Protein Bite
                          </h1>
                        </NavLink>
                <div className="">
                    {/* contact us */}
                    <h2 className="text-xl font-bold text-shadow-black pt-3 md:text-xl">Contact Us</h2>
                    <p className='text-base'>Email: <NavLink to="mailto: privacy@theproteinbites.com" className="hover:text-blue-500 underline font-semibold text-base">privacy@theproteinbites.com</NavLink></p>
                    <p className='text-base'>Phone: <NavLink to="tel:+91 9208432221" className="text-black font-semibold text-base">+91 9208432221</NavLink></p>
                    <p className='text-base'>Website: <NavLink to ="/" className="hover:text-blue-500 underline font-semibold text-base" >www.theproteinbites.com</NavLink></p>
                    {/* address  */}
                    <h2 className="text-xl font-bold text-shadow-black pt-3 md:text-xl">Address</h2>
                    <p className='text-base'>Villa Number- 7, Sanskriti Garden, Phase-2, Roza Jalalpur, Greater Noida, Bisrakh Gautam Buddha Nagar, Uttar Pradesh, 201009</p>
                </div>
            </div>
            <div>
                {/* Legal  */}
                <h2 className="text-xl font-bold text-shadow-black md:text-xl">Legal</h2>
                
                <ul>
                <li className="px-1 text-base"><NavLink to="/">Privacy Policy</NavLink></li>
                <li className="px-1 text-base"><NavLink to="/">Terms of Service</NavLink></li>
                </ul>
            </div>
            <div>
                {/* About us  */}
                <h2 className="text-1x font-bold text-shadow-black md:text-1x">About Us</h2>
                
                <ul className="flex justify-evenly text-xl  flex-col space-x-4 ">
                <li className="px-1 text-base"><NavLink to="/">Home</NavLink></li>
                <li className="px-1 text-base"><NavLink to="/">Job Search</NavLink></li>
                <li className="px-1 text-base"><NavLink to="/">About</NavLink></li>
                </ul>
            </div>
        </div>
      
      
      <div >
        <p className="px-5 md:text-xl">© 2025 The Protein Bar. All Rights Reserved</p>
        <div className="flex justify-center items-center gap-4 mt-2">
            <a href="https://www.facebook.com/" className="w-[8%] md:w-[7%]"><img src={fb}/></a>
            <a href="https://www.instagram.com/" className="w-[8%] md:w-[8%]"><img src={insta} /></a>
            <a href="https://www.linkedin.com/" className="w-[8%] md:w-[8%]"><img src={linkedin} /></a>
            <a href="https://x.com/" className="w-[8%] md:w-[8%]"><img src={x} /></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;