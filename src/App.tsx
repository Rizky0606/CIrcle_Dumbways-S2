import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import Home from "./pages/home";
import DetailThreads from "./components/layouts/DetailThread/DetailThread";
import Layout from "./components/layouts/Layout";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store/type/RootState";
import { useEffect, useState } from "react";
import { API, setAuthToken } from "./libs/api";
import { AUTH_CHECK, AUTH_ERROR } from "./store/RootReducer";

const App = () => {
  const auth = useSelector((state: RootState) => state.auth);

  const [isLoading, setIsLoading] = useState<boolean>(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const authCheck = async () => {
    try {
      setAuthToken(localStorage.token);
      const response = await API.get("/auth/check");
      dispatch(AUTH_CHECK(response.data.user));
      setIsLoading(false);
    } catch (error) {
      dispatch(AUTH_ERROR());
      console.log("auth check error");
      setIsLoading(false);
      navigate("/auth/login");
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      authCheck();
    } else {
      setIsLoading(false);
    }
  }, []);

  // Private Route
  const IsNotLogin = () => {
    if (!auth.email) {
      return <Navigate to="/auth/login" />;
    } else {
      return <Layout />;
    }
  };

  // const isLogin = () => {};

  return (
    <div
      style={{
        backgroundColor: "#1d1d1d",
        minHeight: "100dvh",
      }}
    >
      {isLoading ? null : (
        <Routes>
          <Route path="/" element={<IsNotLogin />}>
            <Route path="/" element={<Home />} />
            <Route path="/detail-thread/:id" element={<DetailThreads />} />
          </Route>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
