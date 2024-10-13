import './Content.scss'

interface ContentProps {
  selectedItem: any
}

const Content: React.FC<ContentProps> = ({ selectedItem }) => {
  return (
    <div className="content">
      {selectedItem ? (  
        <div>
          <h1>{selectedItem.name}</h1>
        </div>
      ) : (
        <h1>Please select an item</h1> 
      )}
    </div>
  )
}

export default Content
