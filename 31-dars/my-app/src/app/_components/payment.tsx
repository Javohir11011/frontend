import Link from "next/link";
import React from "react";
interface PaymentType {
  text: string;
  img: string;
}

const Payment = ({ text, img }: PaymentType) => {
  return (
    <div className="flex justify-between items-center w-[210px] h-[56px]">
      <p className="text-[14px]">
        <Link href={"/payment"}>{text}</Link>
      </p>
      <img src={img} alt="img" />
    </div>
  );
};

export default Payment;
