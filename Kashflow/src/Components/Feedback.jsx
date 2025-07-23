import Lottie from "lottie-react";
import feedbackAnimation from "../assets/feedback.json";
import { useState } from "react";
import average from "../assets/average.json";
import bad from "../assets/bad.json";
import smile from "../assets/smile.json";
import Sad from "../assets/Sad.json";
import happy from "../assets/happy.json";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import EmailIcon from '@mui/icons-material/Email';
import "./Feedback.css";

export default function Feedback(){
    let [des,setDes]=useState("");
    let [cond,setCond]=useState(false);
    let [selectedDes,setSelectedDes]=useState("");
    let [data,setData]=useState({username:"",email:""});
    let [active,setActive]=useState(false)

    let description=[
        {name:"happy",para:"This is great!"},
        {name:"smile",para:"OMG! I love it!"},
        {name:"average",para:"It's okay,I guess"},
        {name:"bad",para:"It sucks..."},
        {name:"sad",para:"Oh God! why?"}
    ];

    function hoverHandler(key){
        let data=description.filter((el)=>(el.name===key));
        setDes(data[0].para);
        setCond(true);
    }

    function clickhandler(key){
        setSelectedDes(key);
    }

    function dataHandler(event){
        setData((data)=>{
            return{
                ...data,[event.target.name]:event.target.value
            }
        })
    }


    return(
        <div className="feedback">
            <div className="animation">
                <Lottie animationData={feedbackAnimation} loop={true} autoplay={true}/>
            </div>
            <div className="feedback-form">
                <div className="head">
                    <h3>Help Us Improve</h3>
                </div>
                <div className="form-data">
                    <form onSubmit={(e)=>{e.preventDefault(); console.log(data); setActive(true)}}>      
                        <div className="input-icon">
                            <AccountCircleIcon className={`icon ${data.username?"active":""}`}/>
                            <input placeholder="enter username" type="text" className="input" name="username" value={data.username} onChange={dataHandler}></input>
                        </div>
                        <div className="input-icon">
                            <EmailIcon className={`icon  ${data.email?"active":""}`}/>
                            <input placeholder="enter email" type="email" className="input" name="email" value={data.email} onChange={dataHandler}></input>
                        </div>
                        <h4>Rate your Experience</h4>
                        <div className="emojis">
                            <div style={{transform: selectedDes === "sad" ? "scale(1.3)": "none"}}>
                                <Lottie animationData={Sad} loop={true} autoplay={true} style={{width:80,height:80}} onMouseOver={()=>hoverHandler("sad")} onClick={()=>clickhandler("sad")}/>
                            </div>
                            <div style={{transform: selectedDes === "bad" ? "scale(1.3)": "none"}}>
                                <Lottie animationData={bad} loop={true} autoplay={true} style={{width:80,height:80}} onMouseOver={()=>hoverHandler("bad")} onClick={()=>clickhandler("bad")}/>
                            </div>
                            <div style={{transform: selectedDes === "average" ? "scale(1.3)": "none"}}>
                                <Lottie animationData={average} loop={true} autoplay={true} style={{width:90,height:90}} onMouseOver={()=>hoverHandler("average")} onClick={()=>clickhandler("average")}/>
                            </div>
                            <div style={{transform: selectedDes === "happy" ? "scale(1.3)": "none"}}>
                                <Lottie animationData={happy} loop={true} autoplay={true} style={{width:85,height:85}} onMouseOver={()=>hoverHandler("happy")} onClick={()=>clickhandler("happy")}/>
                            </div>
                            <div style={{transform: selectedDes === "smile" ? "scale(1.3)": "none"}}>
                                <Lottie animationData={smile} loop={true} autoplay={true} style={{width:95,height:95, }} onMouseOver={()=>hoverHandler("smile")} onClick={()=>clickhandler("smile")}/>
                            </div>
                        </div>
                        <p style={{textAlign:"center", fontWeight:"500", marginTop:"0.7rem"}}>
                                    {cond ? des : description.find(el => el.name === selectedDes)?.para}
                        </p>
                        <div className="text-area">
                            <h6>Share your Experience with Kashflow</h6>
                            <textarea placeholder="please describe your experience in detail"/>
                        </div>
                        <div className="submit">
                            <button type="submit" className={`button ${active?"clicked":""}`}>
                                <i className={`fa-solid fa-circle-check check ${active?"clicked":""}`}></i>
                                <span className={`success ${active?"clicked":""}`}>Success</span>
                                <i className={`fa-solid fa-plane icon-plane ${active?"clicked":""}`}></i>
                                <span style={{color:"white",fontSize:"1.4rem"}} className={`text ${active?"clicked":""}`}>Send Feedback</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}