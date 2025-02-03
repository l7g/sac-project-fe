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
    <div className="flex flex-col bg-accent-light/50 dark:bg-accent-dark/50 p-10 pt-5">
      <p className="text-2xl text-text-light/50 capitalize">Volantino</p>

      <div className="flex flex-row gap-16">
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
        <Carousel >
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
  );
};

export default Volantino;
