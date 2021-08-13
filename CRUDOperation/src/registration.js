import React,{useState} from 'react';
import UserDetail from './userdetail';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import validator from 'validator';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
Modal.setAppElement('#root');
const Registration = () => {

const [state, setState] = React.useState({
        name: "",
        email: "",
        phone:""
      })

const [submitted, setSubmitted] = useState(false);
const[display,setDisplay] = useState([]);
const[submitbtn,setSubmitbtn] = useState(true);
const[editid,setEditid] = useState(null);
const[editeddata,setEditeddata] = useState({});
const [nameerror, setNameerror] = useState("");
const [emailerror, setEmailerror] = useState("");
const [phoneerror, setPhoneerror] = useState("");


const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    
  }

  function closeModal() {
    setIsOpen(false);
  }


function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state, [evt.target.name]: value
    });
}

const onSubmit = (e) =>{
    e.preventDefault()
    if(state.name === ''){
        setNameerror("Name should not empty");
    }
    else if(state.name !== '' && Number(state.name)){
        setNameerror("Invalid Name!! Enter alphabets only");
    }
    else if(state.email === ''){
        setNameerror("");
        setEmailerror("Email should not empty");
    }
    else if(state.email !== '' && !validator.isEmail(state.email)){
        
        setEmailerror("Invalid email");
    }
     else if(state.phone === ''){
        setEmailerror("");
        setPhoneerror("Contact should not empty");
    }
    
    else if(state.phone !== '' && !Number(state.phone)){
        setPhoneerror("Enter digit only");
    }
    else if(state.phone.length !== 10){
        setPhoneerror("Enter 10 digit Mobile no. only");
    }
    else {
        setNameerror("");
        setEmailerror("");
        setPhoneerror("");
        setSubmitted(true);

        if(submitbtn){
            openModal();
            setDisplay((oldItems) => {
                return [...oldItems, state];
            });
        }
        else {
            openModal();
            setDisplay((oldItems)=> {
                return oldItems.filter((arrelem,idx) => {
                    if(idx === editid){
                        oldItems[idx].name = state.name;
                        oldItems[idx].email = state.email;
                        oldItems[idx].phone = state.phone;
    
                        return setDisplay(oldItems)
                    }
                })
            })
            setSubmitbtn(true);
        }
        setState({
            name: "",
            email: "",
            phone:""
          });
    }
}

    return(
    <>
        <div className="form_section">
            <form className="myForm">
                    <div className="row">
                        <div className="column">
                            <div className="input-group">
                                <label>
                                    Name*
                                </label>
                                    <input
                                      type="text"
                                      name="name"
                                      value={state.name}
                                      onChange={handleChange}
                                    />
                            </div>
                            <div className="row">
                                <p style={{color:'red', textAlign: 'center'}}>{nameerror}</p>
                            </div>
                            <div className="input-group">
                                <label>
                                    Email*
                                </label>
                                    <input
                                      type="text"
                                      name="email"
                                      value={state.email}
                                      onChange={handleChange}
                                    />
                            </div>
                            <div className="row">
                                <p style={{color:'red', textAlign: 'center'}}>{emailerror}</p>
                            </div>
                            <div className="input-group">
                                <label>
                                    Phone*
                                </label>
                                    <input
                                      type="text"
                                      name="phone"
                                      value={state.phone}
                                      onChange={handleChange}
                                      maxLength="10"
                                    />
                            </div>
                            <div className="row">
                                <p style={{color:'red', textAlign: 'center'}}>{phoneerror}</p>
                            </div>
                        </div>         
                    </div>
                    <div className="row">
                        {submitbtn ? <button onClick={onSubmit}>Submit</button> : <button onClick={onSubmit}>Update</button> }
                     </div>
                    <div className="row">
                        {/* {submitted && state.name && state.email && state.phone && <div className='success-message'>Success! Thank you for registering</div>} */}
                        <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <p>Success! Thank you for registering</p>
                        </Modal>
                    </div>
                    
                    
                </form>
        </div>
        <div className="user_detail_area">
            <UserDetail formdata={state} 
                setFormData={setState} 
                submit_status={submitted} 
                setSubmitted={setSubmitted}
                display={display} 
                setDisplay={setDisplay} 
                submitbtn={submitbtn}
                setSubmitbtn={setSubmitbtn}
                editid ={editid}
                setEditid={setEditid}
                setEditeddata ={setEditeddata}
            />
        </div>
    </>
    )
}
export default Registration;