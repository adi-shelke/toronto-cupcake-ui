"use client";
import Link from "next/link";
import { TfiEmail } from "react-icons/tfi";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from "react";
import { useState } from "react";
import "../styles/contact.css"
// import emailjs from "emailjs-com";
const Contact = () => {
  const [sending, setsending] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    alert("Message Sent")
    // setsending(true);
    // emailjs
    //   .sendForm(
    //     process.env.NEXT_PUBLIC_EMAIL_JS_SERVICE_ID,
    //     process.env.NEXT_PUBLIC_EMAIL_JS_TEMPLATE_ID,
    //     form.current,
    //     process.env.NEXT_PUBLIC_EMAIL_JS_PUBLIC_KEY
    //   )
    //   .then(
    //     (result) => {
    //       setsending(false);
    //       e.target.reset();
    //       setTimeout(() => {
    //         alert("Message Sent");
    //       }, 300);
    //     },
    //     (error) => {
    //       setsending(false);
    //     }
    //   );
  };
  return (
    <section id="contact" className="mb-[2rem] flex flex-col justify-center items-center" >
      <h2 className="text-black mb-[2rem] my-[2rem] text-[30px] ">Contact Us</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <TfiEmail className="contact_icon" />
            <h4>Email</h4>
            <h5>shelkeadinath3@gmail.com</h5>
            <Link
              className="link"
              href="mailto:shelkeadinath3@gmail.com"
              target="_blank"
            >
              Send a mail
            </Link>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact_icon" />
            <h4>Messenger</h4>
            <h5>Adinath Shelke</h5>
            <Link
              className="link"
              href="https://m.me/adinath.shelke.12"
              target="_blank"
            >
              Send a message
            </Link>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact_icon" />
            <h4>Whatsapp</h4>
            <h5>+917741934120</h5>
            <Link
              className="link"
              href="https://api.whatsapp.com/send?phone=917741934120"
              target="_blank"
            >
              Send a message
            </Link>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
            className="text-black"
          />
          <input type="email" name="email" placeholder="Your Email" required  className="text-black"/>
          <textarea
            name="message"
            rows="5"
            cols="20"
            placeholder="Your Message"
            required
            className="text-black"
            
          ></textarea>
          <button type="submit" className="btn btn-primary bg-[#2c2c6c] hover:bg-[#17bca0] text-white font-bold py-2 px-4 rounded-full mt-[0.6rem]">
            {sending ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
