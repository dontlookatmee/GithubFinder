import React, { useState, useContext } from 'react';
import GithubContext from '../../components/context/github/githubContext';
import AlertContext from '../../components/context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const { setAlert } = alertContext;

  const [text, setText] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const handleInputChange = (e) => setText(e.target.value);

  return (
    <div>
      <form onSubmit={handleFormSubmit} className="form">
        <input
          type="text"
          value={text}
          name="text"
          placeholder="Search Users..."
          onChange={handleInputChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
