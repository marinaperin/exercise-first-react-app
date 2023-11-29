import './Sidebar.css';
import Searchbar from './Searchbar';

const Sidebar = ({li1, li2, li3})=>{
    return(
        <ul>
            <li>{li1}</li>
            <li>{li2}</li>
            <li>{li3}</li>
            <li><Searchbar/></li>
        </ul>
    )
}

export default Sidebar;