import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddMovie() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();
  async function Add(e) {
    e.preventDefault();
    await axios.post("http://localhost:4000/addMovie", {
      title: title,
      story: story,

      poster: poster,
      genre: genre,
    });
    setTitle("");
    setStory("");

    setPoster("");
    setGenre("");

    navigate("/");
  }
  return (
    <div className="d-flex flex-column justify-content-center mx-auto w-50 p-3 border rounded">
      <Form className=" " onSubmit={Add}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Movie Title</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Story</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Story"
            value={story}
            onChange={(e) => {
              setStory(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Genre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e) => {
              setGenre(e.target.value);
            }}
          />
        </Form.Group>

        <Form.Group controlId="validationCustom01">
          <Form.Label>Poster URL</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="URL"
            value={poster}
            onChange={(e) => {
              setPoster(e.target.value);
            }}
          />
        </Form.Group>

        <Button className="mx-auto my-2" type="submit">
          Add Your Movie
        </Button>
      </Form>
    </div>
  );
}

export default AddMovie;
