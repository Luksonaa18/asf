// ობიექტის მასივი
const students = [
    { name: "ბადრი", age: 17 },
    { name: "ჯონი", age: 19 },
    { name: "ჯაბა", age: 15 }
  ];
  
  const axaliasaki = students.map(student => {
    // ცვლადი რომელიც არსებულ ასაკს დაუმატებს ერთს
    const newAge = student.age + 1;
    // if-ის შემოკლებული ვერსია
    // ამ if-ში თუ ასაკი ნაკლებია 18-ზე "udnerage",ხოლო 18-ზე მეტი "old-enough"
    const status = newAge < 18 ? "underage" : "old-enough";
    // arrow function-თან გვჭირდება return
    return { ...student, age: newAge, status: status };
  });
  
  console.log(axaliasaki);



  const products = [
    { name: "Laptop", category: "electronics", price: 1200 },
    { name: "Shirt", category: "clothing", price: 40 },
    { name: "Headphones", category: "electronics", price: 80 },
    { name: "Smartphone", category: "electronics", price: 800 }
  ];
  
  const filteredProducts = products.filter(product => 
    // მასივის გაფილტვრით ყველა ნივთი რომლის კატეგორიაც ელექტრონიკაა და ფასი 100 ზე მეტი 
    product.category === "electronics" && product.price > 100
  );
  
  console.log(filteredProducts);
// აქ შევქმენით გაფილტრული ნივთების საშუალოს შესაკრებად ცვლადი რომელშიც ვიყენებთ რედიუს სადაც გადავცემთ ორ არგუმენტს პირველს,რომელიც ინახავს და მეორე მასივს
  const საშუალო = filteredProducts.reduce((sum, product) => sum + product.price, 0) / filteredProducts.length;
console.log(საშუალო);