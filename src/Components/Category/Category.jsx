import React from 'react';
import PropTypes from 'prop-types';

const Category = ({category}) => {
    console.log(category);
    return (
        <div>
            
        </div>
    );
};

Category.propTypes = {
    category: PropTypes.object.isRequired
};

export default Category;