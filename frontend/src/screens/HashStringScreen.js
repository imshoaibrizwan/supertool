import React, { useState } from "react";
import { Row, Col, Container, Alert } from "react-bootstrap";
import Loader from "../components/Loader";
import { TbWorld } from "react-icons/tb";
import crypto from "crypto-js";
import { IoIosCopy } from "react-icons/io";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaHashtag } from "react-icons/fa";

const HashStringScreen = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const [userText, setUserText] = useState("");
  const [md5_hashed_text, setMd5HashedText] = useState("");
  const [sha512_hashed_text, setSha512HashedText] = useState("");
  const [sha256_hashed_text, setSha256HashedText] = useState("");
  const [sha3_hashed_text, setSha3HashedText] = useState("");
  const [sha1_hashed_text, setSha1HashedText] = useState("");
  const [show, setShow] = useState(false);

  const hashStringHandler = () => {
    setLoading(true);
    // // MD5
    const md5 = crypto.MD5(userText).toString();
    setMd5HashedText(md5);

    // // sha512
    const sha512 = crypto.SHA512(userText).toString();
    setSha512HashedText(sha512);

    // // sha256
    const sha256 = crypto.SHA256(userText).toString();
    setSha256HashedText(sha256);

    // //sha3
    const sha3 = crypto.SHA3(userText).toString();
    setSha3HashedText(sha3);

    // // sha1
    const sha1 = crypto.SHA1(userText).toString();
    setSha1HashedText(sha1);

    if (md5 && sha512 && sha256 && sha1 && sha3) {
      setSuccess(true);
      setLoading(false);
    } else {
      setFailed(true);
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader status={loading} />}
      <div className="crop-div">
        <div className="container" style={{ marginBottom: "5vh" }}>
          <div style={{ paddingTop: "40px", textAlign: "center" }}>
            <h1 style={{ textAlign: "center" }}>MD5 Generator</h1>
            This is an easy to use tool that enables you to generate the MD5
            hash of a string. In order to use the tool, enter the text you want
            to convert to MD5 below and click on ‘Generate’ button.
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 ">
              <div className="container-buttons md5_section">
                <textarea
                  type="text"
                  className="md5_text"
                  placeholder="Paste Your Text Here"
                  onChange={(e) => setUserText(e.target.value)}
                ></textarea>
              </div>

              <div className="compress_section">
                <Row>
                  <Col lg="12" md="12">
                    {userText && (
                      <>
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
                          onClick={hashStringHandler}
                        >
                          Generate MD5
                        </button>
                      </>
                    )}
                  </Col>

                  <Col lg="12" md="12" style={{ marginTop: "2vh" }}>
                    {success && (
                      <div>
                        <Alert variant={"success"}>
                          Hashed String Generated Successfully
                        </Alert>
                      </div>
                    )}
                    {failed && (
                      <div>
                        <Alert variant={"danger"}>
                          Hashed String Process Failed
                        </Alert>
                      </div>
                    )}
                  </Col>

                  {success && (
                    <Col lg="12" md="12">
                      <div
                        className="image_text md5_table"
                        style={{ padding: "1rem" }}
                      >
                        <Row style={{ paddingBottom: "20px" }}>
                          <Col md="2" sm="12" style={{ fontWeight: "bold" }}>
                            MD5
                          </Col>
                          <Col md="8" sm="12">
                            <p>{md5_hashed_text}</p>
                          </Col>
                          <Col md="2" sm="12">
                            <CopyToClipboard
                              text={md5_hashed_text}
                              onCopy={() => setShow(!show)}
                            >
                              <IoIosCopy
                                className="md5_btn"
                                size="25px"
                                color="#06F28C"
                              />
                            </CopyToClipboard>
                          </Col>
                          <hr />
                        </Row>
                        <Row style={{ paddingBottom: "20px" }}>
                          <Col md="2" sm="12" style={{ fontWeight: "bold" }}>
                            SHA1
                          </Col>
                          <Col md="8" sm="12">
                            <p>{sha1_hashed_text}</p>
                          </Col>
                          <Col md="2" sm="12">
                            <CopyToClipboard
                              text={sha1_hashed_text}
                              onCopy={() => setShow(!show)}
                            >
                              <IoIosCopy
                                className="md5_btn"
                                size="25px"
                                color="#06F28C"
                              />
                            </CopyToClipboard>
                          </Col>
                          <hr />
                        </Row>
                        <Row style={{ paddingBottom: "20px" }}>
                          <Col md="2" sm="12" style={{ fontWeight: "bold" }}>
                            SHA3
                          </Col>
                          <Col md="8" sm="12">
                            <p>{sha3_hashed_text}</p>
                          </Col>
                          <Col md="2" sm="12">
                            <CopyToClipboard
                              text={sha3_hashed_text}
                              onCopy={() => setShow(!show)}
                            >
                              <IoIosCopy
                                className="md5_btn"
                                size="25px"
                                color="#06F28C"
                              />
                            </CopyToClipboard>
                          </Col>
                          <hr />
                        </Row>
                        <Row style={{ paddingBottom: "20px" }}>
                          <Col md="2" sm="12" style={{ fontWeight: "bold" }}>
                            SHA256
                          </Col>
                          <Col md="8" sm="12">
                            <p>{sha256_hashed_text}</p>
                          </Col>
                          <Col md="2" sm="12">
                            <CopyToClipboard
                              text={sha256_hashed_text}
                              onCopy={() => setShow(!show)}
                            >
                              <IoIosCopy
                                className="md5_btn"
                                size="25px"
                                color="#06F28C"
                              />
                            </CopyToClipboard>
                          </Col>
                          <hr />
                        </Row>
                        <Row>
                          <Col md="2" sm="12" style={{ fontWeight: "bold" }}>
                            SHA512
                          </Col>
                          <Col md="8" sm="12">
                            <p>{sha512_hashed_text}</p>
                          </Col>
                          <Col md="2" sm="2">
                            <CopyToClipboard
                              text={sha512_hashed_text}
                              onCopy={() => setShow(!show)}
                            >
                              <IoIosCopy
                                className="md5_btn"
                                size="25px"
                                color="#06F28C"
                              />
                            </CopyToClipboard>
                          </Col>
                          <hr />
                        </Row>
                      </div>
                    </Col>
                  )}
                </Row>

                {show && (
                  <Col lg="12" md="12" style={{ marginTop: "2vh" }}>
                    {success && (
                      <div>
                        <Alert variant={"success"}>Hashed String Copied!</Alert>
                      </div>
                    )}
                  </Col>
                )}
              </div>

              <div className="imgtopdf_services">
                <Container style={{ padding: "10vh 0vh 4vh 0vh" }}>
                  <Row>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <FaHashtag size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        How To Covert String To Hashed String Online?
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        Our Hash Generator works by adding the string on the
                        space provided, and our converter will compute your data
                        using a uniquely designed cryptographic hashing
                        algorithm for the hash, which uses a 32-hexadecimal
                        character arrangement. Once our hash generator finished
                        processing your request then you can copy hashed string
                        to the clipboard.
                      </p>
                    </Col>
                    <Col
                      lg="12"
                      md="12"
                      style={{ textAlign: "center", marginTop: "1vh" }}
                    >
                      <TbWorld size="40px" color="#06F28C" />
                      <h3 style={{ padding: "1vh 0vh" }}>
                        Hashed String Converter Online
                      </h3>
                      <p style={{ textAlign: "left" }}>
                        From your phone, tablet, desktop computer, or someone
                        else’s pc. From work, vacation, home or during commute.
                        With SUPERTOOL, you can convert any string to hashed
                        string. All you need is a working internet connection.
                        With SUPERTOOL you can convert any string to hashed
                        string on the go!
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

export default HashStringScreen;
