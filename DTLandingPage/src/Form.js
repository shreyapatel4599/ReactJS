import React,{useState} from 'react';

const Form = () => {
    const[RegisterDetails, setRegisterDetails] = useState({
        Name : "",
        ph_code : "+91",
        phone: "",
        email: "",
        selectevent: "Select Event",
        message: "",
        tick: ""
    });

    const onNameChange = (e) => {
         setRegisterDetails({...RegisterDetails,Name:e.target.value})
    }
    const onPhoneCodeChange = (e) => {
        setRegisterDetails({...RegisterDetails,ph_code:e.target.value})
   }
   const onPhoneChange = (e) => {
    setRegisterDetails({...RegisterDetails,phone:e.target.value})
    }
    const onEmailChange = (e) => {
        setRegisterDetails({...RegisterDetails,email:e.target.value})
    }
    const onSelectEventChange = (e) => {
        setRegisterDetails({...RegisterDetails,selectevent:e.target.value})
    }
    const onMessageChange = (e) => {
        setRegisterDetails({...RegisterDetails,message:e.target.value})
    }
    const onTickChange = (e) => {
        setRegisterDetails({...RegisterDetails,tick:e.target.value})
    }

    return(
        <div className="form-section">
            <h1>Register Now</h1>
            <form className="form-area">
                <div>
                    <input type="text" value={RegisterDetails.Name} placeholder="Name" className="input-general" onChange={(e) => onNameChange(e)} required/>
                </div><br />
                <div class="form-phone-row">                   
                        <select className="input-phone-code" onChange={(e) => onPhoneCodeChange(e)} required>
                            <option>{RegisterDetails.ph_code}</option>
                        </select>
                        <input type="text" value={RegisterDetails.phone} className="input-phone" onChange={(e) => onPhoneChange(e)} required/>
                </div><br />
                <div>
                    <input type="email" placeholder="Email I'd(Optional)" value={RegisterDetails.email} className="input-general" onChange={(e) => onEmailChange(e)} />
                </div><br />
                <div>
                    <select value="" className="input-general" onChange={(e) => onSelectEventChange(e)} required>
                        <option selected>{RegisterDetails.selectevent}</option>
                        <option>123</option>
                    </select><br />
                </div><br />
                <div>
                    <textarea Placeholder="Message" value={RegisterDetails.message} className="input-message" onChange={(e) => onMessageChange(e)} ></textarea>
                </div><br />
                <div>
                    <input type="checkbox" value={RegisterDetails.tick} onChange={(e) => onTickChange(e)} /><span style={{fontSize:'1.2rem'}}>Send details to whatsapp</span>
                </div><br />
                <div className="div-reg-btn">
                    <button className="register-btn">Register Now</button>
                </div><br />
            </form>
        </div>
    );
}
export default Form;