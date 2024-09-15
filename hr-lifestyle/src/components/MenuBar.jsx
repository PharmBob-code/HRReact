export default function MenuBar({ toggleModal }) {
  return (
    <div className="menu-bar" onClick={toggleModal}>
      <i className="bi bi-list"></i>
    </div>
  );
}
