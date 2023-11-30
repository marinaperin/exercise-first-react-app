import './Main.css';
import Img from '../Img/Img';

const Main = ()=>{
    return(
        <main>
        <Img src='https://source.unsplash.com/random/300x300/?book' alt='Book' caption='Books'/>
        <Img src='https://source.unsplash.com/random/300x300/?music' alt='Music' caption='Music'/>
        <Img src='https://source.unsplash.com/random/300x300/?movie' alt='Movie' caption='Movies'/>
        </main>
    )
}

export default Main;