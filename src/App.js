import './App.css';
import Profile from './profile/Profile';
import ahmed from './ahmed.jpg';


function App() {
  const personalInformations = [{fullName :'Ahmed Chaouach'}, {bio :'junior full stack developer'}, {profession :'full stack developer'}];
  //const handleName =()=>(alert({personalInformations.map((el)=>(el.fullName))}))
  const handleName =()=>(alert('your are ahmed chaouach'))

  return (
    <div className="App">
     <Profile personalInformations={personalInformations} handleName ={handleName}>
      <img src={ahmed} alt='ahmed'/>
     </Profile>
    </div>
  );
}

export default App;
