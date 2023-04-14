interface Product {
    id: string;
    title: string;
    price: number;
    stock: number;
  }
  
  interface Customer {
    id: string;
    email: string;
    password: string;
  }
  
  interface Order {
    id: string;
    customerId: string;
    productId: string;
    quantity: number;
    price: number;
  }
  
  class OnlineShop {
    private orders: Order[] = [];
    private products: Product[] = [];
    private customers: Customer[] = [];

    public addProduct(title: string, price: number): void {}
    public updateProduct(productId: string, title: string, price: number): void {}
    public removeProduct(productId: string): void {}
    public getAvailableItems(productId: string): void {}
    public restockProduct(productId: string): void {}
    public createCustomer(email: string, password: string): void {}
    public loginCustomer(email: string, password: string): void {}
    public makePurchase(customerId: string, productId: string): void {}
    public addOrder(customerId: string, productId: string, quantity: number): void {}
  }