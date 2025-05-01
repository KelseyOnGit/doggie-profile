
import './App.css';
import poodleImage from './photo-1605244863941-3a3ed921c60d.jpeg';
import malamuteImage from './malamute.jpeg'
import bulldogImage from './bulldog.jpeg'
 
 


import React from 'react';
import './App.css';


function Profile({
  imageAddress,
  name,
  breed,
  size,
  age,
  gender,
  personality,
  favoriteActivities,
  diet,
  healthInfo,
  introduction
}) {
  return (
    <div className="profile-container">
        <h1>{name}</h1>
        <img src={imageAddress} alt={name} className='profile-image'/>
        <h2><span className="label">Size:</span> <span className="value">{size}</span></h2>
        <h2><span className="label">Age:</span> <span className="value">{age}</span></h2>
        <h2><span className="label">Gender:</span> <span className="value">{gender}</span></h2>
        <h2><span className="label">Personality:</span> <span className="value">{personality}</span></h2>
        <h2><span className="label">Favorite Activities:</span> <span className="value">{favoriteActivities}</span></h2>
        <h2><span className="label">Diet:</span> <span className="value">{diet}</span></h2>
        <h2><span className="label">Health Information:</span> <span className="value">{healthInfo}</span></h2>
        <p>{introduction}</p>
        <button>Learn More</button>
    </div>
);
}

function Footer(){
  return(
    <footer>
      <p>Contact Us: doggieprofiles@example.com</p>
      <p>Phone: +61 13345895</p>
      <p>Address: Doggie Lane, Pet city</p>
    </footer>
  )
}

function Header() {
  return (
    <header>
          <h1>Doggie Adoption</h1>
          <nav>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#contact">Contact</a>
          </nav>
      </header>
  )
}

export default function Doggie() {
    return (
        <div >
          <Header />
          <h1>Meet our adorable pups!</h1>
            <Profile
                imageAddress={poodleImage}
                name="Jay"
                breed="Poodle"
                size="Medium"
                age="3 years"
                gender="male"
                personality="Intelligent, friendly, and active"
                favoriteActivities="Snowboarding"
                diet="Grain-free kibble"
                healthInfo="No known allergies"      
                introduction="Poodles are known for their intelligence and curly fur."
            />
          
          <Profile
              imageAddress={malamuteImage}
              name="Luna"
              breed="Alaskan Malamute"
              size="Large"
              age="4 years"
              gender="female"
              personality="Loyal, friendly, and playful"
              favoriteActivities="Hiking and sledding"
              diet="High-protein kibble"
              healthInfo="Prone to hip dysplasia"
              introduction="Alaskan Malamutes are known for their strength and endurance in cold climates."
/>
          <Profile
              imageAddress={bulldogImage}
              name="Max"
              breed="English Bulldog"
              size="Medium"
              age="5 years"
              gender="male"
              personality="Calm, courageous, and affectionate"
              favoriteActivities="Lounging and short walks"
              diet="High-quality kibble"
              healthInfo="Prone to obesity and breathing issues"
              introduction="English Bulldogs are known for their loose, wrinkled skin and unique pushed-in nose."/>

        <Footer />


        </div>
    );
}