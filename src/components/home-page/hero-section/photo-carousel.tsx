"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

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
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full h-full p-0 -m-1 "  
    >
      <CarouselContent className="h-full">
        {data.map((item) => (
          <CarouselItem key={item.id} className="h-full">
            <div className="flex justify-center h-full">
              <Card className="p-0 h-full">
                <div className="flex items-center justify-between h-full">
                  <Image
                    src={item.url}
                    alt={item.alt}
                    width={1920}
                    height={1080}
                    className="min-h-[80vh] w-full object-cover"
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
