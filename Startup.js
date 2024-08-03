import React from 'react';
import { Routes, Route, useParams, Link } from 'react-router-dom';
import './Startup.css';  // Import the CSS file

// Import images from the components folder
import photoStocksImage from './photostocks.jpg';  // Adjust the path if necessary
import homeAutomationImage from './home-automation.jpeg';  // Adjust the path if necessary
import onlineMusicSchoolImage from './music-school.jpeg';  // Adjust the path if necessary
import laundryServiceImage from './laundry-service.jpg';  // Adjust the path if necessary
import plantsDeliveryImage from './plants.jpg';  // Adjust the path if necessary
import usedbooks from './books.jpg';
import solarpanel from './solar-panel.jpg';
import tracking from './tracking-device.jpg';
import foodtruck from './food-truck.jpg';
import dateplanner from './date-planner.jpg';

// Dummy data for startup ideas with imported images
const startupIdeas = [
  { id: 1, heading: 'Photo Stocks', description: 'People always love photos as we can see the growth of Instagram, Pinterest etc as a social medium to deal with pictures.\nA photography platform will always be in demand where one can store, share, sell and buy creative images. Photographers can also showcase their work as a portfolio and can get feedback on their photos.', image: photoStocksImage },
  { id: 2, heading: 'Home Automation Solution', description: 'The concept of home automation starts by controlling lights, fans, TVs, ACs primarily by handy devices. It sounds great to have your coffee ready when you wake up or automatically turn everything off when you leave for work. Now home automation is considered as a tool that provides you with improved convenience, comfort, energy efficiency, and some devices are designed especially for safety purposes. \nAlmost every electrical device and system in our home can be automated and thus this industry has an infinite scope for innovation and business opportunities.', image: homeAutomationImage },
  { id: 3, heading: 'Online Music School', description: 'Music is not only an art but also a feeling. No matter the age, music is loved by everyone and many are interested in learning more of it. There is a vast scope in starting an online platform for learning various musical instruments like guitar, piano, violin etc together with voice lessons and other fields related to music study.\n It will be a win-win situation for all because talented artists will get a platform to display their talent with the earning source, people can learn in the comfort of their home with a time-saving option and you will get into a profitable business with a tremendous scalable opportunity.', image: onlineMusicSchoolImage },
  { id: 4, heading: 'Doorstep Laundry Service', description: 'In this fast-moving world there is no time for so-called unproductive works like clothes washing and ironing. Laundry services are gaining popularity at a rapid pace also due to some other factors like care of fabric & proper ironing by experts are preferable. \nThus it is a good startup business to provide a combined handy service of collection, processing, and delivery at one point.', image: laundryServiceImage },
  { id: 5, heading: 'Online Plants Delivery', description: 'Everyone loves to live a life in a pleasing surrounding and one of the best ways is keeping the flowers and plants around. Nowadays plants are not confined to gardens but become a great sense of fashion in everyday life.\n Varieties of plants are needed for home, offices, and malls. Also, it can be a fabulous gifting option. So it is a great idea to solve plantation difficulties by providing tried-and-tested solutions where customers can discover, buy and look after the right plants for their space.', image: plantsDeliveryImage },
  { id: 6, heading: 'Mobile Food Truck', description: 'Food Truck is the best option for a food business today due to its mobility advantage. It gives access to multiple locations thus best for first-time entrepreneurs to experiment with their business model & strategy.\n\nAlso, it attracts more customers as the food is relatively cheap and customers can see what is being cooked is fresh and hygienic.', image: foodtruck },
  { id: 7, heading: 'Date Planners', description: 'In today\'s world of hustle and bustle, everyone needs some time with their loved ones. Most of us want to plan a romantic day with our special ones but just doesn\'t know what or how?\n\nSo here comes a great startup idea to solve a big problem and to capture a huge market. It includes services such as arranging a candlelight dinner at poolside, proposal settings, resort stays, and celebrations of the anniversary, birthday & other special occasions.', image: dateplanner },
  { id: 8, heading: 'Personal Tracking Devices', description: 'Today GPS tracking is not limited to vehicles & industrial use. Now it is coming to the personal level as it can help in the safety of your loved ones, either your kids, your pet or your old parents.\n\nIt is so important to provide services and products like the GPS Trackers that will make life safer and more enjoyable. So it is a good opportunity for entrepreneurs to explore this industry as tracking will become a regular part of life very soon.', image: tracking },
  { id: 9, heading: 'Solar Plants Cleaning', description: 'Solar energy is one of the best sources of energy in the future. So to get more and more out of it, solar panels should be clean as much as possible.\n\nTypical methods of cleaning are:\n Expensive\n Time-consuming\n Require fresh water\n Risky\n\nSo innovation is needed to get an effective method and thus provide an open gate for startups.', image: solarpanel },
  { id: 10, heading: 'Platform for Used Books', description: 'In this era of swiping and scrolling, even books are limited to mobiles and tablets. But nobody can neglect the charm of physical books.\n\nResearch shows that if the price is right and availability is easy, most people prefer paper books. This opens the gate for an innovative solution to build a platform to buy and sell used books for better pricing and broad availability.', image: usedbooks },
];

// List component
const StartupList = () => {
  return (
    <div className="startup-container">
      <h1>Startup Ideas</h1>
      <div className="startup-list">
        {startupIdeas.map((idea) => (
          <div key={idea.id} className="startup-box">
            <Link to={`/startup/${idea.id}`} className="startup-link">
              <div className="startup-image-container">
                <img src={idea.image} alt={idea.heading} className="startup-image" />
              </div>
              <h2>{idea.heading}</h2>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

// Detail component
const StartupDetail = () => {
  const { id } = useParams();
  const idea = startupIdeas.find((idea) => idea.id === parseInt(id));

  if (!idea) return <div>Startup idea not found.</div>;

  // Split description into two paragraphs
  const [paragraph1, paragraph2] = idea.description.split('\n').map(p => p.trim()).filter(p => p);

  return (
    <div className="startup-detail-container">
      <div className="startup-detail-box">
        <img src={idea.image} alt={idea.heading} className="startup-detail-image" />
        <div className="startup-description">
          <h1>{idea.heading}</h1>
          <p className="description-paragraph">{paragraph1}</p>
          {paragraph2 && <p className="description-paragraph">{paragraph2}</p>}
        </div>
      </div>
    </div>
  );
};
// Main Startup component
const Startup = () => {
  return (
    <Routes>
      <Route path="/" element={<StartupList />} />
      <Route path=":id" element={<StartupDetail />} />
    </Routes>
  );
};

export default Startup;