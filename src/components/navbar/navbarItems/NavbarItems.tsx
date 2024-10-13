import React, { useState } from 'react'
import './NavbarItems.scss'
import { team } from '../../../data/data'

interface NavbarItemsProps {
  onSelectItem: (item: any) => void
}

const NavbarItems: React.FC<NavbarItemsProps> = ({ onSelectItem }) => {
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null)

  const handleSelectItem = (item: any) => {
    setSelectedItemId(item.id)
    onSelectItem(item)
  }
  
  return (
    <ul className="navbarItems">
      {team.map((item) => {
        const isSelected = selectedItemId === item.id
        return (
          <li
            className={`item ${isSelected ? 'selected' : ''}`} 
            key={item.id}
            onClick={() => handleSelectItem(item)}
          >
            <img src={item.logo} alt={item.name} />
          </li>
        )
      })}
    </ul>
  )
  
}

export default NavbarItems
