function Card({ name, roll }) {
  return (
    <div className="card">
      <div className="nameContainer">
        <p className="label">Name : </p>
        <p className="input">{name}</p>
      </div>
      <div className="rollContainer">
        <p className="label">Roll : </p>
        <p className="input">{roll}</p>
      </div>
    </div>
  );
}

export default Card;
