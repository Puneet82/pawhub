import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import Image from "next/image";
import Img1 from "../public/img/adoption/img1.png";
import { message } from "../helpers/Message";
import Message from "./Message";
import API from "../api_endpoints";

const Payment = () => {
  const [submitted, setSubmitted] = useState(false);
  const [userInfo, setuserInfo] = useState(null);
  const [msg, setMsg] = useState(message);
  const [bookingInfo, setbookingInfo] = useState({ service: "Loading..." });
  const router = useRouter();
  let price = 0;

  if (bookingInfo?.service === "SPA") {
    price = 100;
  } else if (bookingInfo?.service === "WALKING") {
    price = 75;
  } else if (bookingInfo?.service === "SWIMMING") {
    price = 200;
  } else if (bookingInfo?.service === "DAYCARE") {
    price = 350;
  }

  const initialValues = {
    service: "",
    name: "",
    cardNumber: "",
    cvv: "",
    expiry: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    cardNumber: Yup.string().required("Required"),
    cvv: Yup.string().required("Required"),
    expiry: Yup.string().required("Required"),
  });

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    // console.log(bookingInfo);
    API.patch(`/booking/edit/payment/${bookingInfo?._id}`)
      .then((response) => {
        const { data } = response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      })
      .catch((error) => {
        const { data } = error.response;
        setMsg({ showMsg: true, success: data.success, text: data.message });
      });
    setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
      resetForm();
    }, 100);
    router.push("/user_dashboard");
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("profile"));
    const booking = JSON.parse(localStorage.getItem("booking"));
    if (user?.data?.result) {
      setuserInfo(user?.data?.result);
    }
    if (booking) {
      setbookingInfo(booking);
    }
  }, []);

  return (
    <div className="book-us max-w-lg mx-auto p-8 bg-white shadow-lg rounded-lg mt-10">
      <Message data={msg} onChangeData={{ setMsg }} />
      <h1 className="text-4xl font-bold mb-6 text-center text-paw-blue text-[#388697]">Enter your payment details</h1>
      <div className="relative h-56 mb-8">
        <Image src={Img1} layout="fill" objectFit="cover" alt="Adoption Background" className="rounded-lg" />
      </div>
      {submitted ? (
        <div className="text-center text-xl text-green-600">Thanks! We have received your payment.</div>
      ) : (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <div className="form-group">
                <label htmlFor="service" className="block text-lg font-medium text-gray-800">
                  Service
                </label>
                <Field
                  type="text"
                  name="service"
                  value={bookingInfo?.service}
                  disabled
                  className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900"
                />
                <ErrorMessage name="service" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="name" className="block text-lg font-medium text-gray-800">
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900"
                />
                <ErrorMessage name="name" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="cardNumber" className="block text-lg font-medium text-gray-800">
                  Card Number
                </label>
                <Field
                  type="text"
                  name="cardNumber"
                  className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900"
                />
                <ErrorMessage name="cardNumber" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="cvv" className="block text-lg font-medium text-gray-800">
                  CVV
                </label>
                <Field
                  type="password"
                  name="cvv"
                  className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900"
                />
                <ErrorMessage name="cvv" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <div className="form-group">
                <label htmlFor="expiry" className="block text-lg font-medium text-gray-800">
                  Expiry
                </label>
                <Field
                  type="text"
                  name="expiry"
                  className="w-full mt-2 p-3 border border-gray-300 rounded bg-white text-gray-900"
                />
                <ErrorMessage name="expiry" component="div" className="text-red-600 text-sm mt-1" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-paw-blue text-white py-3 px-4 rounded-lg bg-[#388697] hover:bg-paw-dark-blue"
              >
                {isSubmitting ? "Submitting..." : `Checkout($${price})`}
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default Payment;
