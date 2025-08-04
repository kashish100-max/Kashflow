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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


export default function Feedback(){
    let [des,setDes]=useState("");
    let [cond,setCond]=useState(false);
    let [selectedDes,setSelectedDes]=useState("");
    let [data,setData]=useState({username:"",email:"",comment:"",wantToreffer:false});
    let [active,setActive]=useState(false);
    let [errors, setErrors] = useState({});

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
                ...data,[event.target.name]:event.target.value,wantToreffer:event.target.checked
            }
        })
    }

    function submitHandler(e){
        e.preventDefault();
        let newErrors = {};

        if (!data.username.trim()) newErrors.username = "Username is required";
        if (!data.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!data.comment.trim()) newErrors.comment = "Comment is required";
        if (!selectedDes) newErrors.rating = "Please select a rating";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        console.log(data); 
        setActive(true); 
        setData({username:"",email:"",comment:"",wantToreffer:false});
    }


    return(
        <div className="feedback">
            <div className="animation">
                <Lottie animationData={feedbackAnimation} loop={true} autoplay={true}/>
            </div>
            <div className={`feedback-form ${active?"clicked":""}`}>
                <div className="form-head">
                    <h3>Help Us Improve</h3>
                </div>
                <div className="form-data">
                    <form onSubmit={submitHandler}>      
                        <div className="input-icon">
                            <AccountCircleIcon className={`icon ${data.username?"active":""}`}/>
                            <input placeholder="enter username" type="text" className="inputField" name="username" value={data.username} onChange={dataHandler}></input>
                        </div>
                        {errors.username && <p className="error">{errors.username}</p>}
                        <div className="input-icon">
                            <EmailIcon className={`icon  ${data.email?"active":""}`}/>
                            <input placeholder="enter email" type="email" className="inputField" name="email" value={data.email} onChange={dataHandler}></input>
                        </div>
                        {errors.email && <p className="error">{errors.email}</p>}
                        <h4 className="rating-head">Rate your Experience</h4>
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
                        <p style={{textAlign:"center", fontWeight:"500", marginTop:"0.7rem",fontSize:"medium",color:"yellow"}}>
                                    {cond ? des : description.find(el => el.name === selectedDes)?.para}
                        </p>
                        {errors.rating && <p className="error">{errors.rating}</p>}
                        <div className="text-area">
                            <h3>Share your Experience with Kashflow</h3>
                            <textarea placeholder="please describe your experience in detail....." value={data.comment} name="comment" onChange={dataHandler}/>
                            {errors.comment && <p className="error">{errors.comment}</p>}
                        </div>
                        <FormControlLabel control={<Checkbox  checked={data.wantToreffer} sx={{color:"white",'&.Mui-checked': { color: "white"}}} onChange={dataHandler}/>} label="I'd love to refer Kashflow to my friends!" sx={{
    '& .MuiFormControlLabel-label': {
      color: '#E0E7FF',
      fontSize: '1rem',
      '&:hover': {
        color: '#67E8F9',
      },
    },
  }}/>
                        <div className="submit">
                            <button type="submit" className={`button ${active?"clicked":""}`}>
                                <i className={`fa-solid fa-circle-check check ${active?"clicked":""}`} style={{color:"#1c2e4a"}}></i>
                                <span className={`success ${active?"clicked":""}`} style={{color:"#1c2e4a"}}>Success</span>
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