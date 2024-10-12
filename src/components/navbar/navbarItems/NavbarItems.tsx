import './NavbarItems.scss'
import { team } from '../../../data/data'

const NavbarItems = () => {
  return (
    <ul className="navbarItems">
        {team.map((item) => (
            <li className='item' key={item.id}>
                <img src={item.logo} alt={item.name} />
            </li>
        ))}
    </ul>
  )
}

export default NavbarItems
