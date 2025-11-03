import './app.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NotificationsSignInPageError from "../sigIn/SignIn";
import BasicExampleDataGrid from "../listOfProduct/listOfProduct";
import {CheckUpToken} from "../../../features/protectedRoute/ProtectedRoute";
import {ProductCard} from "../card/Card";
import {ProductModal} from "../productModal/ProductModal";
import {Header} from "../header/Header";

export const App = () => {

    return (
        <BrowserRouter>
            <CheckUpToken>
                <div>
                    <Header/>
                    <Routes>
                        <Route path="/" element={<Navigate to="/auth/login" replace/>}/>
                        <Route path="/auth/login" element={<NotificationsSignInPageError/>}/>
                        <Route path="/listOfProduct" element={<BasicExampleDataGrid/>}/>
                        {/*<Route path="/listOfProduct" element={<ProductCard/>}/>*/}
                        <Route path="/cart" element={<ProductCard/>}/>
                    {/*    <Route path="/cart" element={<ProductModal/>}/>*/}
                    </Routes>
                </div>
            </CheckUpToken>
        </BrowserRouter>
    );
};
