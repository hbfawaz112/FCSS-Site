import "./style.css";

const Footer = () => {
  const date = new Date();
  const fullYear = date.getFullYear();
  return (
    <footer className="footer">
      <p>
      © {fullYear}  FCSS S.A.R.L.
      </p>
    </footer>
  );
};

export default Footer;
