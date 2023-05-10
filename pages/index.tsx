import styles from "./index.module.css";
import Header from "../components/header/header";
import Nav from "../components/nav/nav";
import requests from "../utils/requests";
import Request from "../components/request/request";

/*
  request the data and gets all data on the server 
  passes it to the props via a json  

  function getServerSideProps(context) 
*/ 

export default function Index({results}) {
  console.log( results)
  return (
    <div> 
       <Header/>
        <Nav /> 
        <Request results={results} />
    </div>
  );
}

export async function getServerSideProps(context) { 
  const genre = context.query.genre;
  const request = await  fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending.url }`).then((res) =>  res.json()) 
  return { 
    props: {
      results: request.results
    } 
  }
} 
 