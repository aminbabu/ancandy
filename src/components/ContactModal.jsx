const ContactModal = () => {
  return (
    <div
      className="modal contact-us-modal fade"
      id="contactUsModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="contactUsModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4" id="contactUsModalLabel">
              Contact us
            </h1>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="name" className="form-label">
                  Your name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="col-sm-6">
                <label htmlFor="email" className="form-label">
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="col-12">
                <label htmlFor="subject" className="form-label">
                  Select subject
                </label>
                <select name="subject" id="subject" className="form-select">
                  <option value="0">Select subject</option>
                  <option value="1">Web Design</option>
                  <option value="2">Web Development</option>
                  <option value="3">UI / UX Design</option>
                </select>
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Your message
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  placeholder="Your message"
                  className="form-control"
                ></textarea>
              </div>
              <div className="col-12 text-end">
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
