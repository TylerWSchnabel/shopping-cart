import React from "react";
import ReactPlayer from "react-player"

const Music = () => {


    return (
        <div>
            <h1 className="heading">Music</h1>
            <div className="music-cont">
                <div className="song-container">
                    <h2 className="song-title">I Like The Way you Move</h2>
                    <ReactPlayer className="song" width="80vw"
                        url="https://soundcloud.com/the_bay_gulls/i-like-the-way-that-you-move?si=062facfa11f04ed3902dad5738be0a97&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                </div>
                <div className="song-container">
                    <h2 className="song-title">Overblown</h2>
                    <ReactPlayer className="song" width="80vw"
                        url="https://soundcloud.com/the_bay_gulls/overblown-4?si=0a7e11fcf41a4a85b84e97f0d6352a55&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                </div>
                <div className="song-container">
                    <h2 className="song-title">Tito's on Ice</h2>
                        <ReactPlayer className="song" width="80vw"
                            url="https://soundcloud.com/the_bay_gulls/titos-on-ice?si=7debeac080284e36b7a52de8da2c6eb8&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                        />
                </div>
                <div className="song-container">
                    <h2 className="song-title">Sealegs</h2>
                    <ReactPlayer className="song" width="80vw"
                        url="https://soundcloud.com/the_bay_gulls/sealegs?si=d9dcd8390ea740179eefaf0b3193b996&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                </div>
                <div className="song-container">
                    <h2 className="song-title">Beggin</h2>
                    <ReactPlayer className="song" width="80vw"
                        url="https://soundcloud.com/the_bay_gulls/beggin-1?si=605b4a48b3e8467d81c398742e4ec690&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
                    />
                </div>  
                
            </div>
        </div>
    )
}

export default Music;