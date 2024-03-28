export default function IsOpenButton({ onClick }) {
  return (
    <button className="close" onClick={onClick}>
      &times;
    </button>
  );
}
