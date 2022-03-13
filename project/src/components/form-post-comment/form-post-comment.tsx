import {useState} from 'react';

function FormPostComment(): JSX.Element {
  const [formText, setFormText] = useState('');

  return  (
    <div className="add-review__text">
      <textarea
        onChange={(event) => setFormText(event.target.value)}
        className="add-review__textarea"
        name="review-text"
        id="review-text"
        placeholder="Review text"
      >
        {formText}
      </textarea>
      <div className="add-review__submit">
        <button className="add-review__btn" type="submit">Post</button>
      </div>

    </div>
  );
}

export default FormPostComment;
