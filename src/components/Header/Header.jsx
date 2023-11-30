import './Header.css';

const Header = ({src, alt, title})=>{
    return (
        <header>
            <img src={src} alt={alt}/>
            <h1>{title}</h1>
            <img src={src} alt={alt}/>
        </header>
    )
}

export default Header;