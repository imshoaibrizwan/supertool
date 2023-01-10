import React from "react";

const ImageToPdfScreen = () => {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div style={{ paddingTop: "18vh" }}>
        <h1 style={{ textAlign: "center", marginBottom: "4vh" }}>
          Image to PDF
        </h1>
        <label for="images" class="drop-container">
          <span class="drop-title">Drop files here</span>
          or
          <input type="file" id="images" accept="image/*" required />
        </label>
      </div>
    </div>
  );
};

export default ImageToPdfScreen;
