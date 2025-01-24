import React from "react";
import CardComponent from "./CardComponent";
import { client } from "@/app/lib/client";

export const revalidate = 0;

async function getData(justForSale: boolean, jobTitleFilter?: string) {
  // Base filters array
  let filters = [];

  // Exclude "soldOut" products if justForSale is true
  if (justForSale) {
    filters.push(`projectStatus != "soldOut"`);
  }

  // Apply jobTitle filter only if it exists
  if (jobTitleFilter) {
    filters.push(`jobTitle == "${jobTitleFilter}"`);
  }

  // Combine filters properly
  let filterQuery = filters.length ? `&& ${filters.join(" && ")}` : "";

  // Final query
  let baseQuery = `
    *[_type == "post" ${filterQuery}] | order(_createdAt asc) {
      title,
      'currentSlug': slug.current,
      shortDescription,
      "coverImage": coverImage.asset->url,
      projectType,
      technologies,
      jobTitle,
      projectStatus
    }`;

  // Only pass jobTitleFilter if it is defined
  const params = jobTitleFilter ? { jobTitleFilter } : {};

  // Fetch data
  const data = await client.fetch(baseQuery, params);
  console.log(data);
  return data;
}

async function CardsLoader({ justForSale, jobTitleFilter }: { justForSale: boolean; jobTitleFilter?: string }) {
  const data: PostType[] = await getData(justForSale, jobTitleFilter);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 z-[150]">
      {data.map((post: PostType, i) => (
        <CardComponent post={post} key={i} />
      ))}
    </div>
  );
}

export default CardsLoader;
