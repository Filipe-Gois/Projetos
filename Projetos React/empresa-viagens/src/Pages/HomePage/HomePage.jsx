import React from "react";
import "./HomePage.css";
import {
  Input,
  Form,
  Button,
} from "../../Components/FormComponents/FormComponents";
import MainContent from "../../Components/MainContent/MainContent";
import Nav from "../../Components/Nav/Nav";

const HomePage = () => {
  return (
    <>
      <MainContent>
        <section className="travel__section">
          {/* {window.innerWidth >= 768 ? <Nav /> : null} */}
          <Nav/>
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
              additionalClass={"form-viagem__button"}
              textButton={"Search and find dates"}
            />
          </Form>
        </section>
      </MainContent>
    </>
  );
};

export default HomePage;
