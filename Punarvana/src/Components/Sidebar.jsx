function Sidebar({ menuItems }) {
  return (
    <div style={{width: '200px', background: '#E8F5E9', padding: '20px'}}>
      {menuItems.map((item, i) => (
        <p key={i} style={{cursor: 'pointer', padding: '10px'}}>{item}</p>
      ))}
    </div>
  )
}
export default Sidebar