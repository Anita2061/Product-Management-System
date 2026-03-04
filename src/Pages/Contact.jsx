import React from 'react'

const Contact = () => {
  return (
    <div>
      <section className="py-20 bg-gray-50 px-10">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-md grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">Have questions? Send us a message and we'll get back to you shortly.</p>
          <div className="space-y-2">
            <p className="font-medium text-orange-600">Email: Anitashopee101@gmail.com</p>
            <p className="font-medium text-orange-600">Phone: =977 9765575323</p>
          </div>
        </div>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="email" placeholder="Email Address" className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea placeholder="Your Message" rows="4" className="p-3 border rounded-md outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          <button type="button" className="bg-orange-600 text-white py-3 rounded-md font-bold hover:bg-orange-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
    </div>
  )
}

export default Contact
