"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ProductCard from "./ProductCard";

const Volantino: React.FC = () => {
  return (
    <div className="flex flex-col bg-gradient-to-t from-accent-light/50 to-transparent dark:from-accent-dark/50 p-10 pt-5 gap-8">
      <div className="flex flex-col lg:flex-row  gap-16">
        <Card className="bg-accent-light dark:bg-accent-light border-none shadow-xl">
          <CardHeader>
            <p className="text-2xl text-text-light font-bold">
              CONTINUANO LE OFFERTE!
            </p>
          </CardHeader>
          <CardContent>
            <p>Scopri i migliori prodotti selezionati per te</p>
            <Button className="bg-slate-100 mt-2">Esplora</Button>
          </CardContent>
        </Card>
        <div className="w-full lg:pr-4 sm:md:px-4">
          <Carousel>
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <ProductCard />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>

      <div className="flex flex-row gap-2 justify-center">
        <p className="text-lg text-text-light/80 dark:text-text-dark/80 border-b-[.1rem] border-text-light/80 dark:border-text-dark/80 capitalize">
          Volantino
        </p>
      </div>
    </div>
  );
};

export default Volantino;
