import Quotes from './components/Quotes'

function App() {
  return (
    <div className='parent-grid-container'>
      <div className='grid-container'>
        <div className='header-container'>
          <h1 className='header'>quote librarian</h1>
        </div>
        <div className='main-container'>
          <div className='content'></div>
            <Quotes />
        </div>
        <div className='footer-container'>
          <div className='footer'>
            <a className='link' href='https://github.com/vince1444' target="_blank" rel="noopener noreferrer">@vince1444</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
