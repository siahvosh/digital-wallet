declare module 'react-lottie-player' {
    import { FC } from 'react';

    interface LottieProps {
        loop?: boolean;
        play?: boolean;
        speed?: number;
        segments?: [number, number];
        style?: React.CSSProperties;
        animationData: any;
        onClick?: () => void;
    }

    const Lottie: FC<LottieProps>;

    export default Lottie;
}
