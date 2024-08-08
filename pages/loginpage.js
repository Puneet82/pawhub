import Footer from "../components/Footer";
import Login from "../components/Login";
import img from '../public/img/signup/loginleft.png';
// import img from '../public/img/signup/login.png';
import Image from 'next/image';
const loginpage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-around ">
      <div className="flex flex-1">
        <div
          className="w-[50%] bg-center hidden md:block items-center px-5"

        >
          <Image
            src={img.src}
            // src={"https://dm6g3jbka53hp.cloudfront.net/static-images/dog-on-bed-30032020.png"}
            alt="Logo" width={500} height={500} className="m-10" />
        </div>
        <div className="w-full md:w-[50%] flex items-center justify-evenly">
          <div className="w-full max-w-md px-4 py-8 shadow hover:shadow-lg m-8 rounded-2xl items-center">
            <Login />
          </div>
        </div>

      </div>
      <Footer />
    </div>
  );
};

export default loginpage;
