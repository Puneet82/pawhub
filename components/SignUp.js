import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { message } from "../helpers/Message";
import Message from "./Message";
import LoadingScreen from "./LoadingScreen";
import API from "../api_endpoints";

const SignUp = () => {
  const router = useRouter();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    otp: "",
    isAdmin: false,
  });
  const [msg, setMsg] = useState(message);
  const [isBusy, setIsBusy] = useState(false);

  const handlePhoneChange = (e) => {
    setformData({ ...formData, phone: e.target.value });
  };

  const handleEmailChange = (e) => {
    setformData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setformData({ ...formData, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    setformData({ ...formData, confirmPassword: e.target.value });
  };

  const handleAdminFlagChange = (e) => {
    setformData({ ...formData, isAdmin: e.target.value });
  };

  const handleOTPChange = (e) => {
    setformData({ ...formData, otp: e.target.value });
  };

  const handleNameChange = (e) => {
    setformData({ ...formData, name: e.target.value });
  };

  const clearForm = () => {
    setformData({ name: "", email: "", phone: "", password: "", confirmPassword: "", otp: "", isAdmin: false });
  };

  const handleSendOTP = () => {
    setIsBusy(true);
    API.post("/auth/otp", {
      email: formData.email,
      phone: formData.phone,
    })
      .then((response) => {
        const { data, status } = response;
        setIsBusy(false);
        if (status === 200) {
          setMsg({ showMsg: true, success: data.success, text: data.message });
        }
      })
      .catch((error) => {
        const { data } = error.response;
        setIsBusy(false);
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/auth/signup", {
      email: formData.email,
      phone: formData.phone,
      isAdmin: formData.isAdmin,
      name: formData.name,
      otp: formData.otp,
      password: formData.password,
    })
      .then((response) => {
        const { data, status } = response;
        if (status === 201) {
          localStorage.setItem("profile", JSON.stringify(data));
          setMsg({ showMsg: true, success: data.success, text: data.message });
          clearForm();
          router.push("/");
        }
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
  };

  return (
    <div className="container mx-auto p-4">
      <Message data={msg} onChangeData={{ setMsg }} />
      <LoadingScreen data={{ isBusy }} onChangeData={{ setIsBusy }} />
      <h1 className="text-3xl font-bold mb-4">New Account</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4 ">
          <label className="block text-gray-700 text-sm font-bold mb-2 " htmlFor="name">
            Name
          </label>
          <input
            id="name"
            type="text"
            onChange={handleNameChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            onChange={handleEmailChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="text"
            onChange={handlePhoneChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 bg-color-white leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password_confirm">
            Confirm Password
          </label>
          <input
            id="password_confirm"
            type="password"
            onChange={handleConfirmPasswordChange}
            className="shadow appearance-none border bg-white rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            type="button"
            onClick={handleSendOTP}
            className="bg-primary hover:bg-secondary text-white py-2 px-2 rounded focus:outline-none focus:shadow-outline"
          >
            Send OTP
          </button>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="otp">
            Enter OTP
          </label>
          <input
            id="otp"
            type="text"
            onChange={handleOTPChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-start">
          <Link href="/" className="text-lg px-4 py-4">
            &#8592;
          </Link>
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Sign Up
          </button>
          <Link href="/loginpage" className="text-lg hover-bg:[#234d57] px-4 py-2">
            Login instead?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
