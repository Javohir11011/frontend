import React from "react";

const Register = () => {
  return (
    <div className="contaianer">
      <form>
        <div className="pt-[50px] pl-[20px]">
          <input
            type="email"
            placeholder="enter to email..."
            className="p-[7px]"
          />
        </div>
        <div className="pl-[20px]">
          <input
            type="password"
            placeholder="enter to password..."
            className="p-[7px]"
          />
        </div>
        <div className="pl-[20px]">
          <input
            type="username"
            placeholder="enter to username..."
            className="p-[7px]"
          />
        </div>
        <button type="submit" className="p-[7px]">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
