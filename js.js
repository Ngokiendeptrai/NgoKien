let dataList = [
  {
    ID: 1,
    name : "Giày MLB Chunky Liner Mid Classic Monogram New York Yankees Black",
    price : "4.290.000",
    origin : "KOREA",
    image: "img/giay1.webp",
    masanpham: "3ASXLM13N-50BKS",
    xuatxu: "MLB-VietNam",
  },
  {
      ID: 2,
      name: "Giày MLB Chunky Liner Mid Classic Monogram Boston Red Sox L.Beige",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay2.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
    {
      ID: 3,
      name: "Giày MLB Chunky Liner Candy Pop Pink Boston Red Sox",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay3.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
    {	
      ID: 4,
      name: "Giày MLB Chunky Liner Piano Black New York Yankees",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay4.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
    {	
      ID: 5,
      name: "Giày MLB Chunky Liner Piano Black New York Yankees",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay5.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
    {	
      ID: 6,
      name: "Giày MLB Chunky Liner Piano Black New York Yankees",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay6.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
    {	
      ID: 7,
      name: "Giày MLB Chunky Liner Piano Black New York Yankees",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay7.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
    {	
      ID: 8,
      name: "Giày MLB Chunky Liner Piano Black New York Yankees",
      price: "4.290.000",
      origin : "KOREA",
      image: "img/giay8.webp",
      masanpham: "3ASXLM13N-50BKS",
      xuatxu: "MLB-VietNam",
    },
];



console.log(dataList);
console.log(dataList[0].ID);
for (let i = 0; i < dataList.length; i++) {
  console.log(
    `ID: ${dataList[i].ID}, Tên: ${dataList[i].name}, Xuất xứ: ${dataList[i].origin}, Hình ảnh: ${dataList[i].image}, Mã sản phẩm: ${dataList[i].masanpham}, Xuất xứ: ${dataList[i].xuatxu}`
  );
}
function getData() {
  let htmlproduct = ``;
  for (let i = 0; i < dataList.length; i++) {
    htmlproduct += `
      <div class="product">
        <a href="giay1.html?ID=${dataList[i].ID}">
          <img src="${dataList[i].image}" alt="${dataList[i].name}">
          <div class="product-info">
            <h3>${dataList[i].xuatxu}</h3>
            <p>${dataList[i].name}</p>
            <b>${dataList[i].price}</b>
          </div>
        </a>
      </div>
    `;
  }
  document.getElementById("product").innerHTML = htmlproduct;
} 
getData();



