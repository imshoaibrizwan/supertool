import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import jsPDF from "jspdf";
import JoditEditor from "jodit-react";
import ReCAPTCHA from "react-google-recaptcha";

const HtmlToPdfScreen = () => {
  const editor = useRef(null);
  const [show, setShow] = useState(false);
  const [document, setDocument] = useState();
  const [userHtml, setUserHtml] = useState();
  const [validate, setValidate] = useState(false);

  const handleGeneratePdf = (e) => {
    e.preventDefault();

    const doc = new jsPDF({
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");
    doc.html(userHtml.replaceAll(" ", "&nbsp;"), {
      async callback(doc) {
        if (doc) {
          setShow(true);
          setDocument(doc);
        }
      },
    });
  };

  const downloadHandler = () => {
    document.save("document");
  };

  function onChange() {
    setValidate(true);
  }

  return (
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
              {show === false && (
                <button
                  className="button"
                  style={{
                    backgroundColor: "#764AF1",
                    borderColor: "#764AF1",
                    color: "#ffffff",
                    fontWeight: "bold",
                    borderRadius: "15px",
                    padding: "5px 10px",
                  }}
                >
                  Generate PDF
                </button>
              )}

              {show === true && (
                <div>
                  <Alert variant={"success"}>Pdf Generated Successfully</Alert>
                  <ReCAPTCHA
                    sitekey="6Le8fecjAAAAAG7pra5ZwIW8btHzTdbH4sFzYy19"
                    onChange={onChange}
                  />

                  <button
                    className="button"
                    style={{
                      backgroundColor: "#764AF1",
                      borderColor: "#764AF1",
                      color: "#ffffff",
                      fontWeight: "bold",
                      borderRadius: "15px",
                      padding: "5px 10px",
                    }}
                    onClick={downloadHandler}
                    disabled={!validate}
                  >
                    Download
                  </button>
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
                <img src="assets/img/3dots.png" /> and select the{" "}
                <img src="assets/img/code.png" /> icon.Then write HTML code.
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
  );
};

export default HtmlToPdfScreen;
