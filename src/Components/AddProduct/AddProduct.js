import React, { useState } from "react";
import "./AddProduct.css";
import { Col, Container, Row } from "react-bootstrap";
import { MDBInput, MDBBtn } from "mdbreact";
import { BtnStyle } from "../LoginSignup/BtnStyle.js";
import firebase from "firebase/app";
import "firebase/firestore";
import { storage } from "../Redux/Actions/Action";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === "Name") {
      setName(value);
    } else if (name === "Description") {
      setDescription(value);
    } else if (name === "Price") {
      setPrice(value);
    } else if (event.currentTarget.files[0]) {
      console.log(event.currentTarget.files[0].name)
      setImage(event.currentTarget.files[0]);
    }
  };

  const handleAddProductSubmit = (event) => {
    event.preventDefault();

    const db = firebase.firestore();
    const storage1 = firebase.storage();

    const img = storage1.ref(`shirts/${name}.png`).put(image);
    img.on(
      "state_changed",
      snapshot => {},
      error => {
        console.error(error)
      },
      () => {
        storage.child(`shirts/${name}.png`)
        .getDownloadURL()
        .then(url => {
          db.collection("test").doc(name).set({
            Name: name,
            Description: description,
            Price: price,
            ImageURL: url,
            Timestamp: new Date().getTime()
          })
          .catch((error) => {
            console.error(error);
          });
        });
      }
    )

    setName("");
    setDescription("");
    setPrice(0);
    setImage(null)
  };

  return (
    <div>
      <Container>
        <Row className="h">
          <Col lg="5">
            <form>
              <p className="heading text-center py-1">Product Details</p>
              <div className="grey-text">
                <MDBInput
                  label="Name of Product"
                  type="text"
                  name="Name"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleChange}
                  value={name}
                />
                <MDBInput
                  label="Product Description"
                  type="text"
                  name="Description"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleChange}
                  value={description}
                />
                <MDBInput
                  label="Product Price"
                  type="number"
                  name="Price"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleChange}
                  value={price}
                />
                {/* <MDBInput
                  label="Product Image URL"
                  type="text"
                  name="Image"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleChange}
                  value={imageUrl}
                /> */}

                {/* <MDBInput
                  type="file"
                  name="Image"
                  validate
                  error="wrong"
                  success="right"
                  required
                  onChange={handleChange}
                  value={imageUrl}
                /> */}
                <input type="file" name="Image" onChange={handleChange} />
              </div>
              <div className="text-center py-4 mt-3">
                <BtnStyle>
                  <MDBBtn
                    type="submit"
                    onClick={(event) => {
                      handleAddProductSubmit(event);
                    }}
                  >
                    Add Product
                  </MDBBtn>
                </BtnStyle>
              </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddProduct;
