import React from "react";
import Title from "../../components/Title/Title";
import products from "../../data/products";
import "./order.css";

function Order() {
  return (
    <div className="order-page">
      <Title mainTitle="we deliver in no time" subtitle="place an order" />

      <form className="order-form">
        <div className="form-group-wrapper">
          <div className="form-group">
            <label htmlFor="first-name" className="form-group-label">
              first name
            </label>
            <input
              type="text"
              id="first-name"
              className="form-group-input"
              placeholder="first name eg john"
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name" className="form-group-label">
              last name
            </label>
            <input
              type="text"
              id="last-name"
              className="form-group-input"
              placeholder="last name eg doe"
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-group-label">
            email address
          </label>
          <input
            type="email"
            id="email"
            className="form-group-input"
            placeholder="email address eg example@gmail.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phone" className="form-group-label">
            your phone number
          </label>
          <input
            type="number"
            id="phone"
            className="form-group-input"
            placeholder="phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="location" className="form-group-label">
            describe your location
          </label>
          <textarea id="location"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="products" className="form-group-label">
            select a product
          </label>
          <select id="products" className="form-group-input">
            <option value="">--select a product--</option>
            {products.map((product, i) => (
              <option value={product.title}>{product.title}</option>
            ))}
          </select>
        </div>
        <button className="order-submit-btn">submit</button>
      </form>
    </div>
  );
}

export default Order;
