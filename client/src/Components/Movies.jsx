import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import Form from "react-bootstrap/Form";

function Movies() {
  const [state, setState] = useState([]);

  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState("all");

  const navigate = useNavigate();
  async function getAll() {
    const result = await axios.get("http://localhost:4000");
    setState(result.data);
  }

  useEffect(() => {
    getAll();
  }, []);

  const filters = state.filter((items) => {
    const matchesSearch = items.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesGenre = filtered === "all" || items.genre === filtered;
    return matchesSearch && matchesGenre;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div>
        <Form
          onSubmit={handleSubmit}
          style={{ borderRight: "none" }}
          className="d-flex flex-row "
        >
          <input
            id="form1"
            type="search"
            className=""
            style={{ width: "500px", borderRadius: "2px" }}
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </Form>
      </div>
      <div>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered("all");
          }}
        >
          All
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered("Drama");
          }}
        >
          Drama
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered(`Romance`);
          }}
        >
          Romance
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered(`Comedy`);
          }}
        >
          Comedy
        </Button>
        <Button
          variant="outline-dark"
          className="mx-2"
          onClick={() => {
            setFiltered("Thriller");
          }}
        >
          Thriller
        </Button>
      </div>
      <div className="d-flex flex-row  mx-2 my-2">
        {filters.map((movie) => {
          console.log(movie);
          return (
            <div>
              <Card
                key={movie.id}
                title={movie.title}
                poster={movie.poster}
                genre={movie.genre}
                story={movie.story}
              />
              <section className="d-flex flex-row justify-content-center">
                <Button
                  onClick={() => {
                    navigate(`/update/${movie.id}`);
                  }}
                >
                  Edit
                </Button>
                <Button
                  variant="danger"
                  //   onClick={() => {
                  //     Deleted(item.id);
                  //   }}
                >
                  Delete
                </Button>
              </section>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Movies;
