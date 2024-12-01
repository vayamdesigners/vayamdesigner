import { Player } from "@lottiefiles/react-lottie-player";
import animationData from "./SendMailAnimation.json";
const SendMailAnimation = () => {
  return (
    <div>
      <Player src={animationData} className="player" loop autoplay />
    </div>
  );
};

export default SendMailAnimation;
