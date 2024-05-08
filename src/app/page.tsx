import Image from "next/image";
import getData from "@/config/getData";
export default async function Home() {
  const data = await getData();
  const homePage = await data.items.filter(
    (item: any) => item.sys.contentType.sys.id === "homepage"
  );
  console.log(homePage);
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      {homePage[0].fields.title}
    </div>
  );
}
