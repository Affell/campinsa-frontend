import YouTube, { YouTubeProps } from "react-youtube";
import "./VideoPlayer.css"; 

interface Props {
    videoId: string,
};

const VideoPlayer = ({ videoId }: Props) => {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        playerVars: {
            autoplay: 2,
        },
    };

    return (
        <div className="video-responsive d-flex justify-content-center">
            <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady}/>
        </div>
    );
}

export default VideoPlayer;
