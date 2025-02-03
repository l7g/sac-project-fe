"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import { ProductType } from "@/lib/utils";

const ProductCard: React.FC = ({}) => {
  return (
    <Card className="bg-accent-light/50 dark:bg-accent-dark/50 border-none shadow-xl">
      <CardHeader>
        <p className="text-md text-text-light font-bold">Nome Prodotto</p>
        <p></p>
      </CardHeader>
      <CardContent>
        <p>629,99€</p>
        <Button className="bg-slate-100 mt-2">Compra</Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
