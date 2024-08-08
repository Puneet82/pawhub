import Header from "../components/Header";
import Footer from "../components/Footer";
import Payment from "../components/Payment";

const PaymentPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Payment />
      </div>
      <Footer />
    </div>
  );
};

export default PaymentPage;
