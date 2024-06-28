import React from "react";
const About = () => {
  const phoneNumber = "1234567890"; // Replace this with the recipient's phone number
  const message = "Hello, I'm interested in your paintings!"; // Replace this with your predefined message

  const handleWhatsAppClick = () => {
    window.open(
      `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
        message
      )}`
    );
  };
  return (
    <>
      <div className="about_page">
        <h1>About Our Painting Website</h1>
        <p>
          We are passionate about art and creativity. Our painting website is a
          platform for artists and art enthusiasts to showcase, explore, and
          appreciate the world of paintings.
        </p>
        <div className="painter_image"></div>
        <p className="quote">
          "Art is not freedom from discipline, but disciplined freedom." - John
          F. Kennedy
        </p>
      </div>
    </>
  );
};
export default About;
