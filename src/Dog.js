import ReactPlayer from 'react-player'
import './Dog.css';

export default function Dog(props) {

    function getFileExtension(url) {
        return url.split(/[#?]/)[0].split('.').pop().trim()
    }

    const renderDog = () => {
        switch (getFileExtension(props.url)) {
            case "jpg":
                return <img className="dogPicture" src={props.url} alt="dogPicture" />;
            case "jpeg":
                return <img className="dogPicture" src={props.url} alt="dogPicture" />;
            case "JPG":
                return <img className="dogPicture" src={props.url} alt="dogPicture" />;
            case 'png':
                return <img className="dogPicture" src={props.url} alt="dogPicture" />;
            case 'PNG':
                return <img className="dogPicture" src={props.url} alt="dogPicture" />;
            case "gif":
                return <img className="dogPicture" src={props.url} alt="dogPicture" />;
            case "webm":
                return <ReactPlayer controls={true} playing={true} url={props.url} width={"350px"}/>
            case "mp4":
                return <ReactPlayer className="reactPlayer" controls={true} playing={true} url={props.url}height={"100%"} width={"100%"}/>
            default:
                return null
        }
    }

    return (
        <div className="dogContainer">{renderDog()}</div>
    );


}