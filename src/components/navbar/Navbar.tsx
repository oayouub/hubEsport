import './Navbar.scss'
import NavbarItems from './navbarItems/NavbarItems'

interface NavbarProps {
  onSelectItem: (item: any) => void
}

const Navbar: React.FC<NavbarProps> = ({ onSelectItem }) => {
  return (
    <div className="navbar">
      <NavbarItems onSelectItem={onSelectItem} /> 
    </div>
  )
}

export default Navbar
