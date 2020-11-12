import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import { addUser_action } from '../../redux/users/userActions';
import { useHistory } from 'react-router-dom';
import AOS from 'aos';
import "aos/dist/aos.css";
import './home.css'

function Home({addUser_action}) {

    const [userName, setUserName] = useState('');
    const [error, setError] = useState('')
    const history = useHistory()

    useEffect(() => {
        AOS.init({
            duration : 1000
          });
    })

    const handleEnrollUser = () => {
        if(!userName){
            setError('Please Enter a valid name')
        }
        else {
            addUser_action(userName);
            history.push('/questions')
        }
    }

    return (
        <div className = "nameInput__container">
            <div data-aos = "fade-down" className = "heading__Container">
                <h1>Welcome to Our Quiz</h1>
                <h2>Please Enter Your Name</h2>
            </div>
            <div className = "inputField__Container">
                <input data-aos = "fade-up" type = 'text' onChange = {(e) => setUserName(e.target.value)} />
            </div>
            {
                error? <div className = "error__container">
                            <span style = {{color: 'red', textAlign: 'center'}}>{error}</span>
                        </div> : null
            }
            <div className = "enrollButton__container">
                <button data-aos = "fade-up" className = "enrolButton" onClick = {handleEnrollUser}>
                    Enroll
                </button>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addUser_action : () => dispatch(addUser_action())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
