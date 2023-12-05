import React from "react";
import "./HomePage.css";
import {
  Input,
  Form,
  Button,
} from "../../Components/FormComponents/FormComponents";
import MainContent from "../../Components/MainContent/MainContent";
import Nav from "../../Components/Nav/Nav";
import Container from '../../Components/Container/Container'


const HomePage = () => {
  return (
    <>
      <MainContent>
        <section className="travel__section">
          {/* {window.innerWidth >= 768 ? <Nav /> : null} */}
          <Nav />
          <Form additionalClass={"form-viagem"}>
            <h1>Travel the worl with us</h1>
            <div className="form-viagem__inputs">
              <div className="form-viagem__box">
                <label htmlFor="form-viagem__from">From</label>
                <Input
                  type={`text`}
                  name={"form-viagem__input form-viagem__from"}
                  placeholder={"Departing"}
                  additionalClass="form-viagem__input form-viagem--from"
                  //manipulationFunction={""}
                  required={"required"}
                />
              </div>

              <div className="form-viagem__box">
                <label htmlFor="form-viagem__arriving">To</label>
                <Input
                  type={`text`}
                  name={"form-viagem__input form-viagem--arriving"}
                  placeholder={"Arriving at"}
                  additionalClass="form-viagem__input form-viagem__arriving"
                  //manipulationFunction={""}
                  required={"required"}
                />
              </div>
            </div>
            <Button

              textButton={"Search and find dates"}
            />
          </Form>
        </section>

        <section className="contact-section">
          <Container>

            <div className="contact-section__content">

              <div className="contact__info-box">
                <h2>Contact</h2>
                <p>Let us book your next trip!</p>

                <div className="info-box__content">
                  <div className="info-box__line">

                    <img src="" alt="" />
                    <p>Chicago, US</p>
                  </div>

                  <div className="info-box__line">

                    <img src="" alt="" />
                    <p>Phone: +00 151515</p>
                  </div>

                  <div className="info-box__line">

                    <img src={''} alt="" />
                    <p>Email: mail@mail.com</p>
                  </div>

                </div>
              </div>

              {/* <Form additionalClass={'contact-form'}>
                <Input

                />

                <Input

                />

                <Input

                />

                <Button
                  textButton={`SEND MESSAGE`}
                  additionalClass="button-component--black"
                />

              </Form> */}
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default HomePage;
