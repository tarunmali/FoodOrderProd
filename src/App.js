import React,{lazy, Suspense, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import {Provider} from 'react-redux';


import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/Footer';
// import About from './components/About';
import Error from './components/Error';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
// import Instamart from './components/Instamart';
// import UserContext from './utils_common_config/UserContext';
import store from './utils_common_config/store';
import Cart from './components/Cart';

const Instamart = lazy(()=>import('./components/Instamart'));
 

const App = () =>  {
    // const [user,setUser]=useState({
    //     name:"Tarun",
    //     email:"t@gmail.com"
    // });
    
    return(
    <div class="app">
        <Provider store={store}>
        {/* <UserContext.Provider value={{user}} > */}
            
        <Header/>
        <Outlet/>
        <Footer/>
 
    {/* </UserContext.Provider> */}
    </Provider>

    </div>
)}

const appRouter=createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <Error/>,
        children: [
            {
                path: "/",
                element: <Body user={{
                    name:"Tarun"
                }}/>
            },
            // {
            //     path: "/about",
            //     element: <About/> 
            //  },
             {
                path: "/contact",
                element: <Contact/>
             },
             {
                path: "/restaurant/:resId",
                element: <RestaurantMenu/>
             },

            {
                path: "/instamart",
                element:( 
                <Suspense fallback={<Shimmer/>}>
                    <Instamart/>
                </Suspense>),
            },
            {
                path: "/cart",
                element:  <Cart/>
            }

        ]
    },

]);


const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);