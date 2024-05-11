import { type MonumentLocation } from "../types.js";
import { randomUUID } from "node:crypto";

class Monument {
  id: string;
  city: string;
  country: string;

  constructor(
    public name: string,
    public description: string,
    public imageUrl: string,
    { city, country }: MonumentLocation,
  ) {
    this.id = randomUUID();
    this.city = city;
    this.country = country;
  }
}

export default Monument;
