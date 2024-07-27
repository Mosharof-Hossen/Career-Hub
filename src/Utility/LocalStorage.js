

const getStoredApplication =()=>{
    const storedApplications = JSON.parse(localStorage.getItem("job-application"));
    return storedApplications || [] ;
}
const saveJobApplication = (id) => {
    const storedJobApplications = getStoredApplication();
    const exist = storedJobApplications.find(jobId => jobId == id);
    if(!exist){
        storedJobApplications.push(id);
        localStorage.setItem('job-application', JSON.stringify(storedJobApplications));
    }
}

export {saveJobApplication, getStoredApplication};