import './app.scss'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import NotificationsSignInPageError from "../sigIn/SignIn";
import BasicExampleDataGrid from "../listOfProduct/listOfProduct";
import {ProductCard} from "../card/Card";
import {CheckUpToken} from "../../../features/protectedRoute/ProtectedRoute";

export const App = () => {

    return (
        <BrowserRouter>
            <CheckUpToken>
                <div>
                    <Routes>
                        <Route path="/" element={<Navigate to="/auth/login" replace/>}/>
                        <Route path="/auth/login" element={<NotificationsSignInPageError/>}/>
                        <Route path="/listOfProduct" element={<BasicExampleDataGrid/>}/>
                        <Route path="/cart" element={<ProductCard/>}/>
                    </Routes>
                </div>
            </CheckUpToken>
        </BrowserRouter>
    );
};
