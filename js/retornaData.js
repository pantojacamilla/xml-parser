const retornaData = (data) => {
  const dataCorreta = new Date(new Date(`${data}T00:00:00-03:00`).toDateString());
  return dataCorreta;
};

export default retornaData;
