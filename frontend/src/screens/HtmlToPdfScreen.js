import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import jsPDF from "jspdf";
import JoditEditor from "jodit-react";

const HtmlToPdfScreen = () => {
  const editor = useRef(null);
  const [show, setShow] = useState(false);
  const [document, setDocument] = useState();

  const [userHtml, setUserHtml] = useState();

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
                  >
                    Download
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </div>
  );
};

export default HtmlToPdfScreen;
