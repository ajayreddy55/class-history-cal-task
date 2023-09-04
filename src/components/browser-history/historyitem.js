import './index.css';

const HistoryItem = props => {
  const {eachObject, deleteObject} = props;
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachObject;

  const deleteItem = () => {
    deleteObject(id);
  }

  return (
    <li className="list-item">
      <p className="time">{timeAccessed}</p>
      <div className="url-title-container">
        <div className="url-container">
          <img src={logoUrl} alt="domain logo" className="domain-logo" />
          <div className="title-container">
            <p className="title">{title}</p>
            <p className="domain-url">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="button"
          data-testid="delete"
          onClick={deleteItem}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-button"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem;