import component from "./component";
import image from './images/Wallpaper.jpg';
import './styles/style.css';

document.body.appendChild(component());

const img = document.createElement('img');
img.src = image;
img.style.height = '500px';
document.body.appendChild(img);
