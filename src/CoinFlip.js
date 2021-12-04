import {React, useState} from 'react';
import img_heads from './heads.png'
import img_tails from './tails.png'
import Description from './Description.js'

const CoinFlip = () => {

    let [heads, setHeads] = useState(true);
    let [count, setCount] = useState(0);
    let [headCount, setHeadCount] = useState(0);
    let [tailCount, setTailCount] = useState(0);
    let pic = heads ? img_heads : img_tails;

    const flip = () => {
        if(Math.random()>0.5) {
            setHeads(true);
            setHeadCount(headCount+1);
        } else {
            setHeads(false);
            setTailCount(tailCount+1);
        }
        setCount(count+1);
    };

    return (
        <>
            <img src={pic} alt='coin' width={100}/>
            <br/>
            <button onClick={flip}>Flip Me!</button>
            <br/>

            <Description count={count} heads={headCount} tails={tailCount} />
        </>
    );
};

export default CoinFlip;