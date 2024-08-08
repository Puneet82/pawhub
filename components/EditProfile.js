import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { message } from "../helpers/Message";
import Message from "./Message";
import LoadingScreen from "./LoadingScreen";
import API from "../api_endpoints";

const EditProfile = () => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [msg, setMsg] = useState(message);
  const [isBusy, setIsBusy] = useState(false);
  const [formData, setformData] = useState({
    name: "",
    phone: "",
    password: "",
    otp: "",
  });

  const handlePhoneChange = (e) => {
    setformData({ ...formData, phone: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setformData({ ...formData, password: e.target.value });
  };

  const handleOTPChange = (e) => {
    setformData({ ...formData, otp: e.target.value });
  };

  const handleNameChange = (e) => {
    setformData({ ...formData, name: e.target.value });
  };

  const clearForm = () => {
    setformData({ name: "", email: "", phone: "", password: "", otp: "" });
  };

  const handleSendOTP = () => {
    setIsBusy(true);
    API.post("/auth/otp", {
      email: user?.email,
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

    API.patch("/auth/update/profile", {
      email: user?.email,
      phone: formData.phone,
      name: formData.name,
      otp: formData.otp,
      password: formData.password,
    })
      .then((response) => {
        const { data, status } = response;
        if (status === 201) {
          localStorage.setItem("profile", JSON.stringify(data));
          setMsg({ showMsg: true, success: data.success, text: data.message });
          router.push("/");
        }
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    clearForm();
  };

  useEffect(() => {
    const session = JSON.parse(localStorage.getItem("profile"));
    setUser(session?.data?.result);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <Message data={msg} onChangeData={{ setMsg }} />
      <LoadingScreen data={{ isBusy }} onChangeData={{ setIsBusy }} />
      <h1 className="text-3xl font-bold mb-4">Update Account</h1>
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
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;
