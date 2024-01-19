import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantMenu from "./components/RestautantMenu";
import UserContext from "./utils/userContext";


const AppLayout = () => {
  const [userName, setUserName] = useState();

  useEffect(()=> {
    setUserName('Gaurav');
  }, [])
  return (
    <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
      <div className="app-layout">
        <Header/>
        <Outlet />
      </div>
    </UserContext.Provider>
  )
}

const About = lazy(()=> import('./components/About'));

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Body />
      },
      {
        path: '/about',
        element: <Suspense fallback={<h1>Loading...</h1>}> <About /></Suspense>
      },
      {
        path: '/contact',
        element: <Contact />
      },
      {
        path: '/restaurant/:resId',
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
