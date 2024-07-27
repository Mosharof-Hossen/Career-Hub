

const Banner = () => {
    return (
        <div className="bg-[#FAF8FF] px-5 flex justify-between items-center md:flex-row flex-col">
            <div  className="flex-1 space-y-8">
                <h1 className="text-5xl font-extrabold">One Step Closer To Your <br /><span className="text-primary-first">Dream Job</span></h1>
                <p className="text-xl text-primary-color font-semibold">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className="bg-gradient-to-r from-primary-first to-primary-second px-4 py-1 text-white rounded">Get Started</button>
            </div>
            <div className="flex-1">
                <img src="https://i.ibb.co/jRpp6bH/user.png" alt=""  />
            </div>
        </div>
    );
};

export default Banner;