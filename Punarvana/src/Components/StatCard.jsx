function StatCard({ number, label }) {
  return (
    <div style={{border: '1px solid #ddd', borderRadius: '10px', padding: '15px', background: 'white', textAlign: 'center', width: '150px'}}>
      <h2 style={{color: '#2E7D32', margin: 0}}>{number}</h2>
      <p>{label}</p>
    </div>
  )
}
export default StatCard