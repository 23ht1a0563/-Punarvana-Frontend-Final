import Button from './Button.jsx'
function PlantCard({ plantName, location, image, isFree }) {
  return (
    <div style={{border: '1px solid #ddd', borderRadius: '10px', padding: '15px', background: 'white', width: '250px'}}>
      <img src={image} alt={plantName} style={{width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px'}} />
      <h3>{plantName}</h3>
      <p>📍 {location}</p>
      <p style={{color: isFree ? 'green' : 'orange', fontWeight: 'bold'}}>
        {isFree ? 'Free to Adopt' : 'For Sale'}
      </p>
      <Button text="Rescue Plant" />
    </div>
  )
}
export default PlantCard