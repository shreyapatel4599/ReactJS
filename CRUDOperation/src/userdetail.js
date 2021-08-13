import React from 'react';

const UserDetail = ({formdata, setFormData, submit_status, display, setDisplay,submitbtn,setSubmitbtn,editid, setEditid,setEditeddata,setSubmitted}) => {

    const deleteUser = (index) => {
    setDisplay((oldItems)=> {
        return oldItems.filter((arrelem,idx) => {
          return idx != index;
        })
      })
    }

   const editUser = (elem,index) => {
    
       const data = {
        name: elem.name,
        email: elem.email,
        phone: elem.phone
       };
        setFormData(data);
       // setSubmitted(false);
        setSubmitbtn(false);
       // setSubmitted(false);
       setEditid(index);
       
    }

    //console.log(formdata);
    return(
        <>
            <div className="user_detail_area">
                <center>
                    <table id="user_detail">
                        <thead>
                            <tr>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone</th>
                              <th colSpan="2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                        {submit_status && 
                            display.map((elem,index)=>{
                                return <tr key={index}>
                              <td>{elem.name}</td>
                              <td>{elem.email}</td>
                              <td>{elem.phone}</td>
                              <td><button className="btn" onClick={() => editUser(elem,index)}>Edit</button></td>
                              <td><button className="btn" onClick={() => deleteUser(index)}>Delete</button></td>
                            </tr>
                            })
                        }
                        </tbody>
                    </table>
                </center>
            </div>
        </>
    )
}
export default UserDetail;