import { useState, useEffect } from 'react'
import Navbar from '../components/navbar'
import Cards from '../components/cards';

export default function Testing() {
    const [count, setCount] = useState(0)


    //hehe iseng coba 
    const beep = () => { 
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        oscillator.type = 'square'; 
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime); 
        oscillator.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.2); // play for 0.2 seconds
      };

    useEffect(() => {
        if (count % 10 === 0 && count !== 0) {
            alert(`Angka bisa dibagi 10!!!`);
            beep();
        }
    }, [count])

    return(
        <section>
            <div className="text-white w-screen h-screen overflow-x-hidden">

                <Navbar />

                <div className="p-20">
                    <Cards />
                </div>
                <div className="mb-20">
                    <h1 className="text-black font-extrabold">Counter Demo</h1>
                    <div className="card flex flex-col items-center justify-center">
                        <button onClick={() => setCount((count) => count + 1)} className="font-extrabold mb-8 min-w-20 min-h-20 bg-slate-800" style={{ width: `${count.toString().length * 20 + 40}px` }}>
                            <span className="text-3xl">{count}</span>
                        </button>

                        <section className="flex flex-row items-center justify-center gap-4">
                            <button onClick={() => setCount((count) => count - 1)} className="bg-slate-800"> 
                                {/* kok ganti bg gbs anj */}
                                -
                            </button>

                            <button onClick={() => setCount(0)}>
                                Reset
                            </button>

                            <button onClick={() => setCount((count) => count + 1)}>
                                +
                            </button>
                        </section>
                    </div>
                </div>

                
            </div>
            
        </section>
    )
}