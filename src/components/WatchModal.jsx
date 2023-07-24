const WatchModal = () => {
  return (
    <div
      className="modal watch-now-modal media-modal fade"
      id="watchNowModal"
      data-bs-keyboard="false"
      tabIndex="-1"
      aria-labelledby="watchNowModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-xl">
        <div className="modal-content bg-transparent border-0">
          <div className="modal-body p-0">
            <div className="text-end">
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="ratio ratio-16x9">
              <iframe
                className="rounded-3"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qaQZZmBTTIw"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchModal;
