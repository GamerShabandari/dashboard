import { Link } from 'react-router-dom';
import { MdOutlineGraphicEq, MdTableChart } from "react-icons/md";

export function Navbar() {

    return (
        <aside>
            <ul>
                <li><Link to="/" className='menuLi'><MdOutlineGraphicEq></MdOutlineGraphicEq>Hem</Link></li>
                <li><Link to="/kvalitetsgranskning" className='menuLi'><MdTableChart></MdTableChart>Kvalitetsgranskning</Link></li>
            </ul>
        </aside>
    )
}