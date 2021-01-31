import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOB } from "../../graphql/Queries";
import { useParams } from "react-router-dom";
import JobComponent from "../../components/JobComponent";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";

const Job = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(LOAD_JOB, {
    variables: { id },
  });
  if (loading) return <LoadingComponent />;

  if (error)
    return <ErrorComponent message="There was an error loading the job" />;

  return (
    <div>
      <div>{data.job && <JobComponent job={data.job} />}</div>
    </div>
  );
};

export default Job;
