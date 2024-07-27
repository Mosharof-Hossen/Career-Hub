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
        <div className="space-y-4">
            <div className="text-center space-y-5">
                <h2 className="text-5xl font-extrabold">Job Category List</h2>
                <p className="text-base text-primary-color">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-5 p-5">
                {
                    categories.map((category)=><Category key={category.id} category={category}></Category>)
                }
            </div>
        </div>
    );
};

export default CategoryList;