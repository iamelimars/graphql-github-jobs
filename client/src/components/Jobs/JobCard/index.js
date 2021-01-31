import React from "react";
import styled from "styled-components";
import PlaceholderImg from "../../../assets/placeholder-image.png";
import { Link } from "react-router-dom";
import moment from "moment";

const JobCard = ({ job }) => {
  const { id, company, title, location, created_at, type } = job;

  return (
    <Container>
      <Wrapper>
        <Img src={company.logo_url || PlaceholderImg} alt={company.name} />
        <h1>{title}</h1>
        <h2 className="location">{location}</h2>
        <h3>{type}</h3>
        <p>
          {moment(created_at, "ddd MMM DD HH:mm:ss YYYY")
            .startOf("minute")
            .fromNow()}
        </p>
        <ApplyButton to={`/job/${id}`}>
          <button>View Job</button>
        </ApplyButton>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  background: #fff;
  border-radius: 0.5rem;
  width: 100%;

  h1 {
    margin: 0.7rem 0;
    font-size: 1.1rem;
  }

  h2 {
    margin: 0.5rem 0;
    font-size: 0.9rem;
    font-weight: 300;
  }

  h3 {
    font-size: 0.9rem;
    font-weight: 400;
  }

  .location {
    font-size: 0.9rem;
    color: #f68634;
    font-weight: bold;
  }

  p {
    font-size: 0.8rem;
    font-weight: 600;
    color: #7e7c7b;
    margin: 0.5rem 0;
  }
`;

const ApplyButton = styled(Link)`
  button {
    font-weight: 600;
    margin-top: 1rem;
    background: #0d62ff;
    color: #fff;
    border: none;
    border-radius: 0.4rem;
    padding: 0.7rem 2.5rem;
    cursor: pointer;
  }
`;

const Img = styled.img`
  max-width: 80%;
  max-height: 70px;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

export default JobCard;
