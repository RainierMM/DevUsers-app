import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
import { useForm } from "../hooks/useForm";
import "./styles.css";

const { Group, Label, Control } = Form;

const urlSkills = "https://test-67158.firebaseio.com/skills.json";
const urlRegister = "https://test-67158.firebaseio.com/data/:id/.json";

export const DevRegisterScreen = ({ history }) => {
  const [skills, setSkills] = useState([]);

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

  const [formRegisterValues, handleRegisterInputChange] = useForm({
    name: "Test1",
    lastname: "Test1LN",
    skill: "",
  });

  const { name, lastname, skill } = formRegisterValues;

  useEffect(() => {
    getSkills();
  }, []);

  const handleRegister = () => {
    console.log(skill);
    // history.replace("/");
  };

  return (
    <div className="container">
      <Form>
        <h1>Registrarse</h1>
        <hr />
        <Group>
          <Label>Ingrese Nombre</Label>
          <Control type="text" placeholder="Nombre" />
        </Group>
        <Group>
          <Label>Ingrese primer Apellido</Label>
          <Control type="text" placeholder="Apellido" />
        </Group>
        <Group>
          <Label>Seleccione Skill</Label>
          <Control as="select">
            {skills &&
              skills.length > 0 &&
              skills.map(({ name }) => (
                <Fragment key={name}>
                  <option value={skill}>{name}</option>
                </Fragment>
              ))}
          </Control>
        </Group>
        <Button
          className="btn btn-primary"
          type="submit"
          onClick={handleRegister()}
        >
          Registrar
        </Button>
      </Form>
    </div>
  );
};
