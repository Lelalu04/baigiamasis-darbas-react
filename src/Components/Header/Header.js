import React from 'react'
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header> <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                {/* <li><Link to="/CreateItem">CreateItem</Link></li>
                <li><Link to="/ElectronicList">Electronic List</Link></li>
                <li><Link to="/ShoppingList">Shopping List</Link></li>
                <li><Link to="/Cars">Cars List</Link></li>
                <li><Link to="/Cities">Cities List</Link></li>
                <li><Link to="/CreateCar">Create Car</Link></li>
                <li><Link to="/Task">Task</Link></li>
                <li><Link to="/Counter">Counter</Link></li> */}
            </ul>
        </div></header>
    )
}

export default Header