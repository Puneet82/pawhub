import { useState } from "react";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import dogImage from "../public/img/newsletter/dog.png";
import { message } from "../helpers/Message";
import Message from "./Message";
import API from "../api_endpoints";

const NewsLetter = () => {
  const [formData, setformData] = useState({
    email: "",
  });
  const [msg, setMsg] = useState(message);

  const handleEmailChange = (e) => {
    setformData({ ...formData, email: e.target.value });
  };

  const clearForm = () => {
    setformData({ email: "" });
  };

  const handleNewsletterSend = () => {
    API.post("/sub/send", {
      email: formData.email,
    })
      .then((response) => {
        const { data, status } = response;
        if (status === 201) {
          setMsg({ showMsg: true, success: data.success, text: data.message });
        }
        clearForm();
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
  };

  return (
    <section className="py-16 bg-cream">
      <Message data={msg} onChangeData={{ setMsg }} />
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        <div className="flex-1 flex flex-col justify-center items-center p-8 lg:p-0">
          <h2 className="text-4xl lg:text-5xl text-primary font-bold mb-8 lg:mb-12 ml-11">
            Subscribe to our newsletter
          </h2>
          <div className="relative w-full max-w-md">
            <input
              className="bg-transparent border-b-2 placeholder-gray-400 text-gray-800 outline-none w-full pr-12"
              type="email"
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
            <HiOutlineArrowNarrowRight
              className="absolute top-5 right-5 text-primary text-3xl"
              onClick={handleNewsletterSend}
            />
          </div>
        </div>
        <div className="flex-1 flex justify-center items-end">
          <div className="w-60 h-60 lg:w-96 lg:h-96 relative">
            <Image src={dogImage} alt="Dog" layout="fill" objectFit="contain" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
