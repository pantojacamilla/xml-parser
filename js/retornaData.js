const retornaData = (data) => {
  let dataCorreta;

  if (data.includes('T')) {
    dataCorreta = new Date(new Date(data).toString());
  } else {
    dataCorreta = new Date(new Date(`${data}T00:00:00-03:00`).toString());
  }

  return dataCorreta;
};

export default retornaData;
