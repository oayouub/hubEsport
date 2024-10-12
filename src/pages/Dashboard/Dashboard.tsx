import Navbar from '../../components/navbar/Navbar'
import Content from '../Content/Content'
import './Dashboard.scss'

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar />
      <Content />
    </div>
  )
}

export default Dashboard