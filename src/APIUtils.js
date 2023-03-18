export default async function fetchData(params) {
  const response = await fetch(params,{
    method: "GET",
      headers: {
        Authorization:
          "1251a1de9906a858d1fc697792a5f5a7065a5fe984a159b1d3c3bbea160aa39b",
      },
  });
  const data = await response.json();
  return data;
}