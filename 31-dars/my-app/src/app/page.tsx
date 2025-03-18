import { CardProduct, PaymentData } from "@/config/payment";
import Payment from "./_components/payment";
import phone from "../assets/phone.svg";
import logo from "../assets/logo1.svg";
import logo2 from "../assets/logo2.svg";
import newLogo from "../assets/new.svg";
import Product from "./_components/product";

export default function Home() {
  return (
    <div className="">
      <div className="container flex gap-[30px]">
        <div className="w-[280px] min-h-screen bg-white-400 gap-[10px]">
          {PaymentData.map((item) => (
            <Payment key={item.id} text={item.name} img={item.img.src} />
          ))}
        </div>
        <div className="pt-[38px] flex-1 bg-gray-200 pr-[10px] pl-[10px]">
          <div className="w-[1085px] bg-green-300 rounded-[15px]">
            <div className="flex items-end justify-between">
              <div className="flex items-end gap-[50px]">
                <img src={logo.src} alt="img" className="pl-[27px]" />
                <h2 className="w-[572px] text-[30px] pt-[43px]">
                  Yangi ro’yxatdan o’tgan mijozlarga ilk buyurtma bepul yetkazib
                  beriladi!
                </h2>
              </div>
              <img src={logo2.src} alt="img" className="pr-[27px]" />
            </div>
            <div className="flex pt-[29px] pl-[120px] gap-[2px] pb-[63px]">
              <img src={phone.src} alt="img" />
              <p>1833-2178</p>
            </div>
          </div>
          <div className="pt-[28px] ">
            <div className="flex gap-[17px] pb-[35px]">
              <img src={newLogo.src} alt="img" />
              <h2 className="text-[32px]">Yangi</h2>
            </div>
            <div className="grid grid-cols-4 gap-[12px]">
              {CardProduct.map((item) => (
                <Product
                  key={item.id}
                  productImg={item.productImg}
                  info={item.info}
                  price={item.price}
                  skindka={item.skindka}
                  logo={item.logo}
                  add={item.add}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
