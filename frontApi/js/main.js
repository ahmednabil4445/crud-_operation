const baseURL = 'http://localhost:3000'
// start Display data
let products = []
function getData() {
    axios({
        method: 'get',
        url: `${baseURL}/products`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message, result } = response.data
        products = result
        showData()
    }).catch(function (error) {
        console.log(error);
    });
}
getData()
function showData() {
    let cartonna = ``
    console.log(products);
    for (let index = 0; index < products.length; index++) {
        cartonna += `  <tr>
           <td>${products[index].name}</td>
           <td>${products[index].price}</td>
           <td>${products[index].description}</td>
           <td>
           <button onclick='deleteItem(${products[index].P_ID})' class="btn btn-danger">Delete</button>
           <button onclick='updateItem(${products[index].P_ID})' class="btn btn-success">Update</button>
    
           </td>
       </tr>`

    }
    document.getElementById('tbody').innerHTML = cartonna
}
// End Display data

//create product with 
$("#addProduct").click(() => {
    const data = {
        name: $("#name").val(),
        price: $("#price").val(),
        description: $("#description").val(),
        userID: localStorage.getItem("userID")
    }
    console.log(data);

    axios({
        method: 'post',
        url: `${baseURL}/product`,
        data,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("added success")
            getData()
        } else {
            alert("Fail to add your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
})


//delete product with id
function deleteItem(id){

    axios({
        method: 'delete',
        url: `${baseURL}/product/${id}`,
        headers: { 'Content-Type': 'application/json; charset=UTF-8' }
    }).then(function (response) {
        const { message } = response.data
        if (message == "Done") {
            alert("Deleted successfully")
            getData()
        } else {
            alert("Fail to Delete your product")
        }
    }).catch(function (error) {
        console.log(error);
    });
}
// redirect to update product page
function updateItem(id){
    localStorage.setItem("productID" ,id)  
    window.location.replace("C:/Users/Ahmed Nabil/Desktop/f/frontApi/update.html");   
}
