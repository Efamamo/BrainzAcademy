function ResourceCard(props) {
  return (
    <div className="card">
      <img src={props.image} alt="Elementary" />
      <div className="card-content">
        <h2>{props.name}</h2>
        <button className="button">{props.but}</button>
      </div>
    </div>
  );
}


export default ResourceCard;
