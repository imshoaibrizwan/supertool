import React from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

const SearchResultsScreen = ({
  filteredTools,
  searchField,
  searchedRouteHandler,
}) => {
  const handler = () => {
    searchedRouteHandler(true);
  };
  return (
    <div style={{ height: "60vh", marginBottom: "10vh" }}>
      <section className="category-section-area">
        <div className="container custom-container-01">
          <div className="row">
            <div className="col-md-9">
              <div className="section-title-wrapper d-flex justify-content-between">
                <div className="theme-section-title">
                  <h4 className="title">Search Results for "{searchField}"</h4>
                </div>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="discipline">
                  <div className="tools-wrap">
                    {filteredTools.length === 0 ? (
                      <Alert
                        variant="danger"
                        style={{
                          textAlign: "center",
                          width: "90%",
                          fontWeight: "bold",
                        }}
                      >
                        No Results Found
                      </Alert>
                    ) : (
                      <>
                        {filteredTools.map((tool) => (
                          <div
                            className="destination-single-item style-01 tools"
                            key={tool.id}
                          >
                            <Link to={tool.path} onClick={handler}>
                              <div className="thumbnail child bounce">
                                <img
                                  src={tool.imgPath}
                                  alt=""
                                  width="60"
                                  height="60"
                                />
                              </div>
                              <h6 className="name">{tool.name}</h6>
                            </Link>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchResultsScreen;
