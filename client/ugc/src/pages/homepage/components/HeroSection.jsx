import HeroBg from "../../../assets/herobg.svg";
import HeroImg from "../../../assets/homeimg.svg";
import Button from "../../../global/Button";
import { TbUsers } from "react-icons/tb";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { AiOutlineStar } from "react-icons/ai";
const HeroSection = () => {
  return (
    <div className="mx-auto">
      <div className="w-[80%] max-w-[1328px] mx-auto">
        <div
          style={{ backgroundImage: `url(${HeroBg})`, backgroundSize: "cover" }}
          className="rounded-[10px] py-[2rem] w-full"
        >
          <div className="grid grid-cols-[60%_40%] justify-items-center items-center content-between w-[80%] mx-auto">
            <div className="flex flex-col items-start justify-start gap-[1rem]">
              <h2 className="text-[#F8FAFC] text-[30px] leading-[50px]">
                Get user-generated content at a crazy-affordable price. We're a
                dream for marketers and agencies.
              </h2>
              <Button className={"bg-[#0030AB] text-white mt-[1rem]"}>
                Get Your UGC Today
              </Button>
              <div className="text-[1rem] font-[400] leading-[24px] text-white w[80%] flex items-center justify-between pt-[1rem] gap-[1rem]">
                <span className="flex items-center">
                  <TbUsers />
                  <span>1M+ customers</span>
                </span>
                <span className="flex items-center">
                  <HiOutlineShieldCheck />
                  <span>2.5M+ tasks done</span>
                </span>
                <span className="flex items-center">
                  <AiOutlineStar />
                  <span>4M+ user reviews</span>
                </span>
              </div>
            </div>
            <img src={HeroImg} alt="img" className="w-[250px] h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
