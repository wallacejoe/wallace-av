  export interface Package {
    packageId: string;
    name: string;
    description: string;
    price: number;
  }
  
  export type GetPackage = {
    id: number;
  };
