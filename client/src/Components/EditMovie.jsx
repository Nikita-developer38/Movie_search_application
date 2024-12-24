import React from "react";

import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditMovie() {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const [poster, setPoster] = useState("");
  const [genre, setGenre] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  async function Update(e) {
    e.preventDefault();
    await axios.put(`http://localhost:4000/update/${id}`, {
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

  async function SpecificData() {
    const result = await axios.get(`http://localhost:4000/${id}`);

    setTitle(result.data.message[0].title || "");

    setStory(result.data.message[0].story || "");

    setPoster(result.data.message[0].poster || "");
    setGenre(result.data.message[0].genre || "");
  }
  useEffect(() => {
    SpecificData();
  }, []);
  return (
    <div className="d-flex flex-column justify-content-center mx-auto w-50 p-3 border rounded">
      <Form className=" " onSubmit={Update}>
        <Form.Group controlId="validationCustom01">
          <Form.Label>Edit Movie Title</Form.Label>
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
          <Form.Label>Edit Story</Form.Label>
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
          <Form.Label>Edit Genre</Form.Label>
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
          <Form.Label>Edit Poster URL</Form.Label>
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
          Add Edited Movie Details
        </Button>
      </Form>
    </div>
  );
}

export default EditMovie;
