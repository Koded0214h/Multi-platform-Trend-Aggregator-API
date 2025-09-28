// src/components/community/ConnectSection.jsx
import React from 'react';
import ConnectCard from './ConnectCard.jsx';

const ConnectSection = () => {
  const connectItems = [
    {
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M208.31,192.54,192,176.23a15.89,15.89,0,0,0-22.62,0l-12.8,12.8a8,8,0,0,1-9.18-1.55,87.89,87.89,0,0,1-30.82-30.81,8,8,0,0,1-1.55-9.18l12.8-12.8a15.89,15.89,0,0,0,0-22.62L112.23,47.69a16,16,0,0,0-22.62,0L72.29,65A16,16,0,0,0,67.6,78.2a104.14,104.14,0,0,0,88.19,88.2A16,16,0,0,0,169,183.71l17.27-17.32A16,16,0,0,0,208.31,192.54Z"></path>
        </svg>
      ),
      title: "Forums",
      description: "Discuss features, ask questions, and share your projects.",
      link: "#"
    },
    {
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Z"></path>
        </svg>
      ),
      title: "Social Media",
      description: "Follow us for updates, news, and highlights.",
      link: "#"
    },
    {
      icon: (
        <svg fill="currentColor" height="32" viewBox="0 0 256 256" width="32" xmlns="http://www.w3.org/2000/svg">
          <path d="M208.31,75.68A59.78,59.78,0,0,0,202.93,28,8,8,0,0,0,196,24a59.75,59.75,0,0,0-48,24H124A59.75,59.75,0,0,0,76,24a8,8,0,0,0-6.93,4,59.78,59.78,0,0,0-5.38,47.68A58.14,58.14,0,0,0,56,104v8a56.06,56.06,0,0,0,48.44,55.47A39.8,39.8,0,0,0,96,192v8H72a24,24,0,0,1-24-24A40,40,0,0,0,8,136a8,8,0,0,0,0,16,24,24,0,0,1,24,24,40,40,0,0,0,40,40H96v16a8,8,0,0,0,16,0V192a24,24,0,0,1,48,0v40a8,8,0,0,0,16,0V192a39.8,39.8,0,0,0-8.44-24.53A56.06,56.06,0,0,0,216,112v-8A58.14,58.14,0,0,0,208.31,75.68Z"></path>
        </svg>
      ),
      title: "GitHub",
      description: "Join the development, report bugs, or suggest features.",
      link: "https://github.com/Koded0214h/Multi-platform-Trend-Aggregator-API"
    }
  ];

  return (
    <section>
      <h3 className="text-xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-3 sm:text-2xl">
        <svg className="text-primary" fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M208,40H48A16,16,0,0,0,32,56V176a16,16,0,0,0,16,16H88v23.51a12,12,0,0,0,20.49,8.49L134.83,192H208a16,16,0,0,0,16-16V56A16,16,0,0,0,208,40Zm0,136H131.17a12,12,0,0,0-8.49,3.51L104,198.49V176a16,16,0,0,0-16-16H48V56H208Z"></path>
        </svg>
        Connect
      </h3>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
        {connectItems.map((item, index) => (
          <ConnectCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default ConnectSection;