import React, { useState } from 'react';
import './Menu.css';

function Modal({ menu, onClose, onPlaceOrder }) {
  const [selectedItems, setSelectedItems] = useState({});
  const [deliveryType, setDeliveryType] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [orderSummary, setOrderSummary] = useState(null);

  const toggleItem = (item) => {
    setSelectedItems((prev) => {
      const newSelected = { ...prev };
      if (newSelected[item]) {
        delete newSelected[item];
      } else {
        newSelected[item] = 1;
      }
      return newSelected;
    });
  };

  const updateQuantity = (item, quantity) => {
    setSelectedItems((prev) => ({
      ...prev,
      [item]: parseInt(quantity),
    }));
  };

  const openConfirmation = () => {
    if (!deliveryType) return alert("Please select delivery type");
    if (deliveryType === "restaurant" && !tableNumber)
      return alert("Please enter table number");
    if (Object.keys(selectedItems).length === 0) return alert("No items selected");

    setShowConfirmModal(true);
  };

  const confirmOrder = () => {
    const orderDetails = {
      items: selectedItems,
      deliveryType,
      tableNumber: deliveryType === "restaurant" ? tableNumber : null,
      category: menu.title,
    };

    setOrderSummary(orderDetails);
    setShowConfirmModal(false);
    setShowSuccessModal(true);

    setSelectedItems({});
    setDeliveryType('');
    setTableNumber('');

    onPlaceOrder(orderDetails);
  };

  const cancelOrder = () => {
    setShowConfirmModal(false);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h2>{menu.title} Items</h2>

        <div className="order-section">
          <label>
            Delivery Type:
            <select
              value={deliveryType}
              onChange={(e) => setDeliveryType(e.target.value)}
            >
              <option value="">Select</option>
              <option value="restaurant">In Restaurant</option>
              <option value="home">Home Delivery</option>
            </select>
          </label>

          {deliveryType === 'restaurant' && (
            <input
              type="number"
              placeholder="Enter Table Number"
              value={tableNumber}
              onChange={(e) => setTableNumber(e.target.value)}
            />
          )}
        </div>

        <div className="modal-items">
          {menu.items.map((item, i) => (
            <div
              key={i}
              className={`modal-card ${selectedItems[item] ? 'selected' : ''}`}
              onClick={(e) => {
                if (e.target.tagName.toLowerCase() !== 'select') {
                  toggleItem(item);
                }
              }}
            >
              <div>{item}</div>
              {selectedItems[item] && (
                <select
                  value={selectedItems[item]}
                  onChange={(e) => updateQuantity(item, e.target.value)}
                >
                  {[...Array(10)].map((_, idx) => (
                    <option key={idx} value={idx + 1}>{idx + 1}</option>
                  ))}
                </select>
              )}
            </div>
          ))}
        </div>

        {Object.keys(selectedItems).length > 0 && (
          <div className="selected-preview">
            <h4>Selected Items:</h4>
            <ul>
              {Object.entries(selectedItems).map(([item, qty], i) => (
                <li key={i}>{item} x {qty}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-actions">
          <button className="order-btn" onClick={openConfirmation}>Place Order</button>
          <button className="close-btn" onClick={onClose}>Close</button>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="confirm-modal">
          <div className="confirm-box">
            <h3>Confirm Your Order</h3>
            <p><strong>Delivery:</strong> {deliveryType}</p>
            {deliveryType === 'restaurant' && <p><strong>Table:</strong> {tableNumber}</p>}
            <p><strong>Items:</strong></p>
            <ul>
              {Object.entries(selectedItems).map(([item, qty], i) => (
                <li key={i}>{item} x {qty}</li>
              ))}
            </ul>
            <div className="confirm-actions">
              <button className="confirm-btn" onClick={confirmOrder}>Confirm</button>
              <button className="cancel-btn" onClick={cancelOrder}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="success-modal">
          <div className="success-box">
            <h3>✅ Order Successfully Placed!</h3>
            <p><strong>Delivery Type:</strong> {orderSummary?.deliveryType}</p>
            {orderSummary?.deliveryType === 'restaurant' && (
              <p><strong>Table Number:</strong> {orderSummary.tableNumber}</p>
            )}
            <p><strong>Category:</strong> {orderSummary?.category}</p>
            <p><strong>Ordered Items:</strong></p>
            <ul>
              {Object.entries(orderSummary?.items || {}).map(([item, qty], i) => (
                <li key={i}>{item} x {qty}</li>
              ))}
            </ul>
            <button onClick={() => {
              setShowSuccessModal(false);
              onClose();
            }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
