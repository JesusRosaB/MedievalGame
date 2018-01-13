export class Resources {
  id: number;
  name: string;
  quantity: number;

  constructor(id: number, name: string, quantity: number) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
  }

  getId(): number {
        return this.id;
  }

  getName(): string {
        return this.name;
  }

  getQuantity(): number {
    return this.quantity;
  }

}
