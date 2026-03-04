import React from 'react'

const Service = () => {
  const mainServices = [
    
    { title: "Fast Delivery", desc: "Free shipping on orders over 5k. Get your items within 24 hours inside Valley.", icon: "🚚" },
    { title: "24/7 Support", desc: "Our dedicated team is available anytime via live chat or phone to help with your orders.", icon: "💬" },
    { title: "Secure Payment", desc: "We use bank-level 256-bit encryption to ensure your transactions are 100% safe.", icon: "🔒" },
    { title: "Easy Returns", desc: "Not happy with your purchase? Return it within 7 days for a full, no-questions-asked refund.", icon: "🔄" },
    { title: "Store Pickup", desc: "Order online and pick up your items at any of our 500+ local partner locations.", icon: "🏪" },
    { title: "Authenticity Guarantee", desc: "We source directly from brands to guarantee that every product is 100% original.", icon: "✅" }
  ];

  return (
    <div className="bg-white">
      {/* 1. Service Hero Header */}
      <section className="bg-orange-50 py-16 px-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">How Can We Help You?</h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          At Shopee, we are committed to providing the best shopping experience with world-class logistics and customer care.
        </p>
      </section>

      {/* 2. Expanded Services Grid */}
      <section className="py-20 px-10 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-800 font-serif">Our Services</h2>
          <div className="h-1 w-20 bg-orange-500 mx-auto mt-2"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {mainServices.map((s, index) => (
            <div key={index} className="group p-8 border border-gray-100 rounded-2xl hover:bg-orange-600 hover:text-white transition-all duration-300 shadow-sm hover:shadow-xl">
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{s.icon}</div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-gray-500 group-hover:text-orange-50 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. "Why Choose Us" Stats Section */}
      <section className="bg-gray-100 text-black py-16 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-black uppercase text-sm tracking-widest">Happy Customers</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">24/7</div>
            <div className="text-black uppercase text-sm tracking-widest">Customer Care</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">70+</div>
            <div className="text-black uppercase text-sm tracking-widest">Districts Reached</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-black uppercase text-sm tracking-widest">Secure Checkout</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service