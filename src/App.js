import React, { lazy, useContext, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./components/About";
import Contact from "./components/Contact";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import Profile from "./components/ProfileClass";
import userContext from "./components/userContext";
import Footer from "./components/Footer";

const Instamart = lazy(() => import("./components/Instamart"));

const App = () => {
  const [user, setUser] = useState({
    name: "pavam",
    email: "pujithamedi@gmail.com",
  });
  return (
    <div className="pb-4">
      <userContext.Provider value={{ user, setUser }}>
        <Header></Header>
        <Outlet></Outlet>
        <Footer />
      </userContext.Provider>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1 className="font-bold">loading</h1>}>
            <Body />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/rest/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "instamart",
        element: (
          <Suspense fallback={<h1 className="font-bold">loading</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <AboutUs />,
    children: [
      {
        path: "profile",
        element: <Profile></Profile>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}></RouterProvider>);
