import './App.css';
import { data } from './data';
import { dataOne } from './dataOne';
import { useState } from 'react';


function App() {

  const [pups, setPups] = useState(data);
  const [showText, setShowText] = useState(false);

  const [dog, setDog] = useState(0);
  const {number, picture, myName} = dataOne[dog];

 const nextDog =()=>{
  setDog(dog => {
    dog++;
    if (dog>dataOne.length-1){
      dog=0;
    }
    return(dog)
  })
 }
 const previousDog =()=>{
  setDog(dog => {
    dog--;
    if (dog<0){
      dog=dataOne.length-1;
    }
    return (dog)
  })
 }


  return (
    <div>
      
      <div>
        <div className='main'>
          <h1>Meet the dogs that usually love to meet and play!</h1>
        </div>
        <div key={number} className='main'>
          <img src={picture} width="300px" height="400px"/>
        </div>
        <div className='main'>
          <h3>{myName}</h3>
        </div>
        <div className='button'>
          <button className='btn' onClick={previousDog}>Previous</button>
          <button className='btn' onClick={nextDog}>Next</button>
        </div>
        </div>

      <div className='main'>
        <h2>PUPS AVAILABLE TO PLAY TODAY ( {new Date().toLocaleString("en-US", { day : '2-digit', month: "long"})} ) IN YOUR AREA</h2>
      </div>




      <div className='main'>

      
    {pups.map((pup =>{
      const {id,image, name, sex, description, age, energy, location, showMore} = pup;

      const remove = (id) => {
        let newPups = pups.filter( pup => pup.id !== id);
        setPups(newPups);
      }

      const showTextClick = (pup) => {
        pup.showMore = !pup.showMore;
        setShowText(!showText);
      }

      return(
        <div className='main' key={id}>

          <div className='Container'>
            <img src={image} alt='dog' width='300px' height="400px"/>
            <h2>{name}</h2>
            <h3>{sex}, {age} years old</h3>
            <p>{showMore? description: description.substring(0, 50) + "..."} <button onClick={()=>showTextClick(pup)}>{showMore ? "Show less" : "Show More"}</button></p>
            <h3>Energy level: {energy}</h3>
            <h3>Located: {location}</h3>
            <button className='btn' onClick={() => remove(id)}>Not interested</button>
          </div> 
                  
        </div>
      )
    }))}   
    </div>
              <div className='main'>
              <button className='btn' onClick={()=>setPups([])}>DELETE ALL</button>
            </div>
  </div>          
  )
}



export default App;
