import "./Footer.css";

const Footer = ({year, author}) => {
  return (
    <>
      <footer>
        <p>Copyright {year} &copy;</p>
        <p>All rights reserved: {author}</p>
      </footer>
    </>
  );
};

export default Footer;
