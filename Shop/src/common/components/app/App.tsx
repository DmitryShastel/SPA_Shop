import './app.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NotificationsSignInPageError from "../sigIn/SignIn";
import BasicExampleDataGrid from "../listOfProduct/listOfProduct";
import {ProductCard} from "../card/Card";

export const App = () => {

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Navigate to="/auth/login" replace />}/>
                    <Route path="/auth/login" element={<NotificationsSignInPageError/>} />
                    <Route path="/listOfProduct" element={<BasicExampleDataGrid/>}/>
                    <Route path="/card" element={<ProductCard/>}/>
                </Routes>
            </div>
        </BrowserRouter>
    );
};
