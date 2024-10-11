
//fetch request 
fetch('https://taco-api.netlify.app/alimentos/')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro na requisição:', response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });

//fetch response 
fetch('https://taco-api.netlify.app/alimentos/')
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Erro na requisição:', response.status);
    }
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error(error);
  });
