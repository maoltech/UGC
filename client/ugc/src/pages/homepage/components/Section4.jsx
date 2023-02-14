import HeroBg from "../../../assets/herobg.svg";
import vectorline from "../../../assets/vectorline.svg";
import { IoIosArrowDroprightCircle } from "react-icons/io";
const Section4 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        clipPath: "polygon(0 20%, 100% 10%, 100% 80%, 0 95%)",
      }}
      className="py-[10rem] w-full mx-auto"
    >
      <div className="w-[80%] max-w-[1328px] mx-auto">
        <h2 className="text-center font-[600] mb-[1rem] text-[#F8FAFC] text-[2rem]">
          How it works ?
        </h2>
        <div className="text-white">
          <div className="flex justify-center">
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-[0.5rem]">
                <div
                  style={{
                    boxShadow:
                      "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                  }}
                  className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
                >
                  1
                </div>
                <div>Place Order</div>
                <div className="leading-[24px] text-center">
                  Choose the type of content that your brand requires.
                </div>
              </div>
              <div className="relative">
                <img src={vectorline} className="w-[250px]" />
                <IoIosArrowDroprightCircle className="absolute text-[2rem] text-[#0041EA]/[80%] rounded-full bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-[0.5rem]">
                <div
                  style={{
                    boxShadow:
                      "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                  }}
                  className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
                >
                  2
                </div>
                <div>Complete Brief</div>
                <div className="leading-[24px] text-center">
                  To learn more about your project, please fill out our creative
                  brief.
                </div>
              </div>
              <div className="relative">
                <img src={vectorline} className="w-[250px]" />
                <IoIosArrowDroprightCircle className="absolute text-[2rem] text-[#0041EA]/[80%] rounded-full bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-[0.5rem]">
                <div
                  style={{
                    boxShadow:
                      "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                  }}
                  className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
                >
                  3
                </div>
                <div>Ship product</div>
                <div className="leading-[24px] text-center">
                  A dedicated account manager will contact you to confirm
                  shipping information.
                </div>
              </div>
              <div className="relative">
                <img src={vectorline} className="w-[250px]" />
                <IoIosArrowDroprightCircle className="absolute text-[2rem] text-[#0041EA]/[80%] rounded-full bg-white top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" />
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex flex-col items-center gap-[0.5rem]">
                <div
                  style={{
                    boxShadow:
                      "0 6px 20px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 5px rgba(0, 0, 0, 0.3)",
                  }}
                  className="bg-[#0030AB] font-[900] text-[2rem] text-[#F8FAFC] w-[89px] h-[89px] rounded-full flex items-center justify-center"
                >
                  4
                </div>
                <div>Get Content</div>
                <div className="leading-[24px] text-center">
                  In 7–10 business days, all the information you want will be
                  emailed to your mailbox.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;
