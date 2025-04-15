import logo from './logo.svg';
import character from './cat_pink.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={character} className="App-logo" alt="logo" />
        <p>
          나는 바보다        
        </p>
        <h6>이거 너무 어려워...ㅠㅠ 공부 싫음</h6>
      </header>
      <></>
    </div>

  );
}
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
export default App;