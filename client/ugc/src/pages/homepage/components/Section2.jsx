import sectionImg from "../../../assets/homesection2.svg";
const Section2 = () => {
  return (
    <div className="mx-auto">
      <div className="w-[80%] max-w-[1328px] mx-auto">
        <div
          style={{
            backgroundImage: `url(${sectionImg})`,
            backgroundSize: "center",
          }}
          className="font-[500] text-white text[40px] grid grid-cols-2 py-[2rem] px-[1rem] my-auto rounded-[10px]"
        >
          <div className="flex flex-col items-start justify-start gap-[1rem] w-[80%] mx-auto">
            <span className="text-[40px] leading-[60px]">
              Make your Mark and become a part of our Team
            </span>
            <span className="text-[1rem]">
              Come join our community and be a part of something great
            </span>
            <button className="text-[#0030AB] text-[0.8rem] py-[8px] px-[16px] bg-white rounded-[10px] shadow-[0px 4px 14px] shadow-[#211D4F/[10%]]">
              Come with Us
            </button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
