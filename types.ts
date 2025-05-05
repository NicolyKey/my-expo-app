export type RootStackParamList = {
    Home: undefined;
    Restaurant: {
        id: number;
        name: string;
        image: any;
        description: string;
        lng: number;
        lat: number;
        address: string;
        stars: number;
        reviews: string;
        category: string;
        dishes: {
            id: number;
            name: string;
            description: string;
            price: number;
            image: any;
        }[];
    };
};
