async function getData() {
  try {
    const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();

    if (!res.ok) {
      console.log("failed to fetch data");
      throw new Error("Failed to fetch data");
    }
    return data;
  } catch (err) {
    console.log(err);
  }
}

export default getData;

export async function getImages(asset_id: any) {
  try {
    const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/assets/${asset_id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url, { cache: "no-store" });
    const data = await res.json();
    if (!res.ok) {
      console.log("failed to fetch data");
      throw new Error("Failed to fetch data");
    }
    return "https:" + data.fields.file.url;
  } catch (err) {
    console.log(err);
  }
}
