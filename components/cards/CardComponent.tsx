import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'



const CardComponent = (params: {post: PostType}) => {

    const borderColor = 
         params.post.projectType === 'designed' 
            ? 'border-red-500 hover:shadow-red-500 hover:shadow-lg' 
            : params.post.projectType === 'developed' 
            ? 'border-blue-500 hover:shadow-blue-500 hover:shadow-lg  ' 
            : 'border-primary hover:shadow-purple-800 hover:shadow-lg  ';

  return (

        <Card 
            
            className={`transition-all duration-300 border z-[150] ${borderColor}`} // Apply the dynamic class

          >
            <Image 
              src={params.post.coverImage} // Configure the next.config.js for external images
              alt={params.post.title } 
              width={700}
              height={700}
              className="rounded-t-lg h-[200px] object-cover"
            />

            <CardContent className="mt-5">
            {params.post.technologies && params.post.technologies.length > 0 && (
                <div className="flex gap-1 items-center justify-start flex-wrap mb-4  ">   
                    {params.post.technologies.map((tag, index) => (
                        <div key={index} className="flex items-center  bg-primary  rounded-full">
                          {/* <Image
                              src={tag.tagIcon}
                              width={30}
                              height={30}
                              alt={`Tag icon ${index + 1}`}
                              className="h-6  w-6 rounded-full"
                          /> */}
                          <h2 className="px-2 py-1 text-[10px] font-medium">{tag}
                          </h2>
                        </div>
                    ))}
                </div>
            )}
              <h3 className="text-xl font-medium line-clamp-2">{params.post.title}</h3>
              <p className="text-sm text-muted-foreground line-clamp-3 mt-2">
                {params.post.shortDescription}  
              </p>
              <Button asChild className="w-full rounded-sm mt-5"> 
                <Link href={`/post/${params.post.currentSlug}`}>
                  Read More
                </Link>
              </Button>
            </CardContent>
        </Card>

  )
}

export default CardComponent