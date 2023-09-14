import { React } from "react";     
import HeaderUHD from "./Headers/HeaderUHD"
import HeaderQHD from "./Headers/HeaderQHD"
import HeaderFHD from "./Headers/HeaderFHD"
import HeaderHD from "./Headers/HeaderHD"

const Header = () => {
    let screenWidth = window.innerWidth;
    let headerIMG;
    if (screenWidth >= 0 && screenWidth <= 1280) {
        headerIMG = <HeaderHD />
    } else if (screenWidth >= 1280 && screenWidth <= 1920) {
        headerIMG = <HeaderFHD />
    } else if (screenWidth >= 1920 && screenWidth <= 2560) {
        headerIMG = <HeaderQHD />
    } else if (screenWidth > 2560) {
        headerIMG = <HeaderUHD />
    } else {
        headerIMG = <HeaderUHD />
    }
    console.log(screenWidth)
    
    return (
        <div>
            {headerIMG}
        </div>
    )
}

export default Header;