import Avatar from '@mui/material/Avatar';
import Logo from "../Images/logo_page.png";
import "./navBar.css"

export default function NavBar(){
    return(
        <div className="nav-bar">
            <div className="brand-info">
                <img src={Logo}></img>
                <h1  style={{display:"inline"}}>KashFlow</h1>
            </div>
            <div className="user-info">
                <Avatar src="/broken-image.jpg" sx={{width:53 ,height:53,cursor:"pointer"}} />
            </div>
        </div>
    )
}