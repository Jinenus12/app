import  z, { Schema }  from "zod";
//types\todoTypes.ts
export type todoType = {
  id: string;
  title:z.ZodString
  //title?: string | null;
  isCompleted: boolean;
  updatedAt?: Date | null;
  createdAt?: Date;
};
export const validateZod = z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    
    name: z.string({
      required_error: "Name is required",
    }),
    price: z.number({required_error: "Price is required",

    }),
    
    amaunt: z.number({required_error: "Amaunt is required",

    }),

  });
  
  