import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import jsPDF from "jspdf";
import JoditEditor from "jodit-react";
import ReCAPTCHA from "react-google-recaptcha";
import { HiOutlineDownload } from "react-icons/hi";
import Loader from "../components/Loader";

const HtmlToPdfScreen = () => {
  const editor = useRef(null);
  const [show, setShow] = useState(false);
  const [document, setDocument] = useState();
  const [userHtml, setUserHtml] = useState();
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleGeneratePdf = (e) => {
    e.preventDefault();
    setLoading(true);
    var doc = new jsPDF({
      format: "a4",
    });
    doc.html(userHtml, {
      callback: function (doc) {
        // Save the PDF
        if (doc) {
          setShow(true);
          setDocument(doc);
          setLoading(false);
        }
      },
      margin: [20, 20, 20, 20],
      autoPaging: "text",
      x: 0,
      y: 0,
      width: 190, //target width in the PDF document
      windowWidth: 675, //window width in CSS pixels
    });
  };

  const downloadHandler = () => {
    document.save("document");
    setUserHtml("");
    setShow(false);
  };

  function onChange() {
    setValidate(true);
  }

  return (
    <>
      {loading && <Loader status={loading} />}
      <div
        className="container"
        style={{ height: "auto", marginTop: "5vh", marginBottom: "5vh" }}
      >
        <h1 style={{ textAlign: "center" }}>PDF Generator</h1>

        <p style={{ textAlign: "center" }}>
          Convert web pages or HTML code, Text, Image, Word to PDF documents
        </p>
        <div className="row">
          <div className="col-md-8">
            <div
              style={{
                height: "auto",
              }}
            >
              <form onSubmit={handleGeneratePdf} style={{ marginTop: "5vh" }}>
                <JoditEditor
                  ref={editor}
                  value={userHtml}
                  onChange={(newContent) => setUserHtml(newContent)}
                />

                <br />

                <>
                  <ReCAPTCHA
                    sitekey="6Le8fecjAAAAAG7pra5ZwIW8btHzTdbH4sFzYy19"
                    onChange={onChange}
                    style={{ marginBottom: "3vh" }}
                  />
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <button
                      className="button"
                      style={{
                        backgroundColor: "#764AF1",
                        borderColor: "#764AF1",
                        color: "#ffffff",
                        fontWeight: "bold",
                        padding: "5px 10px",
                        marginBottom: "3vh",
                        fontSize: "20px",
                      }}
                      disabled={!validate}
                    >
                      Generate PDF
                    </button>
                  </div>
                </>

                {show === true && (
                  <div style={{ textAlign: "center" }}>
                    <Alert variant={"success"}>
                      Pdf Generated Successfully
                    </Alert>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
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
                    </div>
                  </div>
                )}
              </form>

              <div style={{ paddingTop: "10vh", paddingBottom: "10vh" }}>
                <h3 style={{ textAlign: "center", fontWeight: "800" }}>
                  How to convert an HTML file to PDF online
                </h3>
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Step 01:
                </span>
                <p style={{ fontSize: "15px" }}>
                  For Html, click on the three dots icon
                  <img src="assets/img/3dots.png" alt="3dots" /> and select the{" "}
                  <img src="assets/img/code.png" alt="code" /> icon.Then write
                  HTML code.
                </p>
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Step 02:
                </span>
                <p style={{ fontSize: "15px" }}>
                  Our tool will automatically start to convert the code to PDF
                  after clicking the "Generate PDF" button.
                </p>
                <span style={{ fontWeight: "bold", fontSize: "17px" }}>
                  Step 03:
                </span>
                <p style={{ fontSize: "15px" }}>
                  Download the PDF file to your computer.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default HtmlToPdfScreen;
