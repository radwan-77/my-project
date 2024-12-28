import Screenshot from "../assets/2.jpg";

const HeroSection = () => {
  return (
    <div style={Bigdiv}>
      <img src={Screenshot} alt="Hero" />
      <h1 style={main}>crafted premium fashion for every Moment</h1>
      <p style={para}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos hic non libero, omnis ut cupiditate repellendus esse optio iste modi harum, facere natus odio maiores earum quibusdam officia officiis porro!</p>
      <div style={buttons}>
        <button style={buttonstyle}>Shop Now</button>
        <button style={buttonstyle2}>Shop</button>
      </div>
    </div>
  );
};

const Bigdiv = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
  height: '100vh',
  width: '100%',
  backgroundColor: 'black',
  color: 'white',
  overflow: 'hidden'
};

const main = {
  position: 'absolute',
  top: '45%',
  right: '50%',
  fontSize: '90px',
  padding: '16px',
  maxWidth: '90%',
  animation: 'fadeInUp 2s ease-in-out'
};

const buttons = {
  position: 'absolute',
  top: '80%',
  right: '85%',
  display: 'flex',
  gap: '24px',
  padding: '16px',
  maxWidth: '90%',
};

const para = {
  position: 'absolute',
  top: '70%',
  left: '50%',
  padding: '16px',
  maxWidth: '900px',
  fontSize: '35px',
};

const buttonstyle = {
  display: "flex",
  padding: '8px 16px',
  backgroundColor: 'black',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  margin: '0',
  cursor: 'pointer'
};

const buttonstyle2 = {
  display: "flex",
  padding: '8px 16px',
  backgroundColor: 'white',
  color: 'black',
  border: 'none',
  borderRadius: '4px',
  margin: '0',
  cursor: 'pointer'
};

const fadeInUp = `
  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

// Inject the keyframes into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(fadeInUp, styleSheet.cssRules.length);

export default HeroSection;
