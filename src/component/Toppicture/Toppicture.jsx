import './Toppicture.css'
function TopPicture (prop) {
    return (
        <div className='top'>
            <img src={prop.pic} alt="News" className='toppic'/>
            <div className='overlay'></div>
            <div className="toppictext">{prop.text}</div>
        </div>
    );
}

export default TopPicture;