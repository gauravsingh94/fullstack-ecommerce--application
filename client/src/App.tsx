import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductsPage from "./pages/ProductPage/ProductsPage";
import OrderPlacePage from "./pages/OrderPlacePage/OrderPlacePage";
import ProductDetail from "./pages/ProductDetailPage/ProductDetailPage";
import SigninPage from "./pages/SigninPage/SigninPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import ProductsPageAdmin from "./pages/ProductPageAdmin/ProductPageAdmin";
import OrderListPage from "./pages/OrderListPageAdmin/OrderListPage";
import OrdersPage from "./pages/OrderDetailPageAdmin/OrderDetailPageAdmin";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/signin" element={<SigninPage />} />

          {/* User routes */}
          <Route path="/user/product" element={<ProductsPage />} />
          <Route path="/user/product/:productId" element={<ProductDetail />} />
          <Route path="/user/order/success" element={<OrderPlacePage />} />
          <Route path="/user/profile" element={<ProfilePage />} />

          {/* Admin routes */}
          <Route path="/admin/product" element={<ProductsPageAdmin />} />
          <Route path="/admin/order/list" element={<OrderListPage />} />
          <Route path="/admin/order/:orderId" element={<OrdersPage />} />
          <Route path="/admin/profile" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
