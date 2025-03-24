  import React from "react";
const Login = () => {
  return (
    <div className="container">
      <form>
        <div className="pt-[20px] pb-[20px ]">
          <input
            type="email"
            placeholder="enter to email..."
            className="p-[7px]"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="enter to password..."
            className="p-[7px]"
          />
        </div>
        <button type="submit">send</button>
      </form>
    </div>
  );
};

export default Login;
