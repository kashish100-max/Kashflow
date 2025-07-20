import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import "./Footer.css";

export default function Footer(){
    return(
        <div className="footer">
            <div className="content">
            <div className="about-us">
                <h2>About US</h2>
                <p>Kashflow is your smart finance buddy — helping you 
                    track budgets, manage expenses,
                    and understand your spending with ease. 
                    Built to simplify money management 
                    for students and young professionals.
                </p>
            </div>
            <div className="middle-part" style={{width:"30%"}}>
                <div className="Icons">
                    <div><a><LinkedInIcon/></a></div>
                    <div><a><GitHubIcon/></a></div>
                    <div><a><InstagramIcon/></a></div>
                </div>
                <p>Stay connected with us
                <br></br>Follow us for updates
                <br></br>Let's grow financially smart together</p>
                <a>Got feedback? Tell us!</a>
            </div>
            <div className="why-kashflow">
                <h2>Why Kashflow?</h2>
                <p>Track expenses
                <br></br>set goals
                <br></br>Clear Insights
                <br></br>Student-friendly</p>
            </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 Kashflow • Built with ❤️ by Kashish • All rights reserved</p>
            </div>
        </div>
    )
}