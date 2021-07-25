import Profile from './Profile/Profile.js';

const nameAlert = name => alert(name);

function App() {
  return (
    <div style={{height: "100vh",
                 background: "#222",
                 color: "#fff"}}>
      <Profile fullName="Maria Ayman" 
               bio="I am an engineer" 
               profession="Junior React developer"
               handleName={nameAlert}>
        <img src="/profile.png" alt="Profile Pic" style={{width: 200, height: 200, borderRadius: "50%", border: "2px solid #fff"}}/>
      </Profile>
    </div>
  );
}

export default App;
