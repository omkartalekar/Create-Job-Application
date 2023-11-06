import React, { useEffect } from 'react'
import JobCard from '../../Component/JobCard'
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from '../../redux/actions/jobActions';

const JobListings = () => {

  const dispatch = useDispatch();
  const jobs = useSelector(state => state.jobs.jobs);

  useEffect(() => {
    dispatch(getAllJobs())
  }, []);

  return (

    <div style={{ height: "100vh", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", position: "relative" }}>

      {
        jobs.map(job => <JobCard job={job} key={job.id} />)
      }

    </div>
  )
}

export default JobListings

