"use client"
import React from 'react'
import { BsInstagram } from "react-icons/bs"
import { AiFillLinkedin } from "react-icons/ai"
import { TfiYoutube } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";
import Link from 'next/link'
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='footer bottom-0' id='footer'>

      <div className='h-[180px] flex items-center text-white justify-around footer-inner'>
        <div className='h-[80%] footer-logo flex items-center'>
        <Image src="/assets/images/logo.png" width={100} height={100} color='white'/>
        </div>
        <div className='flex flex-col footer-block'>
          <span className='underline decoration-[#e94343] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title'>Quick Links</span>
          <div className='flex flex-col mt-[1rem] text-[20px] footer-item'>

            {/* <a href='/assets/rules.pdf'>
              <span className='footer-link'>Rule Book</span>
            </a> */}
            <a className='' href='/upload'>
              <span className='footer-link hover:text-[#f44]'>Get Started!</span>
            </a>
          </div>

        </div>
        <div className='flex flex-col footer-block'>
          <span className='underline decoration-[#e94343] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title'>Social Handles</span>
          <div className='flex items-center mt-[1rem] footer-item flex justify-center'>
            <Link href="https://www.instagram.com/adi_shelke_07/" className='px-[0.5rem] text-[40px] footer-social-icons footer-insta'>
              <BsInstagram />
            </Link>
            <Link href="https://www.linkedin.com/in/adinath-shelke-2519b4203" className='px-[0.5rem] text-[40px] footer-linkedin'>
              <AiFillLinkedin />
            </Link>
            <Link href="https://github.com/adi-shelke" className='px-[0.5rem] text-[40px] hover:text-[#66e2e4]'>
            <FaGithub />
            </Link>

          </div>
        </div>
        <div className='flex flex-col items-center footer-block'>
          <span className='underline decoration-[#e94343] decoration-[0.4rem] text-[30px] underline-offset-8 footer-title '>Contact Us</span>
          <span  className='mt-[1rem] footer-link'>
          <a href="mailto:shelkeadinath3@gmail.com" className=' text-[20px] footer-item hover:text-[#f44]'>torontocakes@gmail.com</a>
          </span>

        </div>
      </div>

      <div className=' flex justify-center align-center pb-[0.5rem] text-[18px] copyright tracking-wider'>
        <span>Made with &nbsp;</span>
        &#10084;&#65039; by &nbsp;
        <span className='text-[#ffffff] hover:text-[#AEDEFC] underline underline-offset-4 '><Link href="https://github.com/AryanP45" target="_blank">  GPU BURNERS
        </Link>
        </span>
      </div>
      <div className='flex justify-center align-center pb-[0.5rem] text-[14px] copyright'>
      <span className='text-[#fff] font-medium tracking-widest'>&nbsp; © Copyright <strong>Toronto Cup-Cakes</strong>. All Rights Reserved
        </span>

      </div>

    </div>
  )
}

export default Footer
