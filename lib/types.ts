
type ProjectType = 'designed' | 'developed' | 'designed and developed';
type projectStatusType = 'forSale' | 'soldOut';
type jobTitleType = 'webDevelopment' | 'motionContent' | 'videoEditing';

type Technology =
  | 'figma'
  | 'canva'
  | 'adobe'
  | 'html'
  | 'css'
  | 'javascript'
  | 'tailwind'
  | 'typescript'
  | 'reactjs'
  | 'react_native'
  | 'flutter'
  | 'nextjs'
  | 'django'
  | 'sanity'
  | 'strapi'
  | 'other_tech';

  interface LinksType {
    title: string; // Title of the link
    url: string;   // URL of the link
}
  interface PostType {
    title: string; // Title of the post
    currentSlug: string; // Slug as a string
    shortDescription?: string; // Optional short description
    coverImage: string; // Optional URL for the cover image
    // galleryImages?: string[]; // Array of image URLs
    // publishedAt: string; // ISO string for the published date
    projectType: ProjectType; // Enum-like field for project type
    technologies: Technology[]; // Array of technology strings (from predefined list)
    jobTitle: jobTitleType;
    projectStatus: projectStatusType;
  }
  interface galleryType {
    imageUrl: string;
    title?: string;
    description?: string;
    content?:any;
    jobTitle: jobTitleType;
    projectStatus: projectStatusType;
  }

  interface PostDetails {
    title: string; // Title of the post
    shortDescription: string; // Short description
    publishedAt: string; // Date of publication
    projectType: ProjectType; // Type of the project
    technologies: Technology[]; // List of technologies used
    content: any; // Content of the post
    currentSlug: string; // Current slug of the post
    coverImage: string; // URL of the cover image
    gallery?: galleryType[]; // URLs of gallery images
    videoFileUrl?: string; // URL of the video file (optional)
    youtubeLink?: string; // YouTube link of the video (optional)
    links?: LinksType[]; // Array of links
    jobTitle: jobTitleType;
    projectStatus: projectStatusType;

}