import {Outlet} from "react-router-dom";
import Header from "./UI/Header.jsx";
import Footer from "./UI/Footer.jsx";
import CustomSeparator from "./UI/BreadCrumb.jsx";

function RootLayout() {
    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <Header/>

            <div style={{ paddingTop: '80px',
                backgroundColor: "#f5f5f5",
            }}>
                <CustomSeparator/>
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default RootLayout;
