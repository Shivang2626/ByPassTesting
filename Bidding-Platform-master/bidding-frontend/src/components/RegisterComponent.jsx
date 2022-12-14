import React, { Component } from 'react';
// import validator from 'validator'
import RegisterService from '../services/RegisterService';
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save';
import CancelIcon from '@material-ui/icons/Cancel';
import { createMuiTheme } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Footer from './footer'
import image from '../Register.png'
class RegisterComponent extends Component {
    constructor(props){
        super(props);

        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            contactNo: '',
            gender: ''
        }

        this.changeContactHandler = this.changeContactHandler.bind(this);
        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveUser = this.saveUser.bind(this);
    }
    // const [emailError, setEmailError] = useState('');

    changeFirstNameHandler = (e) => {
        this.setState({firstName: e.target.value});
    }

    changeContactHandler = (e) => {
        this.setState({contactNo: e.target.value});
    }

    changeEmailHandler = (e) => {
    //     var re =new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    //     e.target.
    // if (re.test(e) ) {
    //     alert("Enter valid email");
    //     return;
    // }
    // else
        this.setState({email: e.target.value});
    }

    changeLastNameHandler= (e) => {
        this.setState({lastName: e.target.value});
    }

    changeGenderHandler= (e) => {
        this.setState({gender: e.target.value});
    }

    saveUser = (event) => {
        event.preventDefault();
        let newUser = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            contactNo: this.state.contactNo,
            gender: this.state.gender

        }

        // if(newUser.firstName === ""){

        //     alert('First name cannot be blank.');
        //     return ;
        //     }
        
        // if(newUser.email === ""){

        //     alert('Email cannot be null.');
        //     return ;
        //  
             if(newUser.contactNo.length !== 10){
                alert("Please enter valid phone number.");
                return;
            }   
        
        
        // if(newUser.gender === ""){

        //     alert('Select a valid gender.');
        //     return ;
        //     }
        
        RegisterService.registerUser(newUser).then(res => {
            this.props.history.push('/products');
        });
    }


    cancel(){
        this.props.history.push('/products');
    }

    

    render() {
        
        const theme = createMuiTheme({
            palette: {
              primary: {
                // Purple and green play nicely together.
                main: '#388e3c',
              },
              secondary: {
                // This is green.A700 as hex.
                main: '#d32f2f',
              },
            },
          });
        return (
            <div className='bg-image' style={{
                backgroundImage:`url(${image})`,
                width: 'relative'
                
            }}>
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center"><b>Register User</b></h3>
                            <Divider variant="middle" />
                            <br></br>
                            <div className="card-body">
                                <form onSubmit={this.saveUser}>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input type="text" required placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input type="text" placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email:</label>
                                        <input type="email" required placeholder="Email Address" name="email" className="form-control"
                                            value={this.state.email} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Contact Number:</label>
                                        <input type="number" placeholder="Contact Number" name="contact" className="form-control"
                                            value={this.state.contactNo} onChange={this.changeContactHandler} />
                                    </div>
                                    <div className="form-group" required>
                                        <input type="radio" name="gender" 
                                            value="Male" 
                                            onChange={this.changeGenderHandler}/> Male
                                            <br />
                                         <input type="radio" name="gender" 
                                            value="Female" 
                                            onChange={this.changeGenderHandler}/> Female
                                    </div>

                                    <Button startIcon={<SaveIcon/>} variant='contained'  color='primary' className="btn btn-success" type="submit">Save</Button>
                                    <Button startIcon={<CancelIcon/>} variant='contained'  color='secondary' className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default RegisterComponent;