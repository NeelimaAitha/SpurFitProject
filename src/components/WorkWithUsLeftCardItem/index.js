import "./index.css";

const WorkWithUsLeftCardItem = (props) => {
  const { cardDetails } = props;
  const { title, description } = cardDetails;
  return (
    <li className="work-with-us-left-card-item">
      <h1 className="work-with-us-left-card-item-title">{title}</h1>
      <p className="work-with-us-left-card-item-description">{description}</p>
    </li>
  );
};

export default WorkWithUsLeftCardItem;
