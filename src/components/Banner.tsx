"use client";

import Container from "@mui/material/Container";
import Button from "./Button";

enum iconTypeEnum {
  arrowRight = "ARROW_RIGHT",
}
const Banner = () => {
  return (
    <div className="hero-section__container">
      <div className="banner-bg">
        <Container className="hero-section">
          <h1 className="hero-section__text">
            Reading is an adventure, and we&apos;ve got your ticket.
          </h1>
          <p className="hero-section__subtext">
            We present you to the world of books where you can find the best at
            affordable rates, so escape reality and find your books with us.
          </p>
          <Button text="Coming soon!" className="mt-16" />
        </Container>
      </div>
    </div>
  );
};

export default Banner;
