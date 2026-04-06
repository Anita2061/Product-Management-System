import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import { api } from '../lib/api';

const Cart = () => {
  const { user } = useAuth();
  const { items, cartCount, clearCart } = useCart();
  const [selectedIds, setSelectedIds] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedOrder, setConfirmedOrder] = useState(null);

  const total = items.reduce((sum, it) => sum + (Number(it.price) || 0) * (Number(it.qty) || 0), 0);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await api.post('/accounts/checkout/', {
        items,
        name,
        phone,
        location,
        total
      });
      setConfirmedOrder(res.data);
      setOrderConfirmed(true);
      clearCart();
    } catch (error) {
      console.error("Checkout failed:", error);
      const detail = error.response?.data?.detail || error.message;
      alert(`Checkout failed: ${detail}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const closePopup = () => {
    setShowCheckout(false);
    setOrderConfirmed(false);
    setConfirmedOrder(null);
    setName('');
    setPhone('');
    setLocation('');
  };

  if (!user) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold mb-2">Your cart</h1>
        <p className="text-gray-600">
          Please <Link className="text-orange-600 font-semibold" to="/login">login</Link> to view and save your cart.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your cart</h1>
        {cartCount > 0 ? (
          <button
            onClick={clearCart}
            className="text-sm bg-gray-900 text-white px-4 py-2 rounded hover:bg-black"
          >
            Clear cart
          </button>
        ) : null}
      </div>

      {items.length === 0 ? (
        <div className="bg-white border rounded-lg p-6 text-gray-600">
          Cart is empty. <Link className="text-orange-600 font-semibold" to="/products">Browse products</Link>.
        </div>
      ) : (
        <>
          <div className="bg-white border rounded-lg overflow-hidden">
            {items.map((it) => (
              <div key={it.productId} className="flex items-center gap-4 p-4 border-b last:border-b-0">
                <img src={it.image} alt={it.title} className="w-16 h-16 object-cover rounded bg-gray-100" />
                <div className="flex-1">
                  <div className="font-semibold text-gray-900">{it.title || `Product ${it.productId}`}</div>
                  <div className="text-sm text-gray-600">Qty: {it.qty}</div>
                </div>
                <div className="font-bold text-gray-900">
                  {typeof it.price === 'number' ? `$${(it.price * it.qty).toFixed(2)}` : ''}
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between mt-6 bg-white border rounded-lg p-5">
            <div className="text-xl font-bold text-gray-900">Total: ${total.toFixed(2)}</div>
            <button
              onClick={() => setShowCheckout(true)}
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition shadow-md"
            >
              Checkout
            </button>
          </div>
        </>
      )}

      {/* Checkout Popup */}
      {showCheckout && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold leading-none"
            >
              &times;
            </button>

            {orderConfirmed ? (
              <div className="text-center py-4">
                <div className="text-5xl mb-4">✅</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h2>
                <p className="text-gray-600 mb-6">Thank you for your purchase. Your order is on the way!</p>
                
                {confirmedOrder && (
                  <div className="bg-gray-50 rounded-xl p-4 mb-6 text-left border border-gray-100">
                    <h3 className="font-bold text-gray-800 mb-3 border-b pb-2">Order Summary</h3>
                    <div className="space-y-2 max-h-40 overflow-y-auto pr-2 mb-3">
                      {confirmedOrder.items.map((it, idx) => (
                        <div key={idx} className="flex justify-between text-sm">
                          <span className="text-gray-600">{it.qty}x {it.title}</span>
                          <span className="font-medium">${((Number(it.price) || 0) * (Number(it.qty) || 0)).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t font-bold text-gray-900">
                      <span>Total Paid</span>
                      <span className="text-orange-600 text-lg">${Number(confirmedOrder.total).toFixed(2)}</span>
                    </div>
                    <div className="mt-3 text-[10px] text-gray-400">
                      Order ID: {confirmedOrder._id}
                    </div>
                  </div>
                )}

                <button
                  onClick={closePopup}
                  className="w-full bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition shadow-md"
                >
                  Return to Store
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-gray-900 mb-1">Checkout</h2>
                <p className="text-gray-500 mb-6">Complete your order details below</p>

                <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-gray-700">Order Total</span>
                    <span className="text-2xl font-bold text-orange-600">${total.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">{cartCount} item{cartCount !== 1 ? 's' : ''}</div>
                </div>

                <form className="space-y-4" onSubmit={handleCheckout}>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+977 9800000000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Delivery Location</label>
                    <input
                      type="text"
                      placeholder="Kathmandu, Nepal"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                    />
                  </div>
                   <div className="payment-selection">
  <p>Select Payment Method:</p>
  
  <label>
    <input type="radio" name="payment" value="cod" defaultChecked />
    Cash on Delivery (COD)
  </label>
  <br></br>
  <label>
    <input type="radio" name="payment" value="online" />
    Online Payment (Khalti/Esewa)
  </label>
</div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full bg-orange-600 text-white py-3 rounded-lg font-bold text-lg hover:bg-orange-700 transition shadow-md mt-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? 'Confirming...' : 'Confirm Order'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
