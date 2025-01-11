import CardsLoader from "@/components/cards/CardsLoader";
import Herosection from "@/components/header/Herosection";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


const Home = () => {

  return (
    <div className="h-full  flex flex-col justify-center items-center w-screen">
      <div className="flex flex-col  gap-20 mb-16">

        <Herosection/>
      </div>

      <div className="mt-10 max-w-5xl z-[100] mx-10 min-h-screen w-full">
      <Tabs defaultValue="webDevelopment" className="">
        <TabsList className="flex w-full h-full mb-10 ">
          <TabsTrigger value="webDevelopment" className="text-wrap h-fit w-full  " >Web & Application</TabsTrigger>
          <TabsTrigger value="videoEditing" className="text-wrap h-full w-full " >Video and Editing</TabsTrigger>
          <TabsTrigger value="motionContent" className="text-wrap h-full w-full" >3D Motion Content</TabsTrigger>
          <TabsTrigger value="forSale" className="text-wrap h-full w-[30%] bg-primary color-white" >For Sale</TabsTrigger>
        </TabsList>

        <TabsContent value="webDevelopment">
          <CardsLoader jobTitle="webDevelopment" projectStatus="soldOut"/>
        </TabsContent>
        <TabsContent value="videoEditing">
          <CardsLoader jobTitle="videoEditing" projectStatus="soldOut"/>
        </TabsContent>
        <TabsContent value="motionContent">
          <CardsLoader jobTitle="motionContent" projectStatus="soldOut"/>
        </TabsContent>
        <TabsContent value="motionContent">
          <CardsLoader projectStatus="forSale"/>
        </TabsContent>
      </Tabs>
      </div>

    </div>
  );
}

export default Home
