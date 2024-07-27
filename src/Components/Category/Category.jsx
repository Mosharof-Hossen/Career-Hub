
import PropTypes from 'prop-types';

const Category = ({ category }) => {
    const {logo,category_name,availability} = category;
    return (
        <div className="card bg-base-100 w-56 shadow-xl mt-5">
            <figure className="px-10 pt-10">
                <img
                    src={logo}
                    alt="Shoes"
                    className="rounded" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{category_name}</h2>
                <p>{availability}</p>
            </div>
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
};

export default Category;