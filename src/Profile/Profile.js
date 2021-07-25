import PropTypes from 'prop-types';

function Profile(props){
    return(
        <div style={{height: "100%",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                     }}>
            <div style={{marginRight: 100}}>
                {props.children}
            </div>             
            <div style={{fontSize: 20,
                         textAlign: "center"}}>
                <p>Hello, I am <span style={{fontWeight: 700}}>{props.fullName}</span>.</p>
                <p><span style={{fontWeight: 700}}>Bio:</span> {props.bio}.</p>
                <p><span style={{fontWeight: 700}}>Profession:</span> {props.profession}</p>
                <button style={{border: "2px solid #fff",
                                borderRadius: 15,
                                outline: "none",
                                background: "#9e4f6b",
                                color: "#fff",
                                width: 100,
                                height: 60,
                                fontWeight: 600,
                                cursor: "pointer",
                                }}
                    onClick={() => props.handleName(props.fullName)}>Handle Name</button>
            </div>
        </div>
    );
}

Profile.defaultProps={
    fullName: 'John Smith',
    bio: 'Engineer',
    profession: 'React Developer',
    handleName: () => alert(`Default Name: ${Profile.defaultProps.fullName}`)
}

Profile.propTypes = {
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    handleName: PropTypes.func
}
  

export default Profile;