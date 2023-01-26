function CardForm({ card, handleSubmit, handleChange, handleCancel }) {

  
  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Front</label>
        <textarea
          id="front"
          name="front"
          className="form-control"
          onChange={handleChange}
          type="text"
          value={card.front}
        />
      </div>
      <div className="form-group">
        <label>Back</label>
        <textarea
          id="back"
          name="back"
          className="form-control"
          onChange={handleChange}
          type="text"
          value={card.back}
        />
      </div>
      <button className="btn btn-secondary mx-1" onClick={() => handleCancel()}>
        Cancel
      </button>
      <button className="btn btn-primary mx-1" type="submit">
        Save
      </button>
    </form>
  );
}

export default CardForm;
