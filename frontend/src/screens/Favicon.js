import React, { useState } from "react";
import favicons from "favicons";

function Favicon() {
  const [image, setImage] = useState(null);
  const [config, setConfig] = useState({});
  const [favicon, setFavicon] = useState(null);

  const generateFavicon = () => {
    favicons(image, config, (error, response) => {
      if (error) {
        console.error(error.message);
        return;
      }
      setFavicon(response.images);
    });
  };

  return (
    <div>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} />
      <input
        type="text"
        onChange={(e) => setConfig({ ...config, appName: e.target.value })}
        placeholder="App name"
      />
      <button onClick={generateFavicon}>Generate Favicon</button>
      {favicon &&
        favicon.map((item, index) => (
          <img
            key={index}
            src={item.url}
            width={item.width}
            height={item.height}
          />
        ))}
    </div>
  );
}

export default Favicon;
