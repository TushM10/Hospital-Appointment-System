import { signInWithEmailAndPassword } from '@firebase/auth';
import React,{ useState } from 'react'
import { Col, Container, Form, Row, Button, Modal } from 'react-bootstrap'
import { Link, Redirect } from 'react-router-dom'
import { useProfile } from '../../global/context/Profile.Context';
import { auth } from '../../global/firebase/firebaseConfig';

function Login() {
    const [show, setShow] = useState(false);
    const [adminloading, setAdminLoading] = useState(false)
    const [error, setError] = useState('')
    const [user,setUser] = useState({
        email:'',
        password:'',
    });
     // ========Cheack User Login Or Not============
     const {userProfile,isloading} = useProfile()
     if(userProfile && !isloading){
         return <Redirect to="/"/>
     }
    const SIGNUP = [
        {
            name:'email',
            value:user.email,
            type:'email',
            text:'Enter Your Email'
        },
        {
            name:'password',
            value:user.password,
            type:'password',
            text:'Enter Your Password'
        }
    ]
    let name, value;
    const inputHandler = (e)=>{
        name = e.target.name;
        value= e.target.value;
        setUser({...user, [name]:value});
    }
    const signin = async(e)=>{
        e.preventDefault();
        if(!user.email || !user.password){
            setError("Oh NO! You have not entered both the fields properly, Please enter both fields properly.")
            setShow(true)
        }else{
            setAdminLoading(true)
            try{
                await signInWithEmailAndPassword(auth, user.email, user.password);
                setAdminLoading(false)
                setError("You Are Logged In")
                setShow(true)
            }catch(e){
                setAdminLoading(false)
                setError(e.message)
                setShow(true)
            }
        }
    }
    return (
        <Container className="mt-4 account_form">
            <Row id="account_heading">
                <h3>Login Now</h3>
                <p>Login your self</p>
            </Row>
            <Form className="account_form_body mt-2">
                <Modal show={show} onHide={()=>setShow(false)}>
                    <Modal.Header  closeButton>
                        <Modal.Title className="text-bold">{error} !</Modal.Title>
                    </Modal.Header>
                </Modal>
                {SIGNUP.map(item =>(
                    <Row key={item.text}>
                        <Col xl={6}>
                            <Form.Floating className="mb-3">
                                <Form.Control
                                name={item.name}
                                type={item.type}
                                value={item.value}
                                onChange={inputHandler}
                                placeholder="name@example.com"
                                />
                                <label htmlFor="floatingInputCustom">{item.text}</label>
                            </Form.Floating>
                        </Col>
                    </Row>
                    ))
                }
                <Row>
                    <Col xl={6} className="account_button text-center mt-2">
                        <Button type="submit" onClick={signin}>{adminloading ? 'Loading..' : 'Login Now'}</Button>
                        <p>You are Not Signup,Please <Link to="/signup">signup Here.</Link></p>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default Login