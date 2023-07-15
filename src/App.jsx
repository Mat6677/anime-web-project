import { useState,useEffect } from "react";
import { Nav } from "./components/NAV/Nav";
import { Slider } from "./components/Slider/Slider";

// import axios from 'axios';

// const options = {
//   method: 'GET',
//   url: 'https://anime-db.p.rapidapi.com/anime',
//   params: {
//     page: '2',
//     size: '10',
//     sortBy: 'ranking'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'f65b866ca8msh746e6368ed94b75p133bf9jsn246535c9e563',
//     'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

function App() {
    const media = window.innerWidth
    console.log(media)
    const [nav, setNav] = useState(true)
    useEffect(() => {
      if (media < 850) {
        setNav(false)
      }
      return;
    }, [])
    
  return (
    <>
      <Nav nav={nav}></Nav>
      <Slider></Slider>
    </>
  );
}

export default App;
