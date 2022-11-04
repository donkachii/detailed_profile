import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div className="flex justify-center items-center mt-16 mb-44">
      <section className="contact">
        <article className="contact_header mb-12">
          <h1 className="contact_heading pb-5">Contact Me</h1>
          <p className="contact_summary">
            Hi there, contact me to ask me about anything you have in mind.
          </p>
        </article>
        <article>
          <form>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <div className="">
                <label for="first_name" className="block mb-1.5">
                  First name
                </label>
                <input
                  className="w-full"
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="">
                <label for="last_name" className="block mb-1.5">
                  Last name
                </label>
                <input
                  className="w-full"
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="mb-6 ">
              <label for="email" className="block mb-1.5 ">
                Email
              </label>
              <input
                className="w-full"
                type="email"
                id="email"
                placeholder="yourname@email.com"
              />
            </div>
            <div className="mb-6">
              <label for="message" className="block mb-1.5">
                Message
              </label>
              <textarea
                className="w-full"
                rows="4"
                id="message"
                placeholder="Send me a message and I'll reply you as soon as possible..."
              />
            </div>
            <div className="flex items-center mb-8">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  className="w-5 h-5"
                  required
                />
              </div>
              <label for="remember" className="remember_text ml-3">
                {
                  "You agree to providing your data to {name} who may contact you."
                }
              </label>
            </div>
          </form>
          <button className="w-full btn_contact">Send Message</button>
        </article>
      </section>
    </div>
  );
};

export default Contact;
