"use client";

import Fade from "embla-carousel-fade";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

interface PhotoCarouselProps {
  data: {
    id: number;
    url: string;
    alt: string;
  }[];
}

const PhotoCarousel = ({ data }: PhotoCarouselProps) => {
  return (
    <Carousel
      plugins={[
        Autoplay({
          delay: 3000,
        }),
        Fade(),
      ]}
      opts={{
        align: "start",
        loop: true,
        containScroll: false,
      }}
      className="w-full h-full p-0 -m-1"
    >
      <CarouselContent className="h-full">
        {data.map((item) => (
          <CarouselItem key={item.id} className="h-full">
            <div className="flex justify-center h-full">
              <Card className="p-0  ">
                <div className="flex items-center justify-between h-full">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className=" md:h-[600px]  w-full object-cover"
                    quality={100}
                  />
                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default PhotoCarousel;
