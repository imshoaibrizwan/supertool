import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Container, Image } from "react-bootstrap";
import Loader from "../components/Loader";
import { FaCompressArrowsAlt } from "react-icons/fa";
import { HiOutlineDownload } from "react-icons/hi";
import { TbWorld } from "react-icons/tb";
import { MdSlowMotionVideo } from "react-icons/md";
import { Alert } from "react-bootstrap";
import { createFFmpeg, fetchFile } from "@ffmpeg/ffmpeg";
import { saveAs } from "file-saver";

const ffmpeg = createFFmpeg({ log: true });

const VideoToGifScreen = () => {
  const inputRef = useRef();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [gifUrl, setGifUrl] = useState("");
  const [video, setVideo] = useState();
  const [name, setName] = useState();
  const [ready, setReady] = useState(true);

  const triggerFileSelectPopup = () => inputRef.current.click();

  const init = async () => {
    if (!ffmpeg.isLoaded()) {
      await ffmpeg.load();
    }

    setReady(false);
  };

  const setVid = (e) => {
    setVideo(e.target.files?.item(0));
    setName(e.target.files[0].name);
    setShow(false);
  };
  const convertToGif = async () => {
    setLoading(true);
    await ffmpeg.FS("writeFile", name, await fetchFile(video));
    await ffmpeg.run(
      "-i",
      name,
      "-t",
      "2.5",
      "-ss",
      "2.0",
      "-f",
      "gif",
      "output.gif"
    );
    const data = ffmpeg.FS("readFile", "output.gif");
    const url = URL.createObjectURL(
      new Blob([data.buffer], { type: "image/gif" })
    );
    setGifUrl(url);
    if (url) {
      setLoading(false);
      setShow(true);
    }
  };
  const downloadGif = () => {
    saveAs(gifUrl, "output.gif");
  };
  useEffect(() => {
    init();
  }, [init]);
  return (
    <>
      {loading && <Loader status={loading} />}
      {ready && <Loader status={ready} />}

      <div className="crop-div">
        <div className="container" style={{ marginBottom: "5vh" }}>
          <div style={{ paddingTop: "40px", textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>Video to GIF Converter</h1>
            Turn a video into a GIF and share it more conveniently across the
            internet. Now you turn a video into an animated GIF with our free
            Video to GIF Converter tool. Upload your video now!
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="container-buttons">
                <input
                  type="file"
                  ref={inputRef}
                  accept="video/*"
                  style={{ display: "none" }}
                  onChange={(e) => setVid(e)}
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
                  Select Video
                </button>
              </label>

              <div className="gif_section">
                <Row>
                  <Col lg="12" md="12">
                    {video && (
                      <video
                        controls
                        width="80%"
                        src={URL.createObjectURL(video)}
                      ></video>
                    )}
                  </Col>

                  <Col lg="12" md="12" style={{ marginTop: "2vh" }}>
                    {show && (
                      <div>
                        <Alert variant={"success"}>
                          GIF Generated Successfully.
                        </Alert>
                      </div>
                    )}
                    {video && name && (
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
                          marginBottom: "1vh",
                        }}
                        onClick={convertToGif}
                      >
                        Convert to GIF
                      </button>
                    )}

                    {show && (
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
                        onClick={downloadGif}
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
                      <MdSlowMotionVideo size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        How To Convert GIF from Video Online?
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        With this online file onverter, you can turn your videos
                        into animated GIFs. Grab your video clip from your
                        phone, computer to upload it. Optionally, Then, click
                        the <b>Convert to GIF</b> button and wait for the
                        completion then download the GIF.
                        <br /> <b>Video Formats: </b>There is almost no
                        limitation to which kinds of videos you can convert to
                        animated GIF. Most popular and common files are
                        supported, such as: 3GP, AVI, FLV, MOV, MP4, WebM, WMV.
                      </p>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <TbWorld size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        Generate GIF Online
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        From your phone, tablet, desktop computer, or someone
                        else’s pc. From work, vacation, home or during commute.
                        With SUPERTOOL, you can convert your images and photos
                        to GIFs. All you need is a working internet connection.
                        With SUPERTOOL you can compress photo and image files on
                        the go!
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

export default VideoToGifScreen;
