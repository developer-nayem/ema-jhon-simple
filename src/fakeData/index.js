import androids from './android.json'
import cameras from './camera.json'
import laptops from './laptop.json'

const fakeData = [...androids, ...cameras, ...laptops];

// const shuffle = a => {
//     for (let i = a.length; i; i--) {
//         let j = Math.floor(Math.random() * i);
//         [a[i -1], a[j]] = [a[j], a[i -1]];
//     }
// }

// shuffle(fakeData)
// console.log(fakeData);
export default fakeData;