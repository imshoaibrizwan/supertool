import React, { useState, useEffect } from "react";
import axios from "axios";
import { saveAs } from "file-saver";
import Loader from "../components/Loader";
import { Row, Col, Container } from "react-bootstrap";
import { FaCropAlt } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

import {
  croppingHandler,
  generateDownload,
} from "./utils/CropImageUtils/cropImage";

const CropImageScreen = ({ showPage }) => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");
  const [maxresdefault, setMaxresDefault] = useState("");
  const [hqdefault, setHqDefault] = useState("");
  const [mqdefault, setMqDefault] = useState("");

  const getYouTubeThumbnail = async (url) => {
    const videoId = url.split("v=")[1];
    const YoutubeApiKey = "AIzaSyBPfboYyJ1DiDWxcE2PeSYNIGYy7NZbrgE";
    const thumbnailUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${YoutubeApiKey}&part=snippet&fields=items(snippet(thumbnails))`;

    return await axios
      .get(thumbnailUrl)
      .then((response) => {
        return response.data.items[0].snippet.thumbnails.high.url;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const generateThumbnail = () => {
    getYouTubeThumbnail(videoUrl).then((url) => {
      const maxresdefaulturl = url.replace("hqdefault", "maxresdefault");
      const hqdefaulturl = url;
      const mqdefaulturl = url.replace("hqdefault", "mqdefault");
      setMaxresDefault(maxresdefaulturl);
      setHqDefault(hqdefaulturl);
      setMqDefault(mqdefaulturl);
    });
  };

  useEffect(() => {
    generateThumbnail();
  }, [generateThumbnail]);

  const downloadImage = () => {
    const url = maxresdefault;
    // const updUrl =
    // const url = window.URL.createObjectURL(new Blob([maxresdefault]))
    // alert('URL: ' + url)
    const link = document.createElement("a");

    link.href = url;
    link.setAttribute("download", "Download.jpg");
    // alert('URL: ' + url)

    document.body.appendChild(link);

    link.click();
    document.body.removeChild(link);
  };
  return (
    <>
      {showPage && (
        <>
          {loading && <Loader status={loading} />}
          <div className="crop-div">
            <div className="container" style={{ marginBottom: "5vh" }}>
              <div style={{ paddingTop: "40px", textAlign: "center" }}>
                <h1 style={{ textAlign: "center" }}>
                  Youtube Thumbnail Generator
                </h1>
                Crop JPG, PNG by defining a rectangle in pixels. Cut your image
                online. Files are processed entirely on your device and does not
                get uploaded to any server.
              </div>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-8 ">
                  <section className="services-section-ten">
                    <div className="auto-container">
                      {/* Sec Title */}
                      <div className="sec-title-three centered">
                        {/* <a href="https://i.imgur.com/IskAzqA.jpg" download>Click</a> */}
                        <h3 style={{ color: "#06F28C" }}>
                          Please Enter Link To Get Thumbnail
                        </h3>
                      </div>
                      <div
                        className="container"
                        style={{ textAlign: "center" }}
                      >
                        {/* <h1>Please Enter Link To Get Thumbnail</h1> */}
                        <input
                          className="thumbnailInput"
                          type="text"
                          value={videoUrl}
                          onChange={(e) => setVideoUrl(e.target.value)}
                        />
                        <br />
                        <div
                          className="link-box"
                          style={{ marginBottom: "4vh" }}
                        >
                          {/* <button className='theme-btn btn-style-twelve' onClick={generateThumbnail} style={{background: 'none'}}>Generate Thumbnail</button>  */}
                        </div>

                        {maxresdefault ? (
                          <>
                            <h1>Full HD</h1>

                            <a
                              className="download-button"
                              href={maxresdefault}
                              download
                            >
                              Download
                            </a>
                            {/* <button className='download-button' onClick={downloadImage}>Download</button> */}
                            <img
                              src={maxresdefault}
                              alt="YouTube Thumbnail Image"
                              title="YouTube Thumbnail Downloader High Quality Image"
                            />
                          </>
                        ) : (
                          <img
                            src="assets/img/thumbnail-dummy.jpg"
                            alt="YouTube Thumbnail Image"
                            title="YouTube Thumbnail Downloader High Quality Image"
                          />
                        )}

                        {hqdefault && mqdefault && (
                          <>
                            <div
                              className="row"
                              style={{ textAlign: "center", marginTop: "4vh" }}
                            >
                              <div className="col-md-6">
                                <h1>Medium</h1>
                                <a
                                  className="download-button"
                                  href={hqdefault}
                                  download
                                >
                                  Download
                                </a>
                                {hqdefault && (
                                  <img
                                    src={hqdefault}
                                    alt="YouTube Thumbnail Image"
                                    title="YouTube Thumbnail Downloader Medium Quality Image"
                                  />
                                )}
                              </div>
                              <div className="col-md-6">
                                <h1>Small</h1>
                                <a
                                  className="download-button"
                                  href={mqdefault}
                                  download
                                >
                                  Download
                                </a>
                                {mqdefault && (
                                  <img
                                    src={mqdefault}
                                    alt="YouTube Thumbnail Image"
                                    title="YouTube Thumbnail Downloader Low Quality Image"
                                  />
                                )}
                              </div>
                            </div>
                          </>
                        )}

                        {!hqdefault && !mqdefault && (
                          <div
                            className="row"
                            style={{ textAlign: "center", marginTop: "4vh" }}
                          >
                            <div className="col-md-6">
                              <img
                                width="480px"
                                height="360px"
                                src="assets/img/thumbnail-dummy.jpg"
                                alt="YouTube Thumbnail Image"
                                title="YouTube Thumbnail Downloader Medium Quality Image"
                              />
                            </div>
                            <div className="col-md-6">
                              <img
                                width="320px"
                                height="180px"
                                src="assets/img/thumbnail-dummy.jpg"
                                alt="YouTube Thumbnail Image"
                                title="YouTube Thumbnail Downloader Low Quality Image"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-md-8 ">
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
                            Crop Photos Online
                          </h3>
                          <p style={{ textAlign: "left" }}>
                            From your phone, tablet, desktop computer, or
                            someone else’s pc. From work, vacation, home or
                            during commute. With SUPERTOOL, you can crop your
                            images and photos for Instagram, Facebook, uploading
                            it somewhere else or sending it to your friends and
                            family from basically anywhere. All you need is a
                            working internet connection. With SUPERTOOL you can
                            crop photo and image files on the go!
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

export default CropImageScreen;
