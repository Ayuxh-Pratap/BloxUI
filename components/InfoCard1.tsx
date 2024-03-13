import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import React from 'react'
import Image from "next/image";

export default function InfoCard() {
    return (
        <div className='"sm:w-86 w-80 bg-white border hover:shadow-xl duration-300 transition-all p-7 rounded-lg'>
            <div className="mx-auto w-[5rem] h-[5rem] relative mb-4">
            <Image
					alt=""
					fill
					src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
					className="object-cover object-center rounded-full"
				/>
            </div>
            <h2 className='text-2xl font-semibold text-black text-center'>Ganesh Pr Singh</h2>
            <p className='primary mb-4 text-center text-black/65'>CTO at IndiBus</p>
            <p className='text-black/75 mb-6 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus facere quasi expedita quam sunt a dolore cupiditate eveniet laudantium modi.</p>
            <div className='flex gap-4 w-min center mx-auto'>
                <a href="/" className='text-2xl duration-300 transition-all hover:text-black text-slate-600'><FaTwitter /></a>
                <a href="/" className=' text-2xl duration-300 transition-all hover:text-black text-slate-600'><FaLinkedin /></a>
            </div>
        </div>
    )
}