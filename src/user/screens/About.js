import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IMAGE from '../../assets/onboardbg.jpg';

function About() {
    const TEAM = [
        { 
            image:'',
            name:"Tushar More",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"A",
            rollno:"61",
            github:"",
            linkdin:"",
        },
        { 
            image:'',
            name:"Dheeraj Shukla",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"B",
            rollno:"52",
            github:"",
            linkdin:"",
        },
        { 
            image:'',
            name:"Ayush Modi",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"A",
            rollno:"58",
            github:"",
            linkdin:"",
        },
        { 
            image:'',
            name:"Prashant Jangid",
            branch:"Computer Science & Engineering",
            class:"BE",
            section:"A",
            rollno:"40",
            github:"",
            linkdin:"",
        },
        
    ]
   
    return (
        <>
        <Container className="about_us mt-4">
            <Row id="about_us_heading">
                <h3>Welcome !</h3>
                <p>ABOUT US</p>
            </Row>
            <Row className="about_mission">
                <h5>About This Platform</h5>
                <Col xl={6} className="mt-3 text-center">
                    <img src={IMAGE} alt=""/>
                </Col>
                <Col xl={6} className="mt-3">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;The purpose of this project to reduce the stress of patients relatives for getting appointment done easily instead of going hospital and booking an appointment.

                    This takes lot of time to visit hospital and fix appointment and then go back to home and bring patient back and get treated by doctor.
                    Instead one can fix it by staying home
                    . 
                    </p>
                </Col>
            </Row>
        </Container>
        <Container className="about_us mt-4">
            <Row className="about_team">
            <h5>Our Developer Team</h5>
            { TEAM.map(team => (
                <Col key={team.name} xl="3" className="about_team_member text-center mt-3">
                    <img className="team_image" src={!team.image ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAM1BMVEXk5ueutLeqsbTn6eqpr7PJzc/j5ebf4eLZ3N2wtrnBxsjN0NLGysy6v8HT1tissra8wMNxTKO9AAAFDklEQVR4nO2d3XqDIAxAlfivoO//tEOZWzvbVTEpic252W3PF0gAIcsyRVEURVEURVEURVEURVEURVEURVEURVEURVEURflgAFL/AirAqzXO9R7XNBVcy9TbuMHmxjN6lr92cNVVLKEurVfK/zCORVvW8iUBnC02dj+Wpu0z0Y6QlaN5phcwZqjkOkK5HZyPAjkIjSO4fIdfcOwFKkJlX4zPu7Ha1tIcwR3wWxyFhRG6g4Je0YpSPDJCV8a2Sv2zd1O1x/2WMDZCwljH+clRrHfWCLGK8REMiql//2si5+DKWKcWeAGcFMzzNrXC/0TUwQ2s6+LhlcwjTMlYsUIQzPOCb7YBiyHopyLXIEKPEkI/TgeuiidK/R9FniUDOjRDpvm0RhqjMyyXNjDhCfIMYl1gGjIMIuYsnGEYRMRZOMMunaLVwpWRW008v6fYKDIzxCwVAeNSO90BJW6emelYBRF/kHpYGVaoxTDAaxOFsfP9y8hpJ4xd7gOcij7JNGQ1EYFgkPJa1jQEiYZXRaRINKxSDUW9n+FT82lSKadkiru9/4XPqSLWOekGPoY05TAvLm9orm+YWuwHoBHkZKijNBJGmeb61eL6Ff/6q7bLr7yvv3vKGhpDRjvgjGaPz+gUg6YgcvpyAR2FIZ9U6nEEyZRTovmEU32KichpGn7C17XrfyH9gK/c0CMP05HZIM2uf9sEveizKveBy9/6Qt7o89ne33D525cfcIMW6ab+TMEukQbQbu+xu7X3A9bChmWaCeAkG17bpntwXgWxHaMzGPmUaR5dQZiKqRVeUZ3047fi3nAu28h4CHxCsZAgmEH8Y27jJAhm8c+5RQzRQNVGhVFSfxOYIjp/pP7RxzjevYXVGf4eLt+BJ1vCuLuLkrgABgCGXZ2wik5uty+oBvNirI6mkzhAf4Gsb58Hcm67Jzd+KwD10BYPLL3e0MjvKrgAULnOfveF/O4N2Xb9BZom3gJes3F9X5Zze8/6Yt09b4CrqsEjUv8oFBaR2rl+6CZr2xVrp24o/WitBKuGrrpl1+bFkmK2qXTON4VpbdfLa7o7y/WdLxG7lm2Lqh2clOwTegbvc/vj2U78CwhA87Bn8G5Nk3eOb0Nsr9flz3sG78UUtue4kpv1xvjg3TMay62BMlTlP+vrOMnJsRmt/ze0jsfkPPYdAH57hK+34PeOyc8XIXu5xT2HsUkdZz+adwg8HGFfQ3K5jtDvbUiO4Di9/ywHGrL88pDizZ++oTp+an+SMX/ndymUCwmHMdO7yuOx83pUx/eEMU0AvxWndwgidAqOZ8ypCwdEfvvEo6D9HwpA8wzvmOJEqAg9ySu8g4x0Hb9hSB/BANEKJ+LbPBU0lzbAJs4xt1AoshKkUGQmiH8/jJ0gdhTTLmSegHlPE0oOdXALnqDjKYh3px//fSgSWG8UqfrrIICzYYSJXRr9BSPbpNzw7gBjKjKOYI7ReIGqQRIap5+5MdjyvuDkExvGeXSlONWZAP3/AZBwJohU7QJRGU+cTVH18ELmRPNBmibW6MT/k1b0XhdkRBvyT6SB6EYv/GvhSmRNpGngRULsAlxMCGNXp7w3FfdEbTEEDdLI9TdIKRUzUesa3I461ER8cpNT7gMRhpKmYVS9ELOgCUQsa4SsulciKiLbY+AnHD8cpuhISsnxpamI84sbDq9qYJgf8wiiOBrC7Ml7M7ZECCqKoiiKoiiKoiiKoijv5AvJxlZRyNWWLwAAAABJRU5ErkJggg==' : `${team.image}`} alt=""/>
                    <h5>{team.name}</h5>
                    <h6>{team.branch}</h6>
                    <p>{team.class} / {team.section} / {team.rollno}</p>
                    <ul>
                        <li><a target="_blank" rel="noopener noreferrer" href={`${team.github}`}><i className="fab fa-github"></i></a></li>
                        <li><a target="_blank" rel="noopener noreferrer" href={`${team.linkdin}`}><i className="fab fa-linkedin-in"></i></a></li>
                    </ul>
                </Col>
            ))
            }
            </Row>
        </Container>
        </>
    )
}

export default About
