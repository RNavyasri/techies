import React, { useState } from 'react';
import './connect.css';

const initialEntrepreneurs = [
  {
    name: 'Riteshagar',
    description: 'Ritesh Agarwal is the founder and CEO of OYO Rooms, a prominent hospitality chain in India. He revolutionized budget accommodation with his innovative approach to standardizing hotel stays.',
    photo: '/assets/ritesh.jpg',
    linkedin: 'https://www.linkedin.com/in/riteshagar'
  },
  {
    name: 'Bhavishaggarwal',
    description: 'Bhavish Aggarwal is the co-founder and CEO of Ola Cabs, a leading ride-sharing company in India. He revolutionized urban transportation with innovative solutions.',
    photo: '/assets/bhavisha.jpg',
    linkedin: 'https://www.linkedin.com/in/bhavishaggarwal'
  },
  {
    name: 'Vijayshekhar',
    description: 'Vijay Shekhar Sharma is the founder and CEO of Paytm, a major digital payments and financial services platform in India. He has significantly impacted the fintech industry with his innovative approaches.',
    photo: '/assets/vijaysekar.jpg',
    linkedin: 'https://www.linkedin.com/in/vijayshekhar'
  },
  {
    name: 'Phanindra Sama',
    description: 'Phanindra Sama is the founder of redBus, India\'s largest online bus ticketing platform. He revolutionized the travel industry with his innovative approach to booking and managing bus travel.',
    photo: '/assets/phanindra.jpg',
    linkedin: 'https://www.linkedin.com/in/phanisama'
  },
  {
    name: 'Deepigoyal',
    description: 'Deepinder Goyal is the co-founder and CEO of Zomato, a leading restaurant discovery and food delivery platform. His vision has transformed how people explore and order food globally.',
    photo: '/assets/deepinder.jpg',
    linkedin: 'https://www.linkedin.com/in/deepigoyal'
  },
  {
    name: 'Falguni nayar',
    description: 'Falguni Nayar is the founder and CEO of Nykaa, a prominent beauty and lifestyle e-commerce platform in India. She has been influential in the retail sector, pioneering online beauty shopping.',
    photo: '/assets/falguni.jpg',
    linkedin: 'https://www.linkedin.com/in/falguni-nayar-845065a0'
  },
  {
    name: 'Nithin kamath',
    description: 'Nithin Kamath is the co-founder and CEO of Zerodha, a leading discount brokerage firm in India. He has transformed stock trading with his innovative approach to online trading and investment.',
    photo: '/assets/nithin.jpg',
    linkedin: 'https://www.linkedin.com/in/nithin-kamath-81136242'
  },
  {
    name: 'Deep Kharla',
    description: 'Deep Kharla is the founder and CEO of Kharla Ventures, which focuses on technology and venture capital investments. His work emphasizes innovation and growth in the tech industry.',
    photo: '/assets/deep.jpg',
    linkedin: 'https://www.linkedin.com/in/deep-kalra-2954862'
  },
  {
    name: 'Ghazal alagh',
    description: 'Ghazal Alagh is the co-founder and chief innovation officer of Mamaearth, a popular Indian skincare and personal care brand. She has played a significant role in the brand\'s growth and success in the beauty industry.',
    photo: '/assets/ghazal.jpg',
    linkedin: 'https://www.linkedin.com/in/ghazal-alagh-9755a0128'
  }
];

const PeersToPeers = () => {
  const [entrepreneurs, setEntrepreneurs] = useState(initialEntrepreneurs);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState('');
  const [linkedin, setLinkedin] = useState('');

  const addEntrepreneur = () => {
    const newEntrepreneur = { name, description, photo, linkedin };
    setEntrepreneurs([...entrepreneurs, newEntrepreneur]);
    setName('');
    setDescription('');
    setPhoto('');
    setLinkedin('');
  };

  return (
    <div className="peers-container">
      <h1>Peers to Peers</h1>
      <div className="peers-list">
        {entrepreneurs.map((entrepreneur, index) => (
          <div key={index} className="peer-card">
            <img src={entrepreneur.photo} alt={entrepreneur.name} className="peer-photo" />
            <h2>{entrepreneur.name}</h2>
            <p>{entrepreneur.description}</p>
            <a href={entrepreneur.linkedin} target="_blank" rel="noopener noreferrer" className="linkedin-link">
              Connect on LinkedIn
            </a>
          </div>
        ))}
      </div>
      <div className="add-entrepreneur-form">
        <h2>Add Your Profile</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="text"
          placeholder="Photo URL"
          value={photo}
          onChange={(e) => setPhoto(e.target.value)}
        />
        <input
          type="text"
          placeholder="LinkedIn URL"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
        />
        <button onClick={addEntrepreneur}>Add Entrepreneur</button>
      </div>
    </div>
  );
};

export default PeersToPeers;