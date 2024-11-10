import React from 'react';
import Lottie from 'react-lottie-player';
import animationData from './Wallet.json';


const LottieAnimation = () => {
    return (
        <div>
            <Lottie
                loop
                animationData={animationData}
                play
                style={{ width: 150, height: 150 }}
            />
        </div>
    );
};

export default LottieAnimation;