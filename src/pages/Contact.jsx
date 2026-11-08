import { useState } from 'react';
import { Send, Mail } from 'lucide-react'


function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState("");

  const fillStyle = "w-full border border-gray-300 bg-gray-100 p-2 rounded"

  return (

    <div className="w-full mt-30 bg-gray-100 rounded mb-30 shadow-md p-5 max-w-5xl mx-auto flex flex-col md:flex-row gap-5">

      <div className="w-full md:w-1/2 bg-gray-800 text-white rounded shadow-md p-8 flex flex-col justify-center gap-5">
          <p className="mb-3 font-semibold uppercase border-b pb-2 border-gray-60 tracking-[0.3em] text-gray-300">
              Masterwork Music
          </p>
          <h2 className="text-2xl inline-flex gap-2 -mt-4 font-bold">
            <Mail size={35}/>
            Contact Us
          </h2>
          <p className="text-gray-300">
            Whether you're looking for an instrument,
            need assistance, or simply have a problem with 
            our website, feel free to reach out!
          </p>
          <div className="border-t border-gray-300 pt-5">
            <p className="font-semibold">Email Us</p>
            <p className="text-gray-300">
                masterworkmusic@gmail.com
            </p>
          </div>
      </div>

      <div className="w-full md:w-1/2 bg-white border border-gray-200 rounded shadow-md p-6 md:p-8 flex flex-col gap-4">

        <h2 className="text-2xl text-gray-800 font-bold">
            Message Us
        </h2>
        <p className='text-sm -mt-5 tracking-[0.2em] text-gray-600 font-semibold'>
          Let us now!
        </p>

        <div className='w-full'>
          <label className="text-sm font-bold text-gray-700 mb-2">
            Full Name
          </label>
          <input className={fillStyle}
          type="text"
          placeholder="Enter your full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          />
      </div>

      <div className='w-full'>
          <label className="text-sm font-bold text-gray-700 mb-2">
            Email Address
          </label>
          <input className={fillStyle}
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          />
      </div>

      <div className='w-full'>
          <label className="text-sm font-bold text-gray-700 mb-2">
            Message
          </label>
          <input className={fillStyle}
          type="text"
          placeholder="Enter your complete address"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          />
      </div>

        <button onClick={() => setIsSent(true)} className="flex items-center justify-center gap-2 bg-gray-800 text-gray-100 px-6 py-3 rounded hover:bg-gray-700 hover:scale-101 transition duration-300">
          <Send /> 
          Send
        </button>

      </div>

      {isSent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-10">
            <div className="bg-white p-8 rounded shadow-xl text-center">

                <h2 className="text-2xl font-bold text-gray-800">Message Sent</h2>
                <p className="mt-3 w-xl text-gray-900 ">{message} </p>
                <p className="mt-3 font-bold text-gray-900">From: {name}</p>

                <button onClick={() => { setIsSent(false); setName(""); setEmail(""); setMessage("");}} className="mt-5 bg-gray-800 text-white px-6 py-2 rounded">
                  Okay
                </button>

            </div>
        </div>
      )}
    </div>

  )
}

export default Contact