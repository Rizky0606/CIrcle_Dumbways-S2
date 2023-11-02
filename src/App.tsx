import { Routes, Route, useNavigate, Navigate, Outlet } from "react-router-dom";
import Home from "./pages/home";
import DetailThreads from "./components/layouts/DetailThread/DetailThread";
import Layout from "./components/layouts/Layout";
import Login from "./features/auth/components/Login";
import Register from "./features/auth/components/Register";
import { useDispatch } from "react-redux";
// import { RootState } from "./store/type/RootState";
import { useEffect, useState } from "react";
import { API, setAuthToken } from "./libs/api";
import { AUTH_CHECK, AUTH_ERROR } from "./store/RootReducer";
import Profile from "./pages/Profile/Profile";
import SearchUser from "./pages/SearchUser/SearchUser";
import DetailProfile from "./pages/DetailProfile/DetailProfile";

const App = () => {
  // const auth = useSelector((state: RootState) => state.auth.username);
  // console.log(auth);

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
    if (!localStorage.token) {
      return <Navigate to="/auth/login" />;
      // return <Outlet />;
    } else {
      return <Layout />;
    }
  };

  const IsLogin = () => {
    if (localStorage.token) {
      return <Navigate to="/" />;
    } else {
      return <Outlet />;
    }
  };

  return (
    <>
      {isLoading ? null : (
        <div
          style={{
            backgroundColor: "#1d1d1d",
            minHeight: "100dvh",
          }}
        >
          <Routes>
            <Route path="/" element={<IsNotLogin />}>
              <Route index element={<Home />} />
              <Route path="/detail-thread/:id" element={<DetailThreads />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/edit-proile/:id" />
              <Route path="/search" element={<SearchUser />} />
              <Route path="/detail-profile/:id" element={<DetailProfile />} />
            </Route>

            <Route element={<IsLogin />}>
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/register" element={<Register />} />
            </Route>
          </Routes>
        </div>
      )}
    </>
  );
};

export default App;
