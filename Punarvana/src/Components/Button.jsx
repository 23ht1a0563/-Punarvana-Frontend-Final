function Button({ text, color = '#4CAF50' }) {
  return (
    <button style={{background: color, color: 'white', padding: '8px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer'}}>
      {text}
    </button>
  )
}
export default Button