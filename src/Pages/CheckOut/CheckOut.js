import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../SecviceDetaile/UseServiceDetaile";

const CheckOut = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  const [user, setUser] = useState({
    name: "Akbar The Great",
    email: "akbar@momo.taj",
    address: "Tajmohol Road Md. pur",
    phone: "01711111111",
  });

  const handleAddressChange = (event) => {
    console.log(event.target.value);
    const { address, ...rest } = user;
    const newAddress = event.target.value;
    const newUser = { address: newAddress, ...rest };
    console.log(newUser);
    setUser(newUser);
  };

  return (
    <div className="w-50 mx-auto">
      <h2>Please Order:{service.name}</h2>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          name="Name"
          value={user.name}
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          name="email"
          value={user.email}
          placeholder="email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          value={service.name}
          name="service"
          placeholder="service"
          required
        />
        <br />
        <input
          onChange={handleAddressChange}
          className="w-100 mb-2"
          type="text"
          name="address"
          value={user.address}
          placeholder="address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          value={user.phone}
          placeholder="phone"
          required
        />
        <br />
        <input className="btn btn-primary" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default CheckOut;
