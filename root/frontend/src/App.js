import img from './amangus.PNG'

function App() {
  return (
    <div className='parent-grid-container'>
      <div className='grid-container'>
        <div className='item-a'>
          <img src={img} className='imposter' alt='amongus'></img>
        </div>
        <div className='item-b'>
         
        </div>
        <div className='item-d'>
          <div className='footer-bar'>
            <a className='link' href='https://github.com/vince1444'>@vince1444</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
