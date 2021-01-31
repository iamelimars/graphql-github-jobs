import React from "react";
import { useQuery } from "@apollo/client";
import { LOAD_JOBS } from "../../graphql/Queries";
import JobList from "../../components/Jobs/JobList";
import LoadingComponent from "../../components/LoadingComponent";
import ErrorComponent from "../../components/ErrorComponent";

const Jobs = () => {
  const { loading, error, data } = useQuery(LOAD_JOBS);
  if (loading) return <LoadingComponent />;
  if (error)
    return <ErrorComponent message="There was an error loading the jobs" />;

  return <div>{data.jobs && <JobList jobs={data.jobs} />}</div>;
};

export default Jobs;
