import { useState, useEffect} from "react";
import './Metronome.css'
const Metronome = () => {
    const [bpm, setBpm] = useState(120);
    const [playing, setPlaying] = useState(false)
    

    const handleBpmChange = (event) => {
        setBpm(event.target.value);
    }

    let delay = 60/bpm * 1000; 
    let beatInterval;

    const playAudio = () => {
        document.getElementById("audio").play();
     };


    const play =()=>{
        playAudio()
        setPlaying(true);
    }

    const pause = ()=>{
        clearInterval(beatInterval);
        setPlaying(false);
    }

    const playPause = ()=>{
        playing?pause():play();
    }

    useEffect(()=>{
        if(playing){
          clearInterval(beatInterval)  
           beatInterval = setInterval(()=>{
                playAudio()}, delay)
        }
        
    })

    return(
        <>
        <div className="metronome">
        <h2 className="heading">Beats Per Minute</h2>
        <h1 className="bpm">{bpm}</h1>
        <form className="form">
            <input
            type="range"
            min="40" max="200"
            steps="1"
            defaultValue="120"
            onChange={handleBpmChange}
            />
        </form>
        <button onClick={playPause} className="button">
            {playing ? 'Pause': 'Play'}
        </button>
        </div>
        </>
    )
}

export default Metronome;

