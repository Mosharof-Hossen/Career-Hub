import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {

    const [categories , setCategories] = useState([]);
    useEffect(()=>{
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-10 my-10 p-5">
            <div className="text-center space-y-5">
                <h2 className="text-5xl font-extrabold">Job Category List</h2>
                <p className="text-base text-primary-color">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="flex  flex-wrap justify-around">
                {
                    categories.map((category)=><Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;