import React from "react";

const Contact = () => {
  return (
    <div>
      <div>
        <h1 className="text-center my-5">Contact Us</h1>
      </div>
      <div className="add_user">
        <form className="text-center">
          <div className="-3">
            <input
              type="email"
              className="form-control"
              required
              id=""
              placeholder="Enter Your Email "
            />
            <br />
            <textarea
              rows="4"
              cols="62"
              type="text"
              className="textarea"
              placeholder="Enter your message..."
              required
              name=""
              id=""
            />
            <br />
            <br />
          </div>
          <button type="submit" className="btn btn-primary button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
