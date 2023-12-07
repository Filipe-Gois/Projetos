import React from "react";
import "./HomePage.css";
import {
  Input,
  Form,
  Button,
} from "../../Components/FormComponents/FormComponents";
import MainContent from "../../Components/MainContent/MainContent";
import Nav from "../../Components/Nav/Nav";
import Container from "../../Components/Container/Container";
import Location from "../../assets/Icons/location.svg";
import Phone from "../../assets/Icons/phone.svg";
import Email from "../../assets/Icons/email.svg";
import Article from "../../Components/Article/Article";
import Ocean from "../../assets/images/ocean.jpg";
import Mountains from "../../assets/images/mountains.jpg";

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
            <Button textButton={"Search and find dates"} />
          </Form>
        </section>

        <section className="explore-section">
          <Container>
            <div className="explore-section__content">
              <div className="explore-section__title">
                <h1>Explore Nature</h1>
                <p>Travel with us and see nature at its finest.</p>
              </div>
              <div className="explore-section__content-box">
                <Article
                  imageRender={Ocean}
                  title={"West Coast, Norway"}
                  price={"Roundtrip from $79"}
                  additionalClass={"article-viagem"}
                />

                <Article
                  imageRender={Mountains}
                  title={"Mountains, Austria"}
                  price={"One-way from $39"}
                  additionalClass={"article-viagem"}
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="newsletter-section">
          <Container>
            <Form additionalClass="newsletter-section__content">
              <div className="newsletter-section__title">
                <h2>Get the best offers first!</h2>
                <p>Join our newsletter.</p>
              </div>

              <div className="input-camp-newsletter">
                <label htmlFor="input-component--newsletter">E-mail</label>
                <Input
                  type={"email"}
                  placeholder={"Your Email address"}
                  additionalClass="input-component--newsletter"
                  name={"input-component--newsletter"}
                  required={"required"}
                />
              </div>
              <Button
                textButton={"Subscribe"}
                additionalClass="button-component--red"
              />
            </Form>
          </Container>
        </section>

        <section className="contact-section">
          <Container>
            <div className="contact-section__content">
              <div className="contact__info-box">
                <h2>Contact</h2>
                <p>Let us book your next trip!</p>

                <div className="info-box__content">
                  <div className="info-box__line">
                    <img src={Location} alt="" />
                    <p>Chicago, US</p>
                  </div>

                  <div className="info-box__line">
                    <img src={Phone} alt="" />
                    <p>Phone: +00 151515</p>
                  </div>

                  <div className="info-box__line">
                    <img src={Email} alt="" />
                    <p>Email: mail@mail.com</p>
                  </div>
                </div>
              </div>

              <Form additionalClass={"contact-form"}>
                <Input
                  type={"text"}
                  required={"required"}
                  placeholder={"Name"}
                  additionalClass="input-component input-component--component-form"
                />

                <Input
                  type={"email"}
                  required={"required"}
                  placeholder={"Email"}
                  additionalClass="input-component input-component--component-form"
                />

                <Input
                  type={"text"}
                  required={"required"}
                  placeholder={"Message"}
                  additionalClass="input-component input-component--component-form"
                />

                <Button
                  textButton={`SEND MESSAGE`}
                  additionalClass="button-component--black"
                />
              </Form>
            </div>
          </Container>
        </section>
      </MainContent>
    </>
  );
};

export default HomePage;
