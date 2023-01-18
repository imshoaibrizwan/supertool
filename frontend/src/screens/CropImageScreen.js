import React, { useState, useRef } from "react";
import Cropper from "react-easy-crop";
import { Slider } from "@mui/material";
import { HiOutlineDownload } from "react-icons/hi";
import { Alert } from "react-bootstrap";
import Loader from "../components/Loader";
import { Row, Col, Container } from "react-bootstrap";
import { BsFillHandThumbsUpFill, BsFileEarmarkFill } from "react-icons/bs";
import { FaLock } from "react-icons/fa";
import { TbArrowsLeftRight } from "react-icons/tb";
import { FaCropAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import {
  croppingHandler,
  generateDownload,
} from "./utils/CropImageUtils/cropImage";

const CropImageScreen = () => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const triggerFileSelectPopup = () => inputRef.current.click();
  const onCropComplete = (croppedAreaPercentage, croppedAreaPixels) => {
    setCroppedArea(croppedAreaPixels);
  };

  const onSelectFile = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setImage(reader.result);
      });
    }
  };

  const cropHandler = () => {
    if (image) {
      setLoading(true);
    }

    setShow(false);
    croppingHandler(image, croppedArea, setShow, setLoading);
  };
  const downloadHandler = () => {
    generateDownload();
  };
  return (
    <>
      {loading && <Loader status={loading} />}
      <div className="crop-div">
        <div className="container" style={{ marginBottom: "5vh" }}>
          <div style={{ paddingTop: "40px", textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>Crop Image</h1>
            Crop JPG, PNG by defining a rectangle in pixels. Cut your image
            online.
            <br />
            Files are processed entirely on your device and does not get
            uploaded to any server.
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="container-buttons">
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={onSelectFile}
                  style={{ display: "none" }}
                />
              </div>

              <label
                htmlFor="images"
                className="drop-container"
                style={{ background: "#06F28C", marginBottom: "1vh" }}
              >
                <span className="drop-title">Drop files here</span>
                or
                <button onClick={triggerFileSelectPopup} className="big-btn">
                  Select Image
                </button>
              </label>
              {image && (
                <div className="main-cropper">
                  <div className="container-cropper">
                    {image ? (
                      <>
                        <div className="cropper">
                          <Cropper
                            image={image}
                            crop={crop}
                            zoom={zoom}
                            aspect={1}
                            onCropChange={setCrop}
                            onZoomChange={setZoom}
                            onCropComplete={onCropComplete}
                          />
                        </div>

                        <div className="slider">
                          <Slider
                            min={1}
                            max={3}
                            step={0.1}
                            value={zoom}
                            onChange={(e, zoom) => setZoom(zoom)}
                          />
                        </div>
                      </>
                    ) : null}
                  </div>
                  {show === true && (
                    <div>
                      <Alert variant={"success"}>
                        Image Cropped Successfully
                      </Alert>
                    </div>
                  )}

                  <div className="container-buttons">
                    <button
                      className="button"
                      style={{
                        backgroundColor: "#764AF1",
                        borderColor: "#764AF1",
                        color: "#ffffff",
                        fontWeight: "bold",
                        padding: "5px 12px",
                        fontSize: "20px",
                        marginRight: "1vh",
                      }}
                      onClick={cropHandler}
                    >
                      Crop
                    </button>

                    {show === true && (
                      <button
                        className="button"
                        style={{
                          backgroundColor: "green",
                          borderColor: "green",
                          color: "#ffffff",
                          fontWeight: "bold",
                          padding: "5px 12px",
                          fontSize: "20px",
                        }}
                        onClick={downloadHandler}
                      >
                        <HiOutlineDownload
                          style={{ fontSize: "23px", color: "white" }}
                        />
                        Download
                      </button>
                    )}
                  </div>
                </div>
              )}
              <div className="imgtopdf_services">
                <Container style={{ padding: "10vh 0vh 4vh 0vh" }}>
                  <Row>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <FaCropAlt size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        How To Crop An Image Online?
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        The crop image function is, as the name suggests,
                        reserved for photos and image files only. This means it
                        will only work correctly if you upload an image to crop.
                        Other files like documents won’t work. If you are
                        satisfied with cropping the image, you can save the
                        cropped image in your drive.
                        <br /> <b>Image Formats:</b> BMP, EPS, GIF, HDR/EXR,
                        ICO, JPG, PNG, SVG, TGA, TIFF, WBMP, WebP
                      </p>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <TbWorld size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>Crop Photos Online</h3>
                      <p style={{ textAlign: "left" }}>
                        From your phone, tablet, desktop computer, or someone
                        else’s pc. From work, vacation, home or during commute.
                        With SUPERTOOL, you can crop your images and photos for
                        Instagram, Facebook, uploading it somewhere else or
                        sending it to your friends and family from basically
                        anywhere. All you need is a working internet connection.
                        With SUPERTOOL you can crop photo and image files on the
                        go!
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>

          <div
            className="dropzone"
            onDragStart={(e) => {}}
            onDrop={(e) => {
              if (e.stopPropagation) {
                e.stopPropagation(); // stops the browser from redirecting.
              }
              if (e.preventDefault) {
                e.preventDefault(); // stops the browser from redirecting.
              }
              let files = e.dataTransfer.files;
              this.readfiles(files);
            }}
            onDragOver={(e) => {
              if (e.preventDefault) {
                e.preventDefault(); // stops the browser from redirecting.
              }
            }}
            onDragEnter={(e) => {
              e.preventDefault();
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CropImageScreen;
