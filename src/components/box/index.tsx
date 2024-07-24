import { Button } from "@mui/material"
import Image from "next/image"
import { sport_img } from "@images"
const Index = () => {
  return (
    <>
    <div className="my-20">
        <div className="container">
            <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-8">Полезное</h2>
            <div className="flex gap-6 ">
                <div className="bg-white rounded-[8px] max-w-[608px] w-full pt-[38px] px-[35px]">
                    <h2 className="text-[#1F1D14] text-[32px] font-Fira Sans font-bold mb-[9px]">Как правильно выбрать эллиптический тренажер?</h2>
                    <p className="text-[16px] leading-5 opacity-70">Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...</p>

                    <p>
                        <span>27.01.2022</span>
                        <span>250</span>
                    </p>
                </div>
                <div className="max-w-[608px] w-full ">
                  <div className="flex justify-center items-center bg-white py-[18px] rounded-[8px]">
                  <Image src={sport_img} alt="sport-image"/>
                  </div >
                    <Button sx={{background:"white", width:"100%", marginTop:"15px", paddingY:"15px", color:"#000000",lineHeight:"22px", fontFamily:"Fira Sans"}}>Посмотрет все</Button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Index