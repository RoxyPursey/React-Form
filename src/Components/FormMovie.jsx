import React from 'react';

class FormMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      poster: '',
      comment: '',
    };
    // this.onChange = this.onChange.bind(this);
    // this.submitForm = this.submitForm.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  submitForm = (event) => {
    event.preventDefault();
  };

  handleSubmit = (event) => {
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    };
    fetch(url, config)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          alert(res.error);
        } else {
          alert(`This movie has been added`);
        }
      })
      .catch((event) => {
        console.error(event);
        alert('This movie couldnt be added');
      });
  };

  render() {
    return (
      <div className="FormMovie">
        <h1>Add Your Favourite Movie</h1>

        <form onSubmit={this.submitForm}>
          <fieldset>
            <legend>Information</legend>
            <div className="form-data">
              <label htmlFor="title">Movie Name </label>
              <input
                type="text"
                id="title"
                name="title"
                onChange={this.onChange}
                value={this.state.title}
              />
            </div>
            <br />
            <div className="form-data">
              <label htmlFor="poster">Poster Link </label>
              <input
                type="text"
                id="poster"
                name="poster"
                onChange={this.onChange}
                value={this.state.poster}
              />
            </div>
            <br />
            <div className="form-data">
              <label htmlFor="comment">Comments </label>
              <textarea
                type="text"
                id="comment"
                name="comment"
                onChange={this.onChange}
                value={this.state.comment}
              />
            </div>
            <hr />
            <div className="form-data">
              <input onClick={this.handleSubmit} type="submit" value="Send" />
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
export default FormMovie;
