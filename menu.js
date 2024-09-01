var product = [
    {
        id: 1,
        img: "image/allMenu/Food/steak.png",
        name: "Steak",
        price: 99,
        type: "Food",
    },

    {
        id: 2,
        img: "image/allMenu/Food/salmon.png",
        name: "Salmon Fettucini",
        price: 99,
        type: "Food",
    },

    {
        id: 3,
        img: "image/allMenu/Food/pizza.png",
        name: "Pizza",
        price: 49,
        type: "Food",
    },
    {
        id: 4,
        img: "image/allMenu/Food/mealtBallPasta.png",
        name: "Meatballs Pasta",
        price: 59,
        type: "Food",
    },
    {
        id: 5,
        img: "image/allMenu/Food/maggaroni.png",
        name: "Macaroni",
        price: 59,
        type: "Food",
    },
    {
        id: 6,
        img: "image/allMenu/Food/Ham.png",
        name: "Hamburger",
        price: 39,
        type: "Food",
    },
    {
        id: 7,
        img: "image/allMenu/Drink/greentea.png",
        name: "Green Tea",
        price: 29,
        type: "Drink",
    },
    {
        id: 8,
        img: "image/allMenu/Dessert/croffle.png",
        name: "Croffle",
        price: 35,
        type: "Dessert",
    },
    {
        id: 9,
        img: "image/allMenu/Dessert/donat.png",
        name: "Donat",
        price: 19,
        type: "Dessert",
    },{
        id: 10,
        img: "image/allMenu/Drink/coco.png",
        name: "Coco",
        price: 29,
        type: "Drink",
    },
    {
        id: 11,
        img: "image/allMenu/Drink/chaThai.png",
        name: "Thai Tea",
        price: 29,
        type: "Drink",
    },
    
]

$(document).ready(() => {
    var html = '';
    for (let i = 0; i < product.length; i++) {
        html += `<div class="menu-item${product[i].type}">
                            <img src="${product[i].img} ">
                            <h1>${product[i].name}</h1>
                            <p>${product[i].price}$</p>
                        </div>`;

    }

    $("#productlist").html(html);


})


function searchMenu() {
    var searchQuery = document.getElementById('searchBox').value.toLowerCase();
    var filteredProducts = product.filter(function (item) {
        return item.name.toLowerCase().includes(searchQuery);
    });

    var html = '';
    for (var i = 0; i < filteredProducts.length; i++) {
        html += `<div class="menu-item" >
                    <img src="${filteredProducts[i].img}" class="img-product" alt="${filteredProducts[i].name}">
                    <h1>${filteredProducts[i].name}</h1>
                    <p>${filteredProducts[i].price}$</p>
                 </div>`;
    }

    document.getElementById('productlist').innerHTML = html;
}





// Event listener สำหรับกด Enter ใน searchBox
document.getElementById('searchBox').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        searchMenu(); // เรียกใช้ฟังก์ชัน searchMenu
    }
});
document.getElementById('searchBox').addEventListener('keypress', function (event) {
    console.log("Key pressed: " + event.key); // เพิ่มบรรทัดนี้เพื่อเช็คว่า event listener ทำงานหรือไม่
    if (event.key === 'Enter') {
        searchMenu(); // เรียกใช้ฟังก์ชัน searchMenu
    }
});



function filterMenu(type) {
    var filteredProducts;

    if (type === "All") {
        // ถ้ากดปุ่ม "All" จัดเรียงเมนูตามลำดับประเภท: Food, Dessert, Drink
        var order = ["Food", "Dessert", "Drink"];
        filteredProducts = product.sort(function (a, b) {
            return order.indexOf(a.type) - order.indexOf(b.type);
        });
    } else {
        // ถ้ากดปุ่มอื่นๆ จะแสดงเฉพาะเมนูที่ตรงกับประเภทที่เลือก
        filteredProducts = product.filter(function (item) {
            return item.type === type;
        });
    }

    // สร้าง HTML สำหรับรายการเมนูที่กรองแล้ว
    var html = '';
    for (var i = 0; i < filteredProducts.length; i++) {
        html += `<div class="menu-item">
                        <img src="${filteredProducts[i].img}" class="img-product" alt="${filteredProducts[i].name}">
                        <h1>${filteredProducts[i].name}</h1>
                        <p>${filteredProducts[i].price}$</p>
                     </div>`;
    }

    // อัปเดตเนื้อหาใน div ที่มี id="productlist" ด้วย HTML ที่สร้างขึ้น
    document.getElementById('productlist').innerHTML = html;
}





function displayInitialMenu() {
    var order = ["Food", "Dessert", "Drink"];

    // จัดเรียงเมนูตามลำดับที่กำหนดไว้
    var sortedProducts = product.sort(function(a, b) {
        return order.indexOf(a.type) - order.indexOf(b.type);
    });

    var html = '';
    for (var i = 0; i < sortedProducts.length; i++) {
        html += `<div class="menu-item">
                    <img src="${sortedProducts[i].img}" class="img-product" alt="${sortedProducts[i].name}">
                    <h1>${sortedProducts[i].name}</h1>
                    <p>${sortedProducts[i].price}$</p>
                 </div>`;
    }

    // แสดงเมนูที่จัดเรียงแล้วใน div ที่มี id="productlist"
    document.getElementById('productlist').innerHTML = html;
}
document.addEventListener('DOMContentLoaded', function() {
    displayInitialMenu(); // เรียกใช้ฟังก์ชันแสดงเมนูเมื่อหน้าเว็บโหลด
});