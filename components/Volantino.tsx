"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";

const Volantino: React.FC = () => {
  return (
    <div className="flex flex-col bg-accent-light/50 p-10 pt-5">
      <p className="text-2xl text-text-light/50 capitalize">Volantino</p>

      <div className="flex flex-row">
        <Card className="bg-accent-light border-none shadow-xl">
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
      </div>
    </div>
  );
};

export default Volantino;
