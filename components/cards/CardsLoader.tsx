import React from 'react'
import CardComponent from './CardComponent';
import { client } from '@/app/lib/client';

export const revalidate = 100;
// Fetching data 
// async function getData(){
//   const query =`
//     *[_type == "post"  ] | order(_createdAt asc) {
//     title,
//     'currentSlug': slug.current,
//     shortDescription,
//     "coverImage": coverImage.asset->url,
//     projectType,
//     technologies,
//     jobTitle,
//     projectStatus,

//   }`;
//   const data = await client.fetch(query);
//   return data;
// }



async function getData(jobTitle?: jobTitleType, projectStatus?: projectStatusType, projectType?: ProjectType) {
    // Base query
    let baseQuery = `
      *[_type == "post" 
    `;
  
    // Array to hold filters
    const filters: string[] = [];
  
    if (jobTitle) {
      filters.push(`jobTitle == "${jobTitle}"`);
    }
    if (projectStatus) {
      filters.push(`projectStatus == "${projectStatus}"`);
    }
    if (projectType) {
      filters.push(`projectType == "${projectType}"`);
    }
  
    // Append filters to base query if any
    if (filters.length > 0) {
      baseQuery += ` && ${filters.join(' && ')}`;
    }
  
    // Close query and include fields
    baseQuery += `] | order(_createdAt asc) {
      title,
      'currentSlug': slug.current,
      shortDescription,
      "coverImage": coverImage.asset->url,
      projectType,
      technologies,
      jobTitle,
      projectStatus,
    }`;
  
    // Fetch data
    const data = await client.fetch(baseQuery);
    return data;
  }

async function CardsLoader( params: {jobTitle?: jobTitleType, projectStatus?: projectStatusType, projectType?: ProjectType}) {
    
    const data: PostType[] = await getData(params.jobTitle, params.projectStatus, params.projectType);

    
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-5 gap-5 z-[150]">
        {
        data.map((post: PostType, i) => {
  
          return (
            <CardComponent post={post} key={i}  />           
          );
        })
      }
    </div>
  )
}

export default CardsLoader

