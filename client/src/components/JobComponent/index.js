import React from "react";
import styled from "styled-components";
import moment from "moment";
import { useHistory } from "react-router-dom";

const JobComponent = ({ job }) => {
  const history = useHistory();
  const { company, title, location, created_at, type } = job;

  return (
    <Container>
      <BackButton onClick={() => history.goBack()}>Go Back</BackButton>
      <Wrapper>
        <Img src={company.logo_url || ""} alt={company.name} />
        <h1 className="company_link">
          <a target="_blank" href={company.url}>
            {company.name}
          </a>
        </h1>
        <h2>{title}</h2>
        <HeaderWrapper>
          <h3>{location}</h3>
          <h3>{type}</h3>
          <h3>
            {moment(created_at, "ddd MMM DD HH:mm:ss YYYY")
              .startOf("minute")
              .fromNow()}
          </h3>
        </HeaderWrapper>
        <ApplyWrapper>
          <div dangerouslySetInnerHTML={{ __html: job.how_to_apply }} />
        </ApplyWrapper>
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 2rem 0;
`;

const BackButton = styled.button`
  margin: 1rem;
  background: #dddddc;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  border: none;
  font-size: 1rem;
  cursor: pointer;
`;

const ApplyWrapper = styled.div`
  margin: 3rem 0;
  a {
    visibility: hidden;
    position: relative;
    padding: 0.8rem 2rem;
  }

  a:after {
    visibility: visible;
    position: absolute;
    top: 0;
    left: 0;
    content: "APPLY";
    background: #0d62ff;
    color: #fff;
    font-weight: 600;
    padding: 0.8rem 2rem;
    border-radius: 0.6rem;
  }
`;
const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0.6rem 0;
  h3 {
    padding-right: 2.5rem;
    font-size: 1rem;
    font-weight: 400;
    color: #7e7c7b;
  }
`;

const Wrapper = styled.div`
  padding: 2rem;

  .company_link {
    margin-top: 2.5rem;
    a {
      text-decoration: none;
      color: #7e7c7b;
      font-size: 1.8rem;
      font-weight: 400;
    }
  }
  h2 {
    margin-top: 0.3rem;
    font-size: 1.8rem;
  }

  ul,
  li {
    margin: 4px 0 4px 25px;
  }
  ul {
    margin-bottom: 3rem;
  }
  p {
    font-size: 0.9rem;
    font-weight: 300;

    margin: 1rem 0;
  }
`;

const Img = styled.img`
  max-width: 80%;
  max-height: 70px;
  border-radius: 10px;
`;

export default JobComponent;
