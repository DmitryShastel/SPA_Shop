import './app.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NotificationsSignInPageError from "../sigIn/SignIn";
import BasicExampleDataGrid from "../listOfProduct/listOfProduct";
import {ProductCard} from "../card/Card";
import {Header} from "../header/Header";
import {SignUp} from "../signUp/SignUp";

export const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Routes>
                    <Route path="/" element={<Navigate to="/listOfProduct" replace/>}/>
                    <Route path="/auth/login" element={<NotificationsSignInPageError/>}/>
                    <Route path="/register" element={<SignUp/>}/>
                    <Route path="/listOfProduct" element={<BasicExampleDataGrid/>}/>
                    <Route path="/cart" element={<ProductCard/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
