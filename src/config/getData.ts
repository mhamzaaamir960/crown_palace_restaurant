async function getData() {
  try {
    const url = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url,{next:{revalidate:0}});
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
    const url: string = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/assets/${asset_id}?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url,{next:{revalidate:0}});
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

export async function getHeroSectionData() {
  try {
    const url: string = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/5iUZP0lkcLjrscRVhMyLQE?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url,{next:{revalidate:0}});
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

export async function getSocialLinks() {
  try {
    const url: string = `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries/6fR8zhsU70wKISFwMiA7gu?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}`;

    const res = await fetch(url,{next:{revalidate:0}});
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
