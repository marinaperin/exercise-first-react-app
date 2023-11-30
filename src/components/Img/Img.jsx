import "./Img.css";

const Img = ({ src, alt, caption }) => {
  return (
    <div>
      <figure>
        <img src={src} alt={alt} />
        <p>{caption}</p>
      </figure>
    </div>
  );
};

export default Img;
