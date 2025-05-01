import React from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Profile from '../components/Profile/Profile';
import poodleImage from '../assets/images/photo-1605244863941-3a3ed921c60d.jpeg';
import malamuteImage from '../assets/images/malamute.jpeg';
import bulldogImage from '../assets/images/bulldog.jpeg';

export default function Home() {
  return (
    <div className="home-container">
      <Header />
      <h1 className="page-title">Meet our adorable pups!</h1>
      
      <div className="profiles-grid">
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
          introduction="English Bulldogs are known for their loose, wrinkled skin and unique pushed-in nose."
        />
      </div>

      <Footer />
    </div>
  );
}