export type OrderDataType={
    _id: string;
    user: {
      _id: string;
      firstname: string;
      lastname: string;
      username: string;
      phoneNumber: string;
      address: string;
      role: 'USER' | 'ADMIN';
      createdAt: string;
      updatedAt: string;
    };
    products: [
      {
        product: {
          _id: string;
          category: string;
          subcategory: string;
          name: string;
          price: number;
          quantity: number;
          brand: string;
          description: string;
          thumbnail: string;
          images: string[];
          createdAt: string;
          updatedAt: string;
          slugname: string;
        };
        count: number;
        _id: string;
      }
    ];
    totalPrice: number;
    deliveryDate: string;
    deliveryStatus: true;
    createdAt: string;
    updatedAt: string;
  }