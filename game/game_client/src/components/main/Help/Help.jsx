import React from "react";

function Help() {
  return (
    <>
      <form>
        <div className="container px-5" style={{ background: "#fff" }}>
          <div className="column">
            <h1 className="title d-flex justify-content-center">Need Help?</h1>
            <div className="form-group d-flex justify-content-center">
              <div className=" form-group row d-flex justify-content-center">
                <label htmlFor="emailForm">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="emailForm"
                  placeholder="estudiantes@ucr.ac.cr"
                />
              </div>
            </div>
            <div className="form-group d-flex justify-content-center">
              <div className="row  d-flex justify-content-center">
                <label htmlFor="multipleOption">Select the best option</label>
                <select className="form-control" id="multipleOption">
                  <option>Bug</option>
                  <option>Improvement</option>
                  <option>Inquiry</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div className="form-group d-flex justify-content-center">
              <div className="row d-flex justify-content-center">
                <label htmlFor="formTextArea">Write your inquiry here:</label>
                <textarea
                  className="form-control"
                  id="formTextArea"
                  rows={5}
                  defaultValue={"Your site is the best!"}
                />
                <button
                  type="submit"
                  className="btn btn-primary d-flex rig"
                  style={{ marginTop: "20px" }}
                >
                  Send Inquiry
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}

export default Help;
