import { client } from '@/app/lib/client';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import React from 'react'

export const revalidate = 0;

async function getData(slug:string){
    const query =
        `
        *[_type == "post"&& slug.current=='${slug}'] {
        title,
        publishedAt,
        shortDescription,
        projectType,
        technologies,
        content,
        'currentSlug': slug.current,
        "coverImage": coverImage.asset->url,
            gallery[] {
        "imageUrl": image.asset->url,
        title,
        description,
        content,
    },
        "videoFileUrl": video.videoFile.asset->url, 
        "youtubeLink": video.youtubeLink,          
        links[] {
            title,                                   
            url                                      
        }
        }[0]`;
const data = await client.fetch(query);
return data;
}

export default async function PostDetails({params}:{params:{slug:string}})  {
    const data:PostDetails = await getData( params.slug)
    console.log(data.gallery)

  return (
    <div className='flex items-center justify-center'>
    <div className='mt-8 flex flex-col items-center max-w-4xl w-full m-auto'>
        <h1>
          <span className='my-5 block text-3xl font-bold leading-8 text-center tracking-tight sm:text-5xl'>
            {data.title}
          </span>
        </h1>
        {/* -------------------------------------------------------------------- */}
        <div className='flex flex-col md:flex-row items-center justify-between w-full gap-4 my-5  '>
            {/***************************** type *****************************/}
            <p className='h-full text-primary'>
              {data.projectType}
            </p>
            {/* ***************************** tags **************************** */}
            {data.technologies && data.technologies.length > 0 && (
                <div className="flex gap-2 items-center flex-wrap  ">   
                    {data.technologies.map((tag, index) => (
                        <div key={index} className="flex items-center gap-2 bg-primary  rounded-full">
                          {/* <Image
                              src={tag.tagIcon}
                              width={30}
                              height={30}
                              alt={`Tag icon ${index + 1}`}
                              className="h-6  w-6 rounded-full"
                          /> */}
                          <h2 className="px-3 py-1 text-sm font-medium">{tag}
                          </h2>
                        </div>
                    ))}
                </div>
            )}
        </div>

        {/* if there is a youtube link embed it if not show the image */}
        <div className='flex items-center justify-center w-full'>
        {
          data.youtubeLink ? (
            <iframe
              // width="1200"
              // height=""
              src={data.youtubeLink}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="mt-2 rounded-lg border w-full aspect-video"
            ></iframe>
          ) : (
            <Image 
            src={data.coverImage} 
            alt={data.title} 
            width={1200} height={1200} 
            priority
            className='mt-2 rounded-lg border'/>
          )
        }
        </div>

        {/* ----------------------Short discription --------------------- */}

        <div className='mt-10  max-w-5xl'>
          <p className=' text-lg text-center'>

            {data.shortDescription}
            
          </p>
        </div>
        

        
        {/* ----------------------if there is galery map over it --------------------- */}
        {data.gallery && data.gallery.length > 0 && (
          data.gallery.map((galleryData, index) => (
            <div className='w-full flex flex-col py-10' key={index}>
              {/* if image   */}
              <Image 
                src={galleryData.imageUrl} 
                alt={data.title + index} 
                width={1200} height={1200} 
                className='mt-2 rounded-lg border'/>

              {/* <h3 className='mt-10  text-2xl block font-bold leading-8 text-center tracking-tight sm:text-4xl'>
                {galleryData.title}
              </h3> */}
             
              <p className=' mt-4  prose max-w-none   text-center'>{galleryData.description}</p>
              {
                galleryData.content && galleryData.content.length > 0 && (
                  <div className='mt-10 prose prose-h3:text-5xl prose-h3:mb-5 prose-h4:mt-8 prose-purple max-w-none prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
                    <PortableText value={galleryData.content}/>
                  </div>
                )
              }

          </div>
          ) ) 
        )}
        {/* <div className='mt-10 prose  prose-purple max-w-none prose-lg dark:prose-invert prose-li:marker:text-primary prose-a:text-primary'>
          <PortableText value={data.content}/>
        </div> */}
    </div>
    </div>
  )
}
