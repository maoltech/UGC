import Logo from "../../../assets/logo.svg";
import Button from "../../../global/Button";
const Header = () => {
  return (
    <div className="w-full bg-[#F8FAFC] mx-auto shadow-[0px 2px 6px] shadow-[#0000]/[6%]">
      <div className="grid grid-cols-[60%_40%] w-[80%] max-w-[1328px] mx-auto py-[0.2rem] content-center text-[1rem] font-[400] leading-[27px] text-[#111827]">
        <div className="flex items-center justify-between">
          <img
            src={Logo}
            alt="logo"
            className="w-[100px] h-[60px] justify-self-start"
          />
          <Button className={"bg-[#0030AB] text-white"}>Post Content</Button>
          <Button>Browse Services</Button>
          <Button>How it Works</Button>
        </div>
        <div className="flex items-center justify-end">
          <Button>Sign Up</Button>
          <Button>Log In</Button>
          <Button className={"bg-[#0030AB]/[6%] text-[#0030AB]"}>
            Become a seller
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
