import React, { useEffect, useState } from "react";

import YouTube from "react-youtube";

function Player({ station }) {
  const [opts, setOpts] = useState();

  useEffect(() => {
    setOpts({
      vq: "tiny",
      width: 10,
      height: 10,
      playerVars: {
        allow: "autoplay",
        autoplay: 1,
        origin: "http://localhost:3000",
      },
    });
  }, []);

	const _onReady = (event) => {
    event.target.playVideo();
  };

  return (
    <div style={{ display: "none" }}>
      {station && station.key && (
        <YouTube
          videoId={station.key}
          opts={opts}
          onReady={_onReady}
          allow="autoplay"
          style={{ display: "none" }}
        />
      )}
    </div>
  );
}

export default Player;
