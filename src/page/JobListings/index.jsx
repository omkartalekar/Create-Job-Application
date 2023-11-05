import React, { useEffect} from 'react'
import JobCard from '../../Component/JobCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../redux/actions/jobActions';

const JobListings = () => {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobs);

  console.log("jobs", jobs)

  useEffect(() => {
    dispatch(getAllJobs())
  }, [dispatch]);

  return (
    <div style={{ height: "100vh", width: "100%", display: "flex", flexDirection: "column", }}>
      {
        jobs?.map((job) => {
          return <JobCard job={job} key={job.id} />;
        })
      }
    </div>
  )
}

export default JobListings