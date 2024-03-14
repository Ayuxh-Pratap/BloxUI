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
            <p className='primary mb-4 text-center text-gray-800'>CTO at IndiBus</p>
            <p className='text-black/75 mb-6 text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus facere quasi expedita quam sunt a dolore cupiditate eveniet laudantium modi.</p>
            <div className='flex gap-4 w-min center mx-auto'>
                <a href="/" className='text-2xl duration-300 transition-all hover:text-black text-slate-600'><svg className="w-6 h-6 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M22 5.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.343 8.343 0 0 1-2.605.981A4.13 4.13 0 0 0 15.85 4a4.068 4.068 0 0 0-4.1 4.038c0 .31.035.618.105.919A11.705 11.705 0 0 1 3.4 4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 6.1 13.635a4.192 4.192 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 2 18.184 11.732 11.732 0 0 0 8.291 20 11.502 11.502 0 0 0 19.964 8.5c0-.177 0-.349-.012-.523A8.143 8.143 0 0 0 22 5.892Z" clip-rule="evenodd" />
                </svg>
                </a>
                <a href="/" className=' text-2xl duration-300 transition-all hover:text-black text-slate-600'><svg className="w-6 h-6 text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path fill-rule="evenodd" d="M12.51 8.796v1.697a3.738 3.738 0 0 1 3.288-1.684c3.455 0 4.202 2.16 4.202 4.97V19.5h-3.2v-5.072c0-1.21-.244-2.766-2.128-2.766-1.827 0-2.139 1.317-2.139 2.676V19.5h-3.19V8.796h3.168ZM7.2 6.106a1.61 1.61 0 0 1-.988 1.483 1.595 1.595 0 0 1-1.743-.348A1.607 1.607 0 0 1 5.6 4.5a1.601 1.601 0 0 1 1.6 1.606Z" clip-rule="evenodd" />
                    <path d="M7.2 8.809H4V19.5h3.2V8.809Z" />
                </svg>
                </a>
            </div>
        </div>
    )
}