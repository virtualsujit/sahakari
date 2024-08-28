import ContactComponents from "@/components/contact-page/contact-page";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const page = () => {
  return (
    <div className="max-w-[1400px] mx-auto py-4 px-4">
      <Tabs
        defaultValue="headoffice"
        className="w-full  shadow-white bg-white  "
      >
        <TabsList className="bg-[#32488A] w-full flex  h-full  flex-col md:flex-row ">
          <TabsTrigger
            value="headoffice"
            className="flex-1 text-center text-white"
          >
            Head Office
          </TabsTrigger>
          <TabsTrigger
            value="dulegauda"
            className="flex-1 text-center text-white"
          >
            Dulegauda Service Centre
          </TabsTrigger>
          <TabsTrigger
            value="bhandardhik"
            className="flex-1 text-center text-white  "
          >
            Bhandardhik Service Centre
          </TabsTrigger>
          <TabsTrigger
            value="mohoriya"
            className="flex-1 text-center text-white"
          >
            Mohoriya Service Centre
          </TabsTrigger>
        </TabsList>
        <TabsContent value="headoffice" className="">
          <ContactComponents />
        </TabsContent>
        <TabsContent value="dulegauda" className="">
          <ContactComponents />
        </TabsContent>
        <TabsContent value="mohoriya" className="">
          <ContactComponents />
        </TabsContent>
        <TabsContent value="bhandardhik" className="">
          <ContactComponents />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
