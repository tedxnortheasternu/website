import {useEffect, useState} from 'react';
import person from "../../images/kaamil_thobani.jpg"
import Image from 'next/image';
import tedx from "../../images/tedxnortheasternu.png"
import NavBar from 'components/global/Navbar/NavbarLayout';


export default function AboutPage() {
    const [width, setWidth] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      {/* Top Section */}
      <div className="flex-1 flex p-4">
        <div className="w-1/2">
          {/* Image */}
          <Image
                src={tedx}
                alt="Logo"
                width={width < 1024 ? "150" : "250"}                   
                height={width < 1024 ? "45" : "74"}
                className="h-64 w-full object-cover" 
            />
        </div>
        <div className="w-1/2 p-4">
          {/* Text Section */}
          <h1 className="text-2xl font-bold">Welcome to Our Company</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac posuere urna.</p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="flex-1 flex p-4">
        <div className="w-1/2 p-4">
          {/* Big Quote */}
          <blockquote className="text-2xl italic">
            "Our mission is to provide exceptional services and products to our clients."
          </blockquote>
        </div>
        <div className="w-1/2 p-4">
          {/* Text Section */}
          <h2 className="text-xl font-semibold">Our Values</h2>
          <p>We believe in transparency, quality, and customer satisfaction.</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex-1 flex p-4">
        <div className="w-1/2 p-4">
          {/* Text Section */}
          <h2 className="text-xl font-semibold">Our Team</h2>
          <p>Meet our dedicated and talented team.</p>
        </div>
        <div className="w-1/2 p-4">
          {/* Executive Team */}
          <div className="flex flex-col space-y-2">
            <div>
             <Image
                src={person}
                alt="Logo"
                width={width < 1024 ? "150" : "250"}                   
                height={width < 1024 ? "45" : "74"}
                className="h-24 w-24 object-cover rounded-full"
                />
              <p className="font-semibold">John Doe</p>
              <p className="text-sm">CEO</p>
            </div>
            <div>
            <Image
                src={person}
                alt="Logo"
                width={width < 1024 ? "150" : "250"}                   
                height={width < 1024 ? "45" : "74"}
                className="h-24 w-24 object-cover rounded-full"
             />
              <p className="font-semibold">Jane Smith</p>
              <p className="text-sm">COO</p>
            </div>
            {/* Add more executives as needed */ }
          </div>
        </div>
      </div>
    </div>
 );
};
