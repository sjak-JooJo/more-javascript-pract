const products = [
    {name: 'asuss laptop', price:45000},
    {name: 'apple watch', price:95000},
    {name: 'smart watch', price:95000},
    {name: 'samsung watch', price:55000},
    {name: 'microsoft laptop', price:40000},
    {name: 'hp laptop', price:55000},
    {name: 'iphone 14', price:115000},
    {name: 'one plus phone 4', price:25000},
];

function searchProducts(products, searchText){
    const result = [];
    for(const product of products){
        if(product.name.includes(searchText)){
            result.push(product);
        }
        
    }
    return result;
}

const matched = searchProducts(products, 'phone');
console.log(matched);