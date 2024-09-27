import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Products from "./pages/Products.jsx";
import AboutUs from "./pages/Support.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import DetailProduct from "./pages/DetailProduct.jsx";
import NotFound from "./pages/NotFound.jsx";
import Cart from "./pages/Cart.jsx";
import Register from "./pages/Register.jsx";
import User from "./pages/User.jsx";
import "./scss/App.scss";
function App() {
	return (
		<BrowserRouter basename={import.meta.env.BASE_URL}>
			<Header />
			<div className="main container-fluid px-md-3 p-0">
				<Routes>
					<Route index element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/contact-us" element={<ContactUs />} />
					<Route path="/support" element={<AboutUs />} />
					<Route path="/detail" element={<DetailProduct />} />
					<Route path="/register" element={<Register />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/user" element={<User />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
