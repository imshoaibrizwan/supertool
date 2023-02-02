import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Loader from "../components/Loader";
import { IoMdResize } from "react-icons/io";
import { HiOutlineDownload } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import Resizer from "react-image-file-resizer";
import { saveAs } from "file-saver";

function ResizeImageScreen({ src }) {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [fileName, setFileName] = useState("");
  const [fileExe, setFileExe] = useState("");
  const [inputWidth, setInputWidth] = useState(0);
  const [inputHeight, setInputHeight] = useState(0);

  const triggerFileSelectPopup = () => inputRef.current.click();

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        inputWidth,
        inputHeight,
        fileExe.toString(),
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64",
        inputWidth,
        inputHeight
      );
    });

  const handle = (e) => {
    setSuccess(false);
    setFailed(false);

    const imageFile = e.target.files[0];

    setOrigImage(imageFile);

    setOrigImageFile(URL.createObjectURL(imageFile));

    setFileName(imageFile.name.split(".", 1));
    setFileExe(imageFile.name.split(".").pop());
  };

  const handleResizeImage = async () => {
    setLoading(true);
    const image = await resizeFile(origImage);

    if (image) {
      setLoading(false);
      setOrigImageFile(image);
      setSuccess(true);
    } else {
      setFailed(true);
    }
  };

  const downloadHandler = () => {
    saveAs(origImageFile, `${fileName}.${fileExe}`);
  };

  return (
    <>
      {loading && <Loader status={loading} />}
      <div className="crop-div">
        <div className="container" style={{ marginBottom: "5vh" }}>
          <div style={{ paddingTop: "40px", textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>Image Resizer</h1>
            Image Resizer online allows you to resize image in seconds. Simply
            Upload your photo, set your required dimensions, click on the
            ‘Resize Image’ button, and download.
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="container-buttons">
                <input
                  type="file"
                  ref={inputRef}
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={(e) => handle(e)}
                />
              </div>

              <label
                htmlFor="images"
                className="drop-container"
                style={{ background: "#06F28C", marginBottom: "1vh" }}
              >
                <span className="drop-title">Drop files here</span>
                or
                <button className="big-btn" onClick={triggerFileSelectPopup}>
                  Select Image
                </button>
              </label>

              <div className="compress_section">
                <Row>
                  <Col lg="12" md="12">
                    {origImageFile && (
                      <>
                        <img
                          src={origImageFile}
                          // width={dimensions.width}
                          // height={dimensions.height}
                        />
                        <p>
                          Dimensions: {inputWidth} X {inputHeight}
                        </p>
                      </>
                    )}
                  </Col>

                  {origImageFile && (
                    <Col lg="12" md="12">
                      <div className="dimensions">
                        <h2 style={{ color: "wheat" }}>Dimensions</h2>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            marginBottom: "10px",
                          }}
                        >
                          <div style={{ marginBottom: "2vh" }}>
                            <label
                              htmlFor="width"
                              style={{ marginRight: "4vh" }}
                            >
                              <h4 style={{ color: "wheat" }}>Width:</h4>
                            </label>
                            <input
                              id="width"
                              type="number"
                              onChange={(e) => setInputWidth(e.target.value)}
                            />
                          </div>
                          <div>
                            <label
                              htmlFor="height"
                              style={{ marginRight: "4vh" }}
                            >
                              <h4 style={{ color: "wheat" }}>Height:</h4>
                            </label>
                            <input
                              id="height"
                              type="number"
                              onChange={(e) => setInputHeight(e.target.value)}
                            />
                          </div>
                        </div>
                      </div>
                    </Col>
                  )}

                  <Col lg="12" md="12" style={{ marginTop: "2vh" }}>
                    {success && (
                      <div>
                        <Alert variant={"success"}>
                          Image Resized Successfully
                        </Alert>
                      </div>
                    )}
                    {failed && (
                      <div>
                        <Alert variant={"danger"}>Image Resized Failed</Alert>
                      </div>
                    )}

                    {origImage && (
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
                        onClick={(e) => {
                          handleResizeImage(e);
                        }}
                      >
                        Resize Image
                      </button>
                    )}

                    {success && (
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
                  </Col>
                </Row>
              </div>

              <div className="imgtopdf_services">
                <Container style={{ padding: "10vh 0vh 4vh 0vh" }}>
                  <Row>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <IoMdResize size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        How To Resize An Image Online?
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        The usage of this image resizer doesn’t involve any
                        troubles. All you need to do is follow the steps given
                        below: Access the online image resizer on online
                        SUPERTOOLS. Submit the picture you wish to resize from
                        your device or cloud storage. Set your required
                        dimensions. Hit the “Resize Image” button. Click the
                        download button to save the resized image on your
                        device.
                      </p>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <TbWorld size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        Resize Photos Online
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        From your phone, tablet, desktop computer, or someone
                        else’s pc. From work, vacation, home or during commute.
                        With SUPERTOOL, you can compress your images and photos.
                        All you need is a working internet connection. With
                        SUPERTOOL you can compress photo and image files on the
                        go!
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResizeImageScreen;
