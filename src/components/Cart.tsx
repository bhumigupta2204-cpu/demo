import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, CheckCircle, Gift } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { CartItem } from '../types.ts';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: CartItem[];
  onUpdateQty: (pId: string, delta: number, shade?: string) => void;
  onRemoveItem: (pId: string, shade?: string) => void;
  onClearCart: () => void;
}

export default function Cart({ isOpen, onClose, cartItems, onUpdateQty, onRemoveItem, onClearCart }: CartProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'shipping' | 'success'>('cart');
  const [shippingInfo, setShippingInfo] = useState({
    name: 'Bhumi Gupta',
    email: 'bhumigupta2204@gmail.com',
    phone: '+91 98765 43210',
    address: '125 Fashion Street',
    city: 'New Delhi',
    postalCode: '110001'
  });
  const [orderId, setOrderId] = useState('');

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const shippingThreshold = 50;
  const deliveryCost = subtotal >= shippingThreshold || subtotal === 0 ? 0 : 4.99;
  const orderTotal = subtotal + deliveryCost;

  const handlePlaceOrder = (e: FormEvent) => {
    e.preventDefault();
    const randomizedId = `BH-${2026}-${Math.floor(10000 + Math.random() * 90000)}`;
    setOrderId(randomizedId);
    setCheckoutStep('success');
  };

  const handleCloseSession = () => {
    onClearCart();
    setCheckoutStep('cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden font-sans">
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#2C181C]/40 backdrop-blur-xs transition-opacity animate-fade-in"
        onClick={onClose}
      />

      {/* Drawer Body container */}
      <div className="absolute inset-y-0 right-0 max-w-md w-full bg-[#FFF5F6] shadow-2xl flex flex-col h-full z-10 border-l border-[#C85C6E]/20 animate-slide-left">
        
        {/* Drawer Header */}
        <div className="h-20 border-b border-[#C85C6E]/15 px-6 flex items-center justify-between shrink-0 bg-[#FCE4E7]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-[#C85C6E]" />
            <h2 className="font-serif text-lg font-normal tracking-tight text-[#2C181C]">
              {checkoutStep === 'cart' && 'Shopping Bag'}
              {checkoutStep === 'shipping' && 'Shipping Details'}
              {checkoutStep === 'success' && 'Order receipt'}
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 rounded-full cursor-pointer hover:bg-[#C85C6E]/10 text-[#2C181C]/50 hover:text-[#C85C6E] transition-colors border border-transparent hover:border-[#C85C6E]/20"
            aria-label="Close Shopping Bag"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Dynamic Steps rendering */}
        {checkoutStep === 'cart' && (
          <>
            {/* PROGRESS FREE DELIVERY BAR */}
            {subtotal > 0 && (
              <div className="bg-[#FCE4E7] border-b border-[#C85C6E]/15 py-3.5 px-6 shrink-0">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-wider font-bold mb-1.5 text-[#2C181C]">
                  <span className="flex items-center gap-1">
                    <Gift className="h-3.5 w-3.5 text-[#C85C6E]" />
                    {subtotal >= shippingThreshold ? 'Free delivery unlocked!' : 'Unlock free delivery'}
                  </span>
                  <span className="text-[#2C181C]">
                    {subtotal >= shippingThreshold ? '✓ Unlocked' : `$${(shippingThreshold - subtotal).toFixed(2)} to go`}
                  </span>
                </div>
                <div className="w-full bg-[#C85C6E]/15 h-1 rounded-full overflow-hidden">
                  <div
                    className="bg-[#C85C6E] h-full rounded-full transition-all duration-500" 
                    style={{ width: `${Math.min(100, (subtotal / shippingThreshold) * 100)}%` }}
                  />
                </div>
              </div>
            )}

            {/* PRODUCT LIST ELEMENT */}
            <div className="flex-grow overflow-y-auto p-6 space-y-6 bg-[#FFF5F6]">
              {cartItems.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FCE4E7] border border-[#C85C6E]/15 text-[#C85C6E]">
                    <ShoppingBag className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-lg text-[#2C181C] font-normal">Your bag is empty</h3>
                    <p className="text-[#2C181C]/60 font-light text-xs max-w-xs leading-relaxed">
                      Browse our high-quality serums, cleansers, or lipstick collection and add items to begin checkout.
                    </p>
                  </div>
                  <button
                    onClick={onClose}
                    className="bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest cursor-pointer shadow-xs transition-colors"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 pb-6 border-b border-[#C85C6E]/15 last:border-0 last:pb-0">
                    <div className="h-20 w-20 bg-[#FCE4E7] rounded-xl overflow-hidden shrink-0 border border-[#C85C6E]/15">
                      <img 
                        src={item.product.image} 
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = item.product.fallbackImage;
                        }}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        alt={item.product.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="flex-grow flex flex-col justify-between">
                      <div className="space-y-1">
                        <div className="flex justify-between items-start">
                          <h4 className="font-serif text-sm font-normal text-[#2C181C] line-clamp-1">
                            {item.product.name}
                          </h4>
                          <span className="font-serif text-sm font-bold text-[#2C181C] ml-2">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                        <p className="text-[9px] text-[#C85C6E] font-bold uppercase tracking-widest">{item.product.category}</p>
                        {item.selectedShade && (
                          <div className="inline-flex items-center gap-1 bg-[#FCE4E7] border border-[#C85C6E]/15 rounded-md px-2 py-0.5 mt-1">
                            <span className="text-[9px] font-bold text-[#2C181C]/80">Shade: {item.selectedShade}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-[#C85C6E]/15 rounded-lg overflow-hidden bg-[#FFF5F6] shrink-0 scale-90 origin-left">
                          <button
                            onClick={() => onUpdateQty(item.product.id, -1, item.selectedShade)}
                            className="px-2.5 py-1 text-[#2C181C]/50 hover:bg-[#FCE4E7] hover:text-[#2C181C] font-semibold cursor-pointer text-xs"
                          >
                            -
                          </button>
                          <span className="px-2.5 py-1 font-semibold text-[#2C181C] text-[11px] w-6 text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => onUpdateQty(item.product.id, 1, item.selectedShade)}
                            className="px-2.5 py-1 text-[#2C181C]/50 hover:bg-[#FCE4E7] hover:text-[#2C181C] font-semibold cursor-pointer text-xs"
                          >
                            +
                          </button>
                        </div>

                        {/* Trash */}
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedShade)}
                          className="p-1 rounded-md text-[#2C181C]/30 hover:text-rose-600 transition-colors cursor-pointer"
                          title="Remove item"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* DRAWER BOTTOM CHECKOUT SUBMIT */}
            {cartItems.length > 0 && (
              <div className="border-t border-[#C85C6E]/15 p-6 bg-[#FCE4E7] shrink-0 space-y-4">
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between text-[#2C181C]/70 font-light font-sans">
                    <span>Cart Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#2C181C]/70 font-light font-sans">
                    <span>Delivery</span>
                    <span>{deliveryCost === 0 ? 'FREE' : `$${deliveryCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-[#2C181C] font-bold text-sm pt-2 border-t border-[#C85C6E]/15 font-sans">
                    <span>Grand Total</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  onClick={() => setCheckoutStep('shipping')}
                  className="w-full bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition-all active:scale-98 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Proceed to Shipping</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            )}
          </>
        )}

        {/* STEP 2: SHIPPING DATA COMPILATION */}
        {checkoutStep === 'shipping' && (
          <form onSubmit={handlePlaceOrder} className="flex-grow flex flex-col justify-between overflow-hidden bg-[#FFF5F6]">
            <div className="flex-grow overflow-y-auto p-6 space-y-5">
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#C85C6E] block mb-1">
                DELIVERY INFORMATION
              </span>

              <div className="space-y-4 font-sans">
                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                    Customer Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.name}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
                    className="w-full bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs text-[#2C181C] focus:outline-none focus:bg-white focus:border-[#C85C6E] transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={shippingInfo.email}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                    className="w-full bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs text-[#2C181C] focus:outline-none focus:bg-white focus:border-[#C85C6E] transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                    Phone Contact *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.phone}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                    className="w-full bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs text-[#2C181C] focus:outline-none focus:bg-white focus:border-[#C85C6E] transition-all shadow-xs"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                    Street Address *
                  </label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.address}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                    className="w-full bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs text-[#2C181C] focus:outline-none focus:bg-white focus:border-[#C85C6E] transition-all shadow-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                      City *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.city}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                      className="w-full bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs text-[#2C181C] focus:outline-none focus:bg-white focus:border-[#C85C6E] transition-all shadow-xs"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-wider text-[#C85C6E] block">
                      Pin Code *
                    </label>
                    <input
                      type="text"
                      required
                      value={shippingInfo.postalCode}
                      onChange={(e) => setShippingInfo({ ...shippingInfo, postalCode: e.target.value })}
                      className="w-full bg-[#FCE4E7] border border-[#C85C6E]/20 rounded-xl px-4 py-2.5 text-xs text-[#2C181C] focus:outline-none focus:bg-white focus:border-[#C85C6E] transition-all shadow-xs"
                    />
                  </div>
                </div>
              </div>

              {/* Security Badge */}
              <div className="bg-[#FCE4E7] rounded-xl p-4 border border-[#C85C6E]/20 flex items-start gap-3 mt-4">
                <ShieldCheck className="h-5 w-5 text-[#C85C6E] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-sans text-[11px] font-bold uppercase text-[#2C181C] tracking-wider">
                    Secure Cash on Delivery
                  </h4>
                  <p className="text-[10px] text-[#2C181C]/70 font-light leading-relaxed">
                    By choosing cash on delivery, you pay after receipt. Our premium shipping boxes include safety seals to prevent temperature fluctuations.
                  </p>
                </div>
              </div>
            </div>

            {/* Back & Pay buttons */}
            <div className="border-t border-[#C85C6E]/15 p-6 bg-[#FCE4E7] shrink-0 flex gap-4">
              <button
                type="button"
                onClick={() => setCheckoutStep('cart')}
                className="flex-1 bg-white border border-[#C85C6E]/20 hover:border-[#C85C6E]/35 text-[#2C181C] font-medium py-3 rounded-xl text-xs uppercase tracking-widest transition-all cursor-pointer text-center"
              >
                Back
              </button>
              <button
                type="submit"
                className="flex-1 bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium py-3 rounded-xl text-xs uppercase tracking-widest shadow-md transition-all active:scale-98 text-center cursor-pointer"
              >
                Place Order
              </button>
            </div>
          </form>
        )}

        {/* STEP 3: ORDER SUCCESS RECEIPT */}
        {checkoutStep === 'success' && (
          <div className="flex-grow flex flex-col justify-between overflow-hidden bg-[#FFF5F6]">
            <div className="flex-grow overflow-y-auto p-6 space-y-6">
              
              {/* Giant check icon */}
              <div className="text-center py-6 space-y-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-700 border border-emerald-500/25 mx-auto">
                  <CheckCircle className="h-8 w-8 text-emerald-600" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-xl font-normal text-[#2C181C]">
                    Order Registered!
                  </h3>
                  <p className="text-[#2C181C]/50 font-light text-xs">
                    Thank you {shippingInfo.name}. Your beauty parcels are being climate-packed.
                  </p>
                </div>
              </div>

              {/* Printable Invoice recap details */}
              <div className="bg-[#FCE4E7] rounded-xl p-5 border border-[#C85C6E]/20 font-mono text-[11px] text-[#2C181C]/80 space-y-3 shadow-sm">
                <div className="flex justify-between pb-2 border-b border-[#C85C6E]/15 border-dashed">
                  <span className="font-semibold uppercase text-[#2C181C]">Receipt Details</span>
                  <span className="font-semibold text-[#2C181C]">{orderId}</span>
                </div>
                
                <div className="space-y-1.5 text-[#2C181C]/70 font-light font-sans">
                  <p>Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  <p>Method: Cash on Delivery (COD)</p>
                  <p>Destination: {shippingInfo.address}, {shippingInfo.city}</p>
                </div>

                <div className="border-t border-[#C85C6E]/15 pt-2 pb-1 space-y-2">
                  <span className="font-semibold uppercase text-[#2C181C] block pb-1">Items Shipped:</span>
                  {cartItems.map((item, idx) => (
                    <div key={idx} className="flex justify-between">
                      <span className="line-clamp-1">{item.quantity}x {item.product.name} {item.selectedShade && `(${item.selectedShade})`}</span>
                      <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#C85C6E]/15 border-dashed pt-2 space-y-1.5 font-semibold text-[#2C181C]">
                  <div className="flex justify-between text-[#2C181C]/60 font-normal font-sans">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[#2C181C]/60 font-normal font-sans">
                    <span>Shipping Charges</span>
                    <span>{deliveryCost === 0 ? 'FREE' : `$${deliveryCost.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between text-sm font-bold pt-1 border-t border-[#C85C6E]/15">
                    <span>Paid on delivery</span>
                    <span>${orderTotal.toFixed(2)}</span>
                  </div>
                </div>

                <p className="text-[9px] text-[#C85C6E] font-bold text-center pt-2 leading-relaxed font-sans uppercase">
                  Carefully sealed in New Delhi Warehouse. <br />
                  Est. Delivery: 2-3 Working Days.
                </p>
              </div>

              {/* Support details */}
              <p className="text-[11px] text-[#2C181C]/60 font-light text-center leading-relaxed">
                A verification link has been dispatched to <span className="font-semibold text-[#2C181C]">{shippingInfo.email}</span>. If you need any corrections, ping <span className="font-bold text-[#C85C6E]">support@beautyhub.com</span>.
              </p>
            </div>

            {/* Back to Shopping reset button */}
            <div className="border-t border-[#C85C6E]/15 p-6 bg-[#FCE4E7] shrink-0">
              <button
                type="button"
                onClick={handleCloseSession}
                className="w-full bg-[#C85C6E] hover:bg-[#C85C6E]/90 text-white border border-[#C85C6E] font-medium py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition-colors text-center cursor-pointer"
              >
                Keep Shopping
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
