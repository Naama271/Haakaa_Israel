import '../App.css';
import url from '../videos/haakaa_brand.mp4'

function Video() {
  return (
    <div>        
  <video  key={url} autoPlay muted >
     <source src={url} type="video/mp4" /> 
  </video>
    </div>
  );
}

export default Video;
