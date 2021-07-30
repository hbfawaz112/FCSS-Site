import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
      © {fullYear}  FCSS S.A.R.L.
    
     
       Build By <a className="by" href="https://hbfawaz.netlify.app/">Hussein B. Fawaz</a>
       </p>
    </footer>
  );
};

export default Footer;
