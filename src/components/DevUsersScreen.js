import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./styles.css";
import { Card, Spinner } from "react-bootstrap";

const { Body, Title, Subtitle } = Card;

const url = "https://test-67158.firebaseio.com/data.json";

export const DevUsersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsersData = async () => {
    try {
      const { data } = await axios.get(`${url}`);
      setData(data);
      setLoading(false);
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
    setLoading(true);
    getUsersData();
  }, []);

  return (
    <div className="container">
      {loading ? (
        <Spinner animation="border" />
      ) : (
        <>
          {data &&
            data.length > 0 &&
            data.map(({ lastname, name, skill }, index) => (
              <Fragment key={index}>
                <Card className="ml-2 mb-2" style={{ width: "18rem" }}>
                  <Body>
                    <Title>
                      {name}
                      <br /> {lastname}
                    </Title>
                    <hr />
                    <Subtitle className="mb-2 text-muted">{skill}</Subtitle>
                  </Body>
                </Card>
              </Fragment>
            ))}
        </>
      )}
    </div>
  );
};
