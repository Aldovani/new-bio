export async function getData() {
  const response = await fetch(`${process.env.BASE_URL}/api/get-data`);
  const json = await response.json();
  return json;
}
