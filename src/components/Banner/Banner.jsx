import './Banner.css'

const Banner = () => {
    return (
        <div className='banner text-center'>
            <h1>Welcome to <br /><span className='text-danger name'>Chef Table</span></h1>
            <br />
            <p className='py-5'>Want to try the variety of <span className='country'>Bangladeshi</span> cuisine? Then you are in the right place! We have world class chefs with world class services. Visit our features to decide what you need to take.</p>
            <button className='btn btn-danger'>See our features</button>
        </div>
    );
};

export default Banner;