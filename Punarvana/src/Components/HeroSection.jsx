import Button from './Button.jsx'
function HeroSection({ title, subtitle }) {
  return (
    <div style={{background: 'linear-gradient(to right, #4CAF50, #81C784)', color: 'white', padding: '50px 20px', textAlign: 'center', borderRadius: '10px', margin: '20px 0'}}>
      <h1>{title}</h1>
      <p>{subtitle}</p>
      <Button text="List Your Plant" color="white" />
    </div>
  )
}
export default HeroSection