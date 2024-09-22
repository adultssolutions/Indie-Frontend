import logo from "../../assets/HorizontalLogo.png";
import visa from "../../assets/footerPayIcons/visa.png";
import mastercard from "../../assets/footerPayIcons/mastercard.png";
import discover from "../../assets/footerPayIcons/discover.png";
import applepay from "../../assets/footerPayIcons/applepay.png";
import {
  socialMediaLinks,
  footerInformation,
  footerDiscover,
} from "../../constants";
import { useNavigate } from "react-router";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <>
      <div className="overflow-hidden footer-top flex space-x-4 md:justify-evenly text-black bg-white p-8 pb-12 ">
        <div onClick={() => navigate("/")} className="w-1/2 md:w-48  pr-2">
          <img className="w-32 my-8" src={logo}></img>
          <div className="socialLogo grid grid-cols-4  md:flex md:flex-row justify-start gap-2 pl-1  py-4">
            {socialMediaLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="flex text-customBrown items-center justify-center md:justify-start size-8 text-xl md:text-2xl px-4 rounded-sm  transform transition-transform duration-300 ease-in-out hover:scale-125"
              >
                <i className={social.iconClass}></i>
              </a>
            ))}
          </div>
        </div>

        <div className="md:hidden w-1/2 pt-4">
          <h2
            className={`overflow-hidden text-right text-xl  font-bold py-5 text-customBrown`}
          >
            Quick Links
          </h2>
          <ul className="space-y-4 text-sm  font-bold text-right">
            {footerInformation.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex md:flex-col">
          <h2
            className={`md:text-2xl overflow-hidden text-xl  font-bold py-5 text-customBrown`}
          >
            Information
          </h2>
          <ul className="space-y-4 text-sm md:text-lg font-bold">
            {footerInformation.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden md:flex md:flex-col">
          <h2
            className={`md:text-2xl  overflow-hidden text-xl  font-bold py-5  text-customBrown`}
          >
            Discover
          </h2>
          <ul className="space-y-4 text-sm md:text-lg font-bold">
            {footerDiscover.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="hidden md:flex md:flex-col overflow-hidden w-64 space-y-4">
            <h2 className="text-xl pt-5 text-customBrown md:text-2xl font-bold">
              {" "}
              Official Info
            </h2>
            <p className="text-sm md:text-lg font-bold ">
              Sector D, Pocket-6, Vasant Kunj, New Delhi, India 110070
            </p>
            <p className="text-sm md:text-lg font-bold ">+91-9289605017</p>
            <p className="text-sm md:text-lg font-bold ">
              indiestori2021@gmail.com​
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom bg-customBlue w-full text-white flex justify-between items-center px-4 md:px-16 py-6">
        <h2 className="text-xs text-left w-1/3 sm:w-1/2  font-bold">
          © 2024 Indiestori Pvt Ltd. All rights reserved.
        </h2>
        <div className="space-x-2 flex items-center  sm:space-x-4 md:space-x-6 text-2xl">
          <p className="w-8">
            <img src={visa} alt="visa" className=" w-8"></img>
          </p>
          <p className="w-8">
            <img src={mastercard} alt="mastercard" className="w-8"></img>
          </p>
          <p className="w-8">
            <img src={discover} alt="discover" className="w-8"></img>
          </p>
          <p className="w-8">
            <img
              src={applepay}
              alt="applepay"
              className="bg-white object-cover h-5 w-8"
            ></img>
          </p>
        </div>
      </div>
    </>
  );
}

// import React from 'react';

// const Footer = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center flex-wrap md:p-2 lg:space-x-0 my-8">
//       <div className="p-2 w-full lg:w-1/2 lg:p-0">
//         <img
//           alt="Company name"
//           src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
//           className="w-full rounded-xl object-cover h-96 mx-auto md:max-w-sm lg:max-w-lg"
//         />
//         <p className="text-center">Making the world a better place through constructing elegant hierarchies.</p>
//         <div className="flex space-x-4 justify-center mt-4">
//           <a href="#" className="flex items-center text-blue-500">
//             <span>Facebook</span>
//             <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="ml-1 w-5 h-5">
//               <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
//             </svg>
//           </a>
//           <a href="#" className="flex items-center text-pink-500">
//             <span>Instagram</span>
//             <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="ml-1 w-5 h-5">
//               <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06..."></path>
//             </svg>
//           </a>
//           <a href="#" className="flex items-center text-gray-800">
//             <span>GitHub</span>
//             <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="ml-1 w-5 h-5">
//               <path fillRule="evenodd" d="M12 2C6..."></path>
//             </svg>
//           </a>
//           <a href="#" className="flex items-center text-red-600">
//             <span>YouTube</span>
//             <svg fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" className="ml-1 w-5 h-5">
//               <path fillRule="evenodd" d="M19..."></path>
//             </svg>
//           </a>
//         </div>
//       </div>

//       {/* Additional sections for Solutions, Support, Company, Legal */}
//       <div className="mt-8 md:mt-0 lg:w-full lg:flex lg:justify-between">
//         {/* Solutions Section */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Solutions</h3>
//           <ul role="list" className="space-y-2">
//             {['Marketing', 'Analytics', 'Commerce', 'Insights'].map((solution) => (
//               <li key={solution}>
//                 <a href="#" className="text-gray-600 hover:text-blue-500">{solution}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Support Section */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Support</h3>
//           <ul role="list" className="space-y-2">
//             {['Pricing', 'Documentation', 'Guides', 'API Status'].map((support) => (
//               <li key={support}>
//                 <a href="#" className="text-gray-600 hover:text-blue-500">{support}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Company Section */}
//         <div className="mb-4">
//           <h3 className="text-lg font-semibold">Company</h3>
//           <ul role="list" className="space-y-2">
//             {['About', 'Blog', 'Jobs', 'Press', 'Partners'].map((company) => (
//               <li key={company}>
//                 <a href="#" className="text-gray-600 hover:text-blue-500">{company}</a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Legal Section */}
//         <div className="">
//           <h3 className="text-lg font-semibold">Legal</h3>
//           <ul role="list" className="space-y-2">
//             {['Claim', 'Privacy', 'Terms'].map((legal) => (
//               <li key={legal}>
//                 <a href="#" className="text-gray-600 hover:text-blue-500">{legal}</a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Footer Copyright */}
//       <div className="mt-auto text-center p-y-[20px]">
//         <p>© 2020 Your Company, Inc. All rights reserved.</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;
