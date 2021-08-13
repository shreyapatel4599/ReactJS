import React,{ useState } from 'react';

const OtpVerification = () =>{
    const [mobile, setMobile] = useState(1234567890);
    const [otp, setotp] = useState(12345);
    const [userotp,setUserotp] = useState(new Array(5).fill(""));

    const handleDigit = (element, index) => {
        if(isNaN(element.value)){
            return false;
        }
        setUserotp([...userotp.map((d, idx) => (idx === index) ? element.value : d )]);
        if(element.nextSibling){
            element.nextSibling.focus();
        }
    };

   const validateOtp = () => {
        let userinput = userotp.join("");
        if(userinput == otp){
            document.getElementById("msg").innerHTML = "OTP matched";
        }
        else{
            document.getElementById("msg").innerHTML = "incorrect OTP";
        }
   }

    return(
        <div className="section">
            <h2>Verify OTP</h2>
            <p>OTP sent to your registered mobile number {mobile}</p>
            <form>
                <div className="form-area">
                    {
                        userotp.map((data, index)=>{
                            return  (<input type="text"
                                            name="userotp"
                                            maxLength="1" 
                                            pattern="[0-9]" 
                                            value={data}
                                            key={index}
                                            onChange={(e) => handleDigit(e.target, index)}
                                            onFocus = {(e) => e.target.select()}
                                    />);
                        })
                    }
                </div>
            </form>
            <div className="btn-area">
                <button className="btn" onClick={validateOtp}>Next</button><br />
                <a className="resendotp" href="#">Resend OTP</a><br/>
                <p id="msg"></p>
            </div>
        </div>
    )
}

export default OtpVerification;