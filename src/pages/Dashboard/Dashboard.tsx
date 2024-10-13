import { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import Content from '../Content/Content'
import './Dashboard.scss'

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState(null)

  return (
    <div className='dashboard'>
      <Navbar onSelectItem={setSelectedItem} />
      <Content selectedItem={selectedItem} />
    </div>
  )
}

export default Dashboard
