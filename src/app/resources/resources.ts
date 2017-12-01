export class Resource {
  quantity: number;
}

export interface ResourcesManage{
  currentQuantity();
  increase(quantity: number);
  spend(quantity: number);
}
