import { useFetchJobsQuery } from "./generated/graphql";
import "./App.css";

function App() {
  const { loading, error, data } = useFetchJobsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <>
      {data?.jobs.edges.map(({ node }) => (
       <p key={node.UID}>{node.Name}</p> 
      ))}
    </>
  );
}

export default App;
