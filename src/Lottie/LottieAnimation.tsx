import React from 'react';
import Lottie from 'react-lottie-player';


const LottieAnimation = (props: any) => {
    return (
        <div>
       <Lottie
           loop
           animationData={props.animation}
           play
           style={{
               width: props.animationSize.width,
               height: props.animationSize.height ,
               justifySelf: 'end',
               marginTop: '-3rem',
       }}
       />
        </div>
    );
};

export default LottieAnimation;