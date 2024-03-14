interface CategoryProps {
  params: {
    // The categories [[]] notation handles all the navigation and even catches the /store route
    // The ... does the same for /each/step of the route
    categories: string[];
    // Search params will capture the query string
    searchParams?: string[];
  };
}

export default function Category(props: CategoryProps) {
  const { categories } = props.params;
  // console.log(categories);
  // console.log(props);

  return <h1>Category {categories} </h1>;
}
