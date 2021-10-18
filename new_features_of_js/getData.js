const getData = async () => {
  try {
    const request = await fetch("https://swapi.dev/api/people/");
    const result = await request.json();
    return console.log(result);
  } catch (error) {
    return console.log(error);
  }
};
