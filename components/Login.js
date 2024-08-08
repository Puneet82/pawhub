import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { message } from "../helpers/Message";
import Message from "./Message";
import API from "../api_endpoints";

const Login = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [msg, setMsg] = useState(message);

  const [formData, setformData] = useState({
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    setformData({ ...formData, email: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setformData({ ...formData, password: e.target.value });
  };

  const clearForm = () => {
    setformData({ email: "", password: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/auth/signin", {
      email: formData.email,
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

  const handleGoogleLogin = async () => {
    if (token) {
      const decodedToken = jwtDecode(token.credential);
      let isAdmin = false;
      API.post("/auth/signin/google", { email: decodedToken.email, name: decodedToken.name })
        .then((response) => {
          const { data } = response;
          localStorage.setItem("profile", JSON.stringify(data));
          setMsg({ showMsg: true, success: data.success, text: data.message });
          isAdmin = data?.result?.isAdmin;

          console.log(data);

          if (isAdmin) {
            router.push("/admin/dashboard");
          } else {
            router.push("/user_dashboard");
          }
        })
        .catch((error) => {
          const { data } = error.response;
          setMsg({ showMsg: true, success: data.success, text: data.message });
        });
    }
  };

  return (
    <div className="container mx-auto p-4">
      <Message data={msg} onChangeData={{ setMsg }} />
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit}>
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
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            onChange={handlePasswordChange}
            className="shadow appearance-none bg-white border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="flex items-center justify-start">
          <button
            type="submit"
            className="bg-primary hover:bg-secondary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
          <Link href="/signuppage" className="text-lg hover-bg:[#234d57] px-4 py-2">
            New account?
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <hr style={{ width: "50%", textAlign: "left", marginLeft: "0", marginRight: "2px" }} />
          or
          <hr style={{ width: "50%", textAlign: "right", marginRight: "0", marginLeft: "2px" }} />
        </div>
        <div className="flex items-center justify-center">
          <GoogleOAuthProvider clientId="983168833447-21sl4t08632gmqumllbb3tthmj8aktag.apps.googleusercontent.com">
            <GoogleLogin
              text="Continue with Google"
              shape="circle"
              useOneTap
              onSuccess={(credentialResponse) => {
                setToken(credentialResponse);
                handleGoogleLogin();
              }}
              onError={() => {
                console.log("Google auth failed");
              }}
            />
          </GoogleOAuthProvider>
        </div>
      </form>
    </div>
  );
};

export default Login;
