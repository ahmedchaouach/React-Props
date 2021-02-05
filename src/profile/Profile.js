import React from 'react'
import PropTypes from 'prop-types';

const Profile = (props) => {
    //console.log({fullName, bio, profession})
    return (
        <div> 
            {props.handleName()}
            {props.personalInformations.map((el,i)=>(<h1>{el.fullName}</h1>))}
            {props.personalInformations.map((el,i)=>(<p>{el.bio}</p>))}
            {props.personalInformations.map((el,i)=>(<h2>{el.profession}</h2>))}
            {props.children}
        </div>
    )
}

Profile.defaultProps={
    personalInformations :"the informations not suppeliyed",
    handleName:"error fuction",
    children:"there is not picture"
}

Profile.propTypes = {
    personalInformations:PropTypes.arrayOf(PropTypes.object).isRequired,
    handleName:PropTypes.func.isRequired,
    children:PropTypes.object.isRequired
}

export default Profile
