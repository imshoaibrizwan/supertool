import React, { useState, useRef } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Loader from "../components/Loader";
import { TbWorld } from "react-icons/tb";
import Tesseract from "tesseract.js";
import { BsFillFileTextFill } from "react-icons/bs";
import { IoIosCopy } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ImageToTextScreen = () => {
  const inputRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [origImage, setOrigImage] = useState("");
  const [origImageFile, setOrigImageFile] = useState("");
  const [textResult, setTextResult] = useState("");
  const [show, setShow] = useState(false);

  const triggerFileSelectPopup = () => inputRef.current.click();

  const handle = (e) => {
    setSuccess(false);
    setFailed(false);
    setTextResult("");

    const imageFile = e.target.files[0];
    setOrigImage(imageFile);
    setOrigImageFile(URL.createObjectURL(imageFile));
  };

  const imageToTextHandler = async () => {
    setLoading(true);
    Tesseract.recognize(origImage, "eng")
      .then((res) => {
        setTextResult(res.data.text);
        setLoading(false);
        setSuccess(true);
      })
      .catch((err) => {
        if (err) {
          setLoading(false);
          setFailed(true);
        }
      });
  };

  return (
    <>
      {loading && <Loader status={loading} />}
      <div className="crop-div">
        <div className="container" style={{ marginBottom: "5vh" }}>
          <div style={{ paddingTop: "40px", textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>Image to Text Converter</h1>
            To extract text from image, we introduce a free online OCR (Optical
            Character Recognition) service. Upload a photo to the image to text
            converter online, click on convert and get your text file instantly.
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
                        <img src={origImageFile} alt="img" />
                        <br />
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
                            marginTop: "1vh",
                          }}
                          onClick={imageToTextHandler}
                        >
                          Convert
                        </button>
                      </>
                    )}
                  </Col>

                  <Col lg="12" md="12" style={{ marginTop: "2vh" }}>
                    {success && (
                      <div>
                        <Alert variant={"success"}>
                          Text From Image Generated Successfully
                        </Alert>
                      </div>
                    )}
                    {failed && (
                      <div>
                        <Alert variant={"danger"}>
                          Text From Image Process Failed
                        </Alert>
                      </div>
                    )}
                  </Col>
                </Row>
              </div>

              {textResult && (
                <div className="image_text">
                  <Col lg="12" md="12">
                    <p>{textResult}</p>
                  </Col>
                  <Col lg="12" md="12">
                    <div style={{ float: "right" }}>
                      <CopyToClipboard
                        text={textResult}
                        onCopy={() => setShow(!show)}
                      >
                        <IoIosCopy
                          className="md5_btn"
                          size="35px"
                          color="#06F28C"
                        />
                      </CopyToClipboard>
                    </div>
                  </Col>
                </div>
              )}

              {show && (
                <Col
                  lg="12"
                  md="12"
                  style={{ marginTop: "2vh", textAlign: "center" }}
                >
                  {success && (
                    <div>
                      <Alert variant={"success"}>Text Copied!</Alert>
                    </div>
                  )}
                </Col>
              )}

              <div className="imgtopdf_services">
                <Container style={{ padding: "10vh 0vh 4vh 0vh" }}>
                  <Row>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <BsFillFileTextFill size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        How to Convert Image to Text Online?
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        Online SUPERTOOLS has created an exceptionally
                        resourceful image to text converter online. Follow
                        simple steps to convert image to text: <br />
                        <b>1. </b>Upload an image to convert into text from your
                        device. <br />
                        <b>2. </b>Click the Convert to Text button to initiate
                        the conversion process.
                        <br />
                        <b>3. </b> Preview the converted text; copy it to the
                        clipboard with a single click or save the text file on
                        your device by clicking the Download button.
                      </p>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <TbWorld size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        Image to Text Converter Online
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        From your phone, tablet, desktop computer, or someone
                        else’s pc. From work, vacation, home or during commute.
                        With SUPERTOOL, you can convert your images and photos
                        to text with a single click. All you need is a working
                        internet connection.
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
};

export default ImageToTextScreen;
