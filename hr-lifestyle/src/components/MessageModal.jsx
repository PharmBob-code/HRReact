export default function MessageModal({ toggleMsgModal }) {
  // <!-- Modal -->
  <div id="messageModal" className="msgmodal">
    <div className="msgmodal-content">
      <p id="modal-message">why show up</p>
      <span className="close" onClick={toggleMsgModal}>
        &times;
      </span>
    </div>
  </div>;
}
