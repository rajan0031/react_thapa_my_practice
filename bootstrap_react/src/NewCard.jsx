import React from "react";

const App = () => {
  return (
    <>
      <div className="container text-center justify-content-between">
        <div className="row">
          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/201/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  click me
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/200/301"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  click me
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src="https://picsum.photos/210/300"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  click me
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
