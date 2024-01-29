import { useEffect, useState } from "react";
import classes from "../Category/Category.module.css";

const Category = () => {
  // const [category, setCategory] = useState();

  const [project, setProject] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3100/categories`)
      .then((response) => response.json())
      .then((project) => setProject(project));
  }, []);

  return (
    <div className={classes.categorySection}>
      <table className={classes.table}>
        <thead className={classes.tableHead}>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Description With</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {project.length > 0 &&
            project.map((project, id) => (
              <tr key={id}>
                <td>{project.id} </td>
                <td>{project.name} </td>
                <td>{project.description} </td>
                <td>{project.status} </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Category;
