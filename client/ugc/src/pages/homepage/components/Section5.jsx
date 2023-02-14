import img from "../../../assets/homesection5.jpg";
import { BsStarFill } from "react-icons/bs";
const Section5 = () => {
  return (
    <div className="mx-auto">
      <div className="w-[80%] max-w-[1328px] mx-auto">
        <h2 className="font-[500] leading-[84px] text-center text-[#111827] text-[2rem]">
          Some Success Stories
        </h2>
        <div className="flex items-start justify-between gap-[2rem] bg-[#F8FAFC] rounded-[10px]">
          <img
            src={img}
            alt="img"
            className="w-[435px] h-[402px] rounded-[10px]"
          />
          <div className="text-[#374151] flex flex-col gap-[0.5rem]">
            <h4 className="text-[#111827] font-[500] leading-[48px]">
              Ricarda lben
            </h4>
            <p className="">Verified UGC Creator</p>
            <span className="font-[400] leading-[22px]">
              “Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum. ollit cupidatat irure.
              Laborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation incididunt aliquip dollit cupidatat irure. Laborum
              magna nulla duis ullamco cillum dolor. te exercitation incididunt
              aliquip d “
            </span>
            <span className="font-[400] leading-[22px]">
              “Nulla Loremborum magna nulla duis ullamco cillum dolor. Voluptate
              exercitation incididunt aliquip dollit cupidatat irure. Laborum
              magna nulla duis ullamco cillum dolor. te exercitation incididunt
              aliquip d “
            </span>
            <span className="flex items-center">
              <BsStarFill className="text-[#FAB005]" />
              4.5 stars from 400 reviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
