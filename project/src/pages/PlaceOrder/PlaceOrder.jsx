import React, { useContext, useEffect, useState } from "react";
import StoreCntextProvider, { StoreContext } from "../../context/StoreContext";
import "./PlaceOrder.css";
import axios from "axios";
import {useNavigate} from 'react-router-dom'
const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };
  const placeOrder = async (e) => {
    e.preventDefault();
    let orderItems=[];
    food_list.map((item)=>{
    if (cartItems[item._id]>0){
      let itemInfo=item;
      itemInfo["quantity"]=cartItems[item._id];
      orderItems.push(itemInfo);
    }
    })
    let orderData={
      address:data,
      items:orderItems,
      amount:getTotalCartAmount()+2,

    }
    let response= await axios.post(url+'/api/order/place', orderData,{headers:{token}})
    if (response.data.success){
      const {session_url}=response.data;
      window.location.replace(session_url);

    }
    else{
      alert("Error");
    }}
    const navigate=useNavigate();
    
  useEffect(()=>{
        if (!token){
          navigate('/cart')
        }
        else if(getTotalCartAmount()===0){
        navigate('/cart')
        }
  },[token])
  
  
  return (
    <form className="place-order" onSubmit={placeOrder}>
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input
            name="firstName"
            required
            onChange={onChangeHandler}
            type="text"
            placeholder="First Name"
            value={data.firstName}
          />
          <input
            type="text"
            required
            onChange={onChangeHandler}
            placeholder="Last Name"
            value={data.lastName}
            name="lastName"
          />
        </div>
        <input
          type="email"
          required
          name="email"
          value={data.email}
          onChange={onChangeHandler}
          placeholder="Email Address"
        />
        <input
          type="text"
          required
          name="street"
          value={data.street}
          onChange={onChangeHandler}
          placeholder="Street"
        />

        <div className="multi-fields">
          <input
            type="text"
            required
            name="city"
            value={data.city}
            onChange={onChangeHandler}
            placeholder="City"
          />
         
        </div>
        <div className="multi-fields">
          <input
            type="text"
            required
            name="zipcode"
            onChange={onChangeHandler}
            value={data.zipcode}
            placeholder="Zip code"
          />
          <input
            type="text"
            required
            name="country"
            onChange={onChangeHandler}
            value={data.country}
            placeholder="Country"
          />
        </div>
        <input
          type="text"
          required
          onChange={onChangeHandler}
          placeholder="Phone"
          name="phone"
        />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>

            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${2}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 2}</b>
            </div>
            <hr />
          </div>
          <button type="submit">Proceed to Payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
