import React, {useState} from 'react';
import {connect} from 'react-redux';
import { addUser_action } from '../../redux/users/userActions';
import { useHistory } from 'react-router-dom';
import './home.css'

function Home({addUser_action}) {

    const [userName, setUserName] = useState('');
    const [error, setError] = useState('')
    const history = useHistory()

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
        <div className = "container">
            <div className = "inputContainer">
                <input type = 'text' onChange = {(e) => setUserName(e.target.value)} />
            </div>
            {
                error? <span style = {{color: 'red'}}>{error}</span> : null
            }
            <button className = "enrolButton" onClick = {handleEnrollUser}>
                Enroll
            </button>
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
