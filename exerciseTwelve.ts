// class User{
 
//     constructor(name, age, email) {
//       this.name=name;
//       this.age=age;
//       this.email = email;
//     }         
//   }
  
//   //const user = new User ('Max', 31, 'max@test.com');
  
  
//   Solution
  
  class User{
      name:string;
      age:number;
      email:string;
   
      constructor(name:string, age:number, email:string) {
        this.name=name;
        this.age=age;
        this.email = email;
      }; 
      
      toString(){
          return `User: ${this.name}, Age: ${this.age}, Email: ${this.email}`
      };
     }
  
     const user = new User('Max', 31, 'max@test.com');
     console.log(user.toString());