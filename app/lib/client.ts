import { createClient } from "@sanity/client";
// inside here we have to pass actually three values project Id , data set ,api version

export const client = createClient({
    apiVersion: '2024-01-01',
    dataset:'production',
    projectId:'mpfra11n',
    useCdn: false,
    // useCdn: true,

})