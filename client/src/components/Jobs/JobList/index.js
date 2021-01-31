import React from "react";
import styled from "styled-components";
import JobCard from "../JobCard";

const JobList = ({ jobs }) => {
  return (
    <Container>
      <h1>Jobs</h1>
      <h2>Showing {jobs.length} Jobs</h2>
      <CardWrapper>
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </CardWrapper>
    </Container>
  );
};

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: auto;
`;

const CardWrapper = styled.div`
  margin: 50px 0 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 60px;
  row-gap: 30px;
  justify-items: center;
`;

export default JobList;
