import { endpoint } from "../Endpoints/endpoints";

export const GetPost = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_GET_POST}${endpoint.getpost}`
  );
  const result = await response.json();
  return result;
};

export const GetComments = async () => {
  const response = await fetch(
    `${process.env.REACT_APP_GET_POST}${endpoint.getComments}`
  );
  const result = await response.json();
  console.log("result", result);
};

// fetch('http://example.com/movies.json')
//   .then((response) => response.json())
//   .then((data) => console.log(data));
