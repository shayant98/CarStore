export interface Part {
    id?: string;
    partNumber?: string;
    manufacturer?: string;
    name?: string;
    description?: {
        dimension?: string;
        grip?: string;
        warranty?: string;
    };
    category?: string;
    img?: string;
    price?: number;

}