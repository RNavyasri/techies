import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';
import './Stories.css';  // Import the CSS file

// Import images for the stories
import whatsappImage from './whatsapp.jpg';
import telegramImage from './telegram.jpg';
import facebookImage from './fb.jpg';
import tinderImage from './tinder.jpg';
import paytmImage from './paytm.jpg';
import youtubeImage from './yt.jpg';

// Dummy data for stories with imported images
const stories = [
  {
    id: 1,
    title: 'WhatsApp: A $19 Billion Dollar Company',
    content: `In 2009, Jan Koum and Brian Acton, two former Yahoo engineers, launched WhatsApp with a vision to transform communication. Initially designed to let users update their statuses, the app quickly evolved into a powerful instant messaging tool. It allowed people to send text, voice messages, images, and videos without incurring SMS fees.

WhatsApp’s straightforward design and reliability soon made it a hit. By 2014, its success attracted Facebook, which acquired the app for $19 billion, marking one of the largest tech deals ever. Under Facebook’s ownership, WhatsApp continued to thrive, introducing features like end-to-end encryption in 2016 to ensure message privacy.

As its user base soared to over 2 billion by 2020, WhatsApp became a global communication staple. Despite facing privacy concerns, its simplicity and effectiveness in connecting people across the world cemented its place as a revolutionary tool in the digital age.`,
    image: whatsappImage,
  },
  {
    id: 2,
    title: 'Telegram: The Messaging Revolution',
    content: `In 2013, Pavel Durov, the Russian entrepreneur behind the successful social network VKontakte, and his brother Nikolai Durov launched Telegram. They aimed to create a messaging app that prioritized privacy and speed. Telegram offered users a platform to send messages, photos, and videos securely and quickly, setting it apart with its focus on encryption.

The app's commitment to privacy was evident with features like end-to-end encryption in secret chats and self-destructing messages. Telegram also introduced innovative functionalities such as large group chats, channels for broadcasting to unlimited audiences, and the ability to create bots for various tasks.

Telegram’s growth was swift, fueled by word of mouth and its reputation for security. As concerns over privacy in other messaging apps grew, Telegram's user base expanded rapidly. By 2020, it had gained over 500 million active users, becoming a major player in the messaging world.

Telegram’s rise is a testament to its strong privacy features and unique offerings, making it a preferred choice for users seeking a secure and versatile messaging platform.`,
    image: telegramImage,
  },
  {
    id: 3,
    title: 'Facebook: From College Project to Global Phenomenon',
    content: `In 2004, Mark Zuckerberg, along with his Harvard University roommates Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes, launched a website called "The Facebook." Initially intended as a platform for Harvard students to connect, it quickly grew beyond campus.

The Facebook allowed users to create profiles, share updates, and connect with friends. Its appeal spread to other Ivy League schools and then to universities across the United States and Canada. By 2006, Facebook opened its doors to anyone with an email address, marking a significant shift in its reach.

As Facebook continued to expand, it introduced features like the News Feed, which kept users engaged with constant updates from their friends. The platform also began incorporating ads, turning it into a major revenue generator. By 2012, Facebook went public, and its user base had surged to over a billion people worldwide.

Today, Facebook is a global phenomenon, deeply embedded in daily life and reshaping how people connect, share, and interact. Its journey from a college project to a social media giant highlights its impact on the digital age.`,
    image: facebookImage,
  },
  {
    id: 4,
    title: 'The Rise of Tinder: Revolutionizing Dating',
    content: `In 2012, Sean Rad, Justin Mateen, Dinesh Moorjani, and Jonathan Badeen, a group of young entrepreneurs, saw a chance to revolutionize dating. They envisioned an app that made meeting new people fun and simple. This idea became Tinder, an app where users swipe right if they’re interested in someone and left if they’re not.

Tinder’s swipe-based interface and simplicity quickly caught on, making it popular among young people. The app’s success was fueled by its ease of use and the excitement of connecting with new people. Tinder’s innovative approach to online dating changed the landscape, setting a new standard for how people meet and connect.`,
    image: tinderImage,
  },
  {
    id: 5,
    title: 'Paytm: Transforming Payments in India',
    content: `Founded in 2014 by Vijay Shekhar Sharma, Paytm started as a prepaid mobile recharge platform and evolved into a comprehensive digital wallet. It provided a convenient way for users to pay for services and transfer money online, quickly gaining popularity in India.

Paytm’s growth was driven by its user-friendly interface and wide range of services, including bill payments, ticket bookings, and financial services. The platform’s success in promoting digital payments in India earned it a significant user base and helped drive the country’s push towards a cashless economy.

As Paytm expanded its services, it introduced new features like Paytm Mall, offering a range of products, and Paytm Payments Bank, aiming to enhance financial inclusion. Today, Paytm remains a key player in India’s digital payment ecosystem.`,
    image: paytmImage,
  },
  {
    id: 6,
    title: 'YouTube: The Ultimate Video Platform',
    content: `Launched in 2005 by Steve Chen, Chad Hurley, and Jawed Karim, YouTube started as a simple platform for uploading and sharing videos. It quickly grew in popularity, becoming a hub for diverse content ranging from music videos to educational tutorials.

YouTube’s easy-to-use interface and wide reach attracted creators from around the world, contributing to its rapid growth. In 2006, Google acquired YouTube, providing it with the resources to expand further. The platform introduced features like monetization for creators and live streaming, solidifying its position as the leading video-sharing platform.

Today, YouTube is a global phenomenon, offering billions of videos and serving as a major source of entertainment, education, and news. Its impact on digital media and content creation is profound, shaping how people consume and share video content.`,
    image: youtubeImage,
  },
];

function StoriesList() {
  return (
    <div className="stories-list">
      {stories.map((story) => (
        <div key={story.id} className="story-item">
          <Link to={`/stories/${story.id}`} className="story-link">
            <img src={story.image} alt={story.title} className="story-image" />
            <h2 className="story-title">{story.title}</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}

function StoryDetail() {
  const { id } = useParams();
  const story = stories.find((s) => s.id === parseInt(id));

  if (!story) {
    return <div>Story not found</div>;
  }

  return (
    <div className="story-detail">
      <div className="story-detail-content-box">
        <img src={story.image} alt={story.title} className="story-detail-image" />
        <h1 className="story-detail-title">{story.title}</h1>
        <div className="story-detail-content">
          {story.content.split('\n\n').map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stories() {
  return (
    <Routes>
      <Route path="/" element={<StoriesList />} />
      <Route path=":id" element={<StoryDetail />} />
    </Routes>
  );
}

export default Stories;