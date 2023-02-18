import React from "react";
import { motion } from "framer-motion";
import { AboutPageVariants } from "utils/animations";
import { FaPaperPlane } from "react-icons/fa";

function Contact() {
  return (
    <div className="hero-content">
      <motion.div
        initial="hidden"
        animate="enter"
        variants={AboutPageVariants.paragraph}
        exit="exit"
        transition={{ type: "linear", duration: 1.2 }}
        className="card bg-base-600 bg-white py-8 px-8 text-black shadow-xl rounded-xl xl:w-[800px] lg:w-[700px] md:w-[600px] sm:w-[300px]"
      >
        <section className="">
          <div className="card-title">
            <h2
              className="lg:text-3xl md:text-2xl xl:text-3xl font-bold px-6 sm:text-center sm:text-lg"
            >
              Contact Me
            </h2>
          </div>

          <div className="card-body">
            <div className="flex flex-wrap">
              <div className="grow-0 shrink-0 basis-auto mb-12 w-full">
                <form
                  action={process.env.NEXT_PUBLIC_APP_GETFORM_API_TOKEN}
                  method="POST"
                >
                  <input type="hidden" name="_gotcha" className="hidden" />
                  <div className="form-group mb-6">
                    <input
                      type="text"
                      className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput7"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                  <div className="form-group mb-6">
                    <input
                      type="email"
                      className="form-control block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleInput8"
                      placeholder="Email address"
                      name="email"
                    />
                  </div>
                  <div
                    className="form-group mb-6"
                  >
                    <textarea
                      className="
                      form-control
                      block
                      w-full
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      bg-white bg-clip-padding
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      id="exampleFormControlTextarea13"
                      rows={3}
                      placeholder="Message"
                      name="message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="
                    btn btn-success
                    w-full
                    leading-tight
                    uppercase
                    rounded
                    shadow-md
                    p-2"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </div>
  );
}

export default Contact;
