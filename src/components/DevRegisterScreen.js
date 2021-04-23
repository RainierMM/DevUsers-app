import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import "./styles.css";

const { Group, Label, Control } = Form;

const urlSkills = "https://test-67158.firebaseio.com/skills.json";
const url = "https://test-67158.firebaseio.com/data.json";

export const DevRegisterScreen = ({ history }) => {
  const [data, setData] = useState([]);
  const [skills, setSkills] = useState([]);
  const [state, setState] = useState({
    id: 0,
    name: "",
    lastname: "",
    skill: "Android",
  });

  const { name, lastname, skill } = state;

  const getUsersData = async () => {
    try {
      const { data } = await axios.get(`${url}`);

      setData(data);
      setState({ ...state, id: data.length });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const getSkills = async () => {
    try {
      const { data } = await axios.get(`${urlSkills}`);

      setSkills(data);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error(error);
    }
  };

  useEffect(() => {
    getSkills();
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    let letters = /^[A-Za-z]+$/;
    if (!name.match(letters)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El nombre solo debe tener letras",
      });
    } else if (!lastname.match(letters)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "El apellido solo debe tener letras",
      });
    } else {
      try {
        const registro = await axios.put(
          `https://test-67158.firebaseio.com/data/${state.id}/.json`,
          state
        );
        Swal.fire({
          icon: "success",
          title: "Congrats...",
          text: "Desarrollador registrado",
        });
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Error al registrar usuario",
        });
        console.error(error);
      }
      history.replace("/");
      console.log(state);
    }
  };

  return (
    <div className="container">
      <Form>
        <h1>Registrarse</h1>
        <hr />
        <Group>
          <Label>Ingrese Nombre</Label>
          <Control
            type="text"
            placeholder="Nombre"
            value={name || ""}
            onChange={(e) => setState({ ...state, name: e.target.value })}
          />
        </Group>
        <Group>
          <Label>Ingrese Apellido</Label>
          <Control
            type="text"
            placeholder="Apellido"
            value={lastname || ""}
            onChange={(e) => setState({ ...state, lastname: e.target.value })}
          />
        </Group>
        <Group>
          <Label>Seleccione Skill</Label>
          <Control
            value={skill}
            onChange={(e) => setState({ ...state, skill: e.target.value })}
            as="select"
          >
            {skills &&
              skills.length > 0 &&
              skills.map(({ name }) => (
                <Fragment key={name}>
                  <option>{name}</option>
                </Fragment>
              ))}
          </Control>
        </Group>
        <Button
          className="btn btn-primary"
          type="submit"
          onClick={handleRegister}
        >
          Registrar
        </Button>
      </Form>
    </div>
  );
};
