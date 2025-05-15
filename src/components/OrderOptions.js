import React from 'react';
import '../css/OrderOptions.css'; 

const OrderOptions = () => {
  return (
    <div className="container text-center my-5">
      <h2 className="mb-5 fw-bold">ORDER TODAY, GET IT TODAY</h2>

      <div className="row justify-content-center">
        <div className="col-md-6 col-sm-12 mb-4">
          <div
            className="card order-card text-white"
            style={{ backgroundColor: '#556B2F' }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/6386/6386986.png"
              className="card-img-top p-4"
              alt="Same Day Delivery"
            />
            <div className="card-body">
              <h3 className="card-title">SAME DAY DELIVERY</h3>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 mb-4">
          <div
            className="card order-card text-white"
            style={{ backgroundColor: '#556B2F' }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/263/263115.png"
              className="card-img-top p-4"
              alt="Order Pickup"
            />
            <div className="card-body">
              <h3 className="card-title">ORDER PICKUP</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderOptions;
