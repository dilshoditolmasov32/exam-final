"use client";

import Image from "next/image";
import { TextField } from "@mui/material";
import { product2, product4, delete_icon, click, payme } from "@images";
import { KartaModal, MapModal, MessageModal, SuccessModal } from "@/components";

const Index = () => {
  const data = [
    {
      id: 1,
      image: product2,
      product_name: "Гантель виниловая, 2 х 3 кг Гантель ",
      price: 300000,
    },
    {
      id: 2,
      image: product4,
      product_name: "Гантель виниловая, 2 х 3 кг Гантель ",
      price: 220000,
    },
    {
      id: 3,
      image: product2,
      product_name: "Гантель виниловая, 2 х 3 кг Гантель ",
      price: 300000,
    },
    {
      id: 4,
      image: product4,
      product_name: "Гантель виниловая, 2 х 3 кг Гантель ",
      price: 350000,
    },
  ];

  const handleSubmit = (values: unknown) => {
    console.log(values);
  };

  return (
    <>
      <div>
        <div className="container">
          <div className="flex gap-6 mb-[150px] mt-[15px] max-lg:grid max-lg:grid-cols-1 max-lg:justify-items-center max-lg:mb-[120px] max-md:mb-[80px] max-sm:mb-[60px] max-xs:mb-[40px]">
            <div className="max-w-[713px] w-full bg-white rounded-[8px] px-[30px] pt-[20px] pb-[66px] max-lg:max-w-[980px] max-lg:w-full  max-xs:p-3 ">
              <div className="flex justify-between max-xs:my-5">
                <h3 className="text-black font-bold font-Fira Sans text-[24px] leading-[28.8px]">
                  Ваша корзина
                </h3>
                <button className=" text-[#FF1313] text-[13px] leading-3">
                  Очистить все
                </button>
              </div>
              <div>
                {data?.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between p-[10px] mt-[10px] w-full bg-[#F2F2F2] rounded-[8px] mb-[10px]"
                  >
                    <div className="flex max-lg:flex max-lg:gap-10 max-sm:flex max-sm:gap-5 max-xs:grid max-xs:grid-cols-1 max-xs:p-5 ">
                      <div>
                        <Image
                          src={item.image}
                          alt="product_image"
                          className="w-[145px] h-[120px] max-lg:w-[180px] max-lg:h-auto max-sm:w-auto max-sm:h-auto max-xs:w-[140px]"
                        />
                      </div>
                      <div className="">
                        <p className="text-[#1F1D14] text-[20px] font-Fira Sans max-w-[292px] ">
                          {item.product_name}
                        </p>
                        <div className="flex gap-[40px] mt-[25px] ">
                          <div className="flex items-center gap-[9px]  ">
                            <button className="w-[32px] h-[32px] bg-white rounded-[50%] text-[32px] flex justify-center items-center">
                              -
                            </button>
                            <span className="text-[20px] text-black font-Fira Sans">
                              1
                            </span>
                            <button className="w-[32px] h-[32px] bg-white rounded-[50%] text-[32px] flex justify-center items-center">
                              +
                            </button>
                          </div>
                          <h3 className="text-[#000] text-[22px] font-semibold">
                            {item.price}{" "}
                            <span className="text-[#1F1D14] text-[16px]">
                              uzs
                            </span>
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button className="w-[32px] h-[32px] bg-white flex items-center justify-center rounded-[50%] ">
                        <Image src={delete_icon} alt="delete_icon" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[#06F] text-[20px] underline mb-[18px]">
                Все информация о доставке
              </p>
              <div className="text-[#000] text-[20px] max-w-[385px] w-full">
                <p>
                  Если у вас имеется вопросы позаоните по номеру:{" "}
                  <span className="text-[#06F] text-[20px] ">
                    +998 (93) 571 14 42{" "}
                  </span>
                </p>
              </div>
            </div>
            <div className="max-w-[504px] w-full p-10 bg-white rounded-[8px] max-lg:max-w-[980px] max-lg:w-full max-xs:p-3">
              <h4 className="mb-4 text-[20px] font-bold text-[#1F1D14]">
                Итого
              </h4>
              <div className="flex justify-between mb-4 ">
                <div>
                  Кол-во товаров:
                  <h3 className="text-[#1F1D14] text-[24px] font-bold">4</h3>
                </div>
                <div className="text-end">
                  Сумма:
                  <h3 className="text-[#000] text-[22px] font-semibold">
                    <span className="text-[#1F1D14] text-[24px]">
                      250 000 uzs
                    </span>
                  </h3>
                </div>
              </div>
              <h4 className="my-6 text-[20px] font-bold text-[#1F1D14]">
                Ваши данные
              </h4>
              <form onSubmit={handleSubmit}>
                <p className="mb-2 text-[#1F1D14] ">Имя /Фамиля</p>
                <TextField
                  fullWidth
                  sx={{
                    backgroundColor: "#f2f2f2",
                    outline: "none",
                    borderColor: "#f2f2f2",
                    color: "#1F1D14",
                    fontSize: "20px",
                    lineHeight: "24px",
                    border: "none",
                    marginBottom: "16px",
                  }}
                  label={"Имя /Фамиля"}
                  autoFocus={false}
                />
                <p className="mb-2 text-[#1F1D14] ">Ваш номер</p>
                <TextField
                  fullWidth
                  sx={{
                    backgroundColor: "#f2f2f2",
                    outline: "none",
                    borderColor: "#f2f2f2",
                    color: "#1F1D14",
                    fontSize: "20px",
                    lineHeight: "24px",
                    border: "none",
                    marginBottom: "16px",
                  }}
                  label={"+998 __ ___ __ __"}
                  type="number"
                />

                <p className="mb-2 text-[#1F1D14] ">Адрес доставки</p>
                <TextField
                  fullWidth
                  sx={{
                    backgroundColor: "#f2f2f2",
                    outline: "none",
                    borderColor: "#f2f2f2",
                    color: "#1F1D14",
                    fontSize: "20px",
                    lineHeight: "24px",
                    border: "none",
                    marginBottom: "16px",
                  }}
                  label={"Область/город/улица/дом"}
                  autoFocus={false}
                />
                <h4 className="my-6 text-[20px] font-bold text-[#1F1D14] ">
                  Тип оплаты
                </h4>
                <div className="flex flex-wrap gap-4 max-xs:flex max-xs:justify-between ">
                  <button className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px] flex justify-center items-center ">
                    <Image src={click} alt="click_icon" />
                  </button>
                  <button className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px]  flex justify-center items-center">
                    <Image src={payme} alt="payme_icon" />
                  </button>
                  <button className="py-[17px] px-[15px] bg-[#F2F2F2] rounded-[8px] w-[130px] flex justify-center items-center">
                    Через карту
                  </button>
                  <button className="py-[17px] px-[25px] bg-[#F2F2F2] rounded-[8px] w-[130px] flex justify-center items-center text-center ">
                    Банковский счёт
                  </button>
                </div>

                <button className="py-[20px]  my-10 px-[30px] max-w-[424px] w-full bg-[#FBD029] rounded-[5px] text-[24px] font-bold max-lg:w-full ">
                  Купить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <KartaModal />
      <br />
      <br />
      <MessageModal />
      <br />
      <br />
      <SuccessModal />
      <br />
      <br />
      <MapModal />
    </>
  );
};

export default Index;
