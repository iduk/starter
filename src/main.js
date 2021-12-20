import * as bootstrap from 'bootstrap';
import './assets/scss/style.scss';
import Image from './assets/images/icon.png'


async function getComponent() {
  const { default: _ } = await import('lodash');

  // Lodash, now imported by this script
  console.log(Image)

  return element;
}

getComponent().then((component) => {
   document.body.appendChild(component);
 });
