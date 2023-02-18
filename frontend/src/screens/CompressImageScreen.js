import React, { useState, useRef } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Loader from "../components/Loader";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import imageCompression from "browser-image-compression";
import { Alert } from "react-bootstrap";

const CompressImageScreen = ({ showPage }) => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [compressedImage, setCompressedImage] = useState("");
  const [fileName, setFileName] = useState("");

  const triggerFileSelectPopup = () => inputRef.current.click();

  const handle = (e) => {
    const imageFile = e.target.files[0];

    setOrigImage(imageFile);

    setOrigImageFile(URL.createObjectURL(imageFile));

    setFileName(imageFile.name);
    setShow(false);
  };

  const handleCompressImage = (e) => {
    e.preventDefault();

    setLoading(true);

    const options = {
      maxSizeMB: 1,

      maxWidthOrHeight: 500,

      useWebWorker: true,
    };

    if (options.maxSizeMB >= origImage / 1024) {
      <Alert variant={"danger"}>Image is too small, cant be compressed</Alert>;

      return 0;
    }

    let output;

    imageCompression(origImage, options).then((x) => {
      output = x;

      const downloadLink = URL.createObjectURL(output);

      setCompressedImage(downloadLink);
      setLoading(false);
      setShow(true);
    });
  };
  return (
    <>
      {showPage && (
        <>
          {" "}
          {loading && <Loader status={loading} />}
          <div className="crop-div">
            <div className="container" style={{ marginBottom: "5vh" }}>
              <div style={{ paddingTop: "40px", textAlign: "center" }}>
                <h1 style={{ textAlign: "center" }}>Compress Image</h1>
                Our Image Compressor uses a smart combination of compression
                algorithms and best optimization to compress the size of your
                images while keeping the same level of quality.
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
                    <button
                      className="big-btn"
                      onClick={triggerFileSelectPopup}
                    >
                      Select Image
                    </button>
                  </label>

                  <div className="compress_section">
                    <Row>
                      <Col lg="12" md="12">
                        {origImageFile && <Image src={origImageFile} />}
                      </Col>

                      <Col lg="12" md="12" style={{ marginTop: "2vh" }}>
                        {show === true && (
                          <div>
                            <Alert variant={"success"}>
                              Image Compressed Successfully
                            </Alert>
                          </div>
                        )}
                        {origImageFile && (
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
                              handleCompressImage(e);
                            }}
                          >
                            Compress
                          </button>
                        )}

                        {compressedImage && show && (
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
                          >
                            <a href={compressedImage} download={fileName}>
                              <HiOutlineDownload
                                style={{ fontSize: "23px", color: "white" }}
                              />
                              Download
                            </a>
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
                          <FaCompressArrowsAlt size="40px" color="#06F28C" />
                          <h3 style={{ padding: "1vh 0vh" }}>
                            How To Compress An Image Online?
                          </h3>
                          <p style={{ textAlign: "left" }}>
                            The crop image function is, as the name suggests,
                            reserved for photos and image files only. This means
                            it will only work correctly if you upload an image
                            to crop. Other files like documents won’t work. If
                            you are satisfied with cropping the image, you can
                            save the cropped image in your drive.
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
                          <h3 style={{ padding: "1vh 0vh" }}>
                            Compress Photos Online
                          </h3>
                          <p style={{ textAlign: "left" }}>
                            From your phone, tablet, desktop computer, or
                            someone else’s pc. From work, vacation, home or
                            during commute. With SUPERTOOL, you can compress
                            your images and photos. All you need is a working
                            internet connection. With SUPERTOOL you can compress
                            photo and image files on the go!
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
      )}
    </>
  );
};

export default CompressImageScreen;
