let dataGlasses = [];

let layData = () => {
    return axios({
        method: 'get',
        url: 'https://6209b53592946600171c54c7.mockapi.io/Glasse',
    })
}

let btnSanPham = (dataGlasses) => {
    let content = "";
    for (let sp of dataGlasses) {
        let {id,src} = sp;
        content += `
            <img class="col-4 image" style="cursor:pointer" src="${src}" onclick="clickImg(${id})">
        `
    }
    document.getElementById("vglassesList").innerHTML = content;
}

let layDS = () => {
    layData()
    .then((result) => {
        btnSanPham(result.data)
    })
    .catch((error) => {
        console.log(error);
    })
}
layDS();

let setLocal = () => {
    layData()
    .then((result) => {
        let dataGlasses = result.data;
        localStorage.setItem("mangGlass",JSON.stringify(dataGlasses));
    })
    .catch((error) => {
        console.log(error);
    });
    
    if(localStorage.getItem("mangGlass") != null) {
        dataGlasses = JSON.parse(localStorage.getItem("mangGlass"));
    }
}
setLocal();

let glass = "";
let clickImg = (id) => {
    glass = dataGlasses.find(item => {
        return item.id == id;
    })
    // console.log(glass);
    let content = `
        <img src="${glass.virtualImg}">
    `;
    let info = `
        <h1>${glass.name} - ${glass.brand} 
        (${glass.color})</h1>
        <span><p>$${glass.price}</p> Stocking</span>
        <p>$${glass.description}</p>
    `
    document.getElementById("avatar").innerHTML = content;
    document.getElementById("glassesInfo").innerHTML = info;
    document.getElementById("glassesInfo").style.display = "block";
}
window.clickImg = clickImg;

// let hienThiSanPham = () => {
//     let btnContainer = document.getElementById("vglassesList");
//     let btns = document.querySelectorAll(".image");
//     console.log(btns); //btns là 1 kiểu object: chỗ này chưa được làm rõ
    
//     for (let i = 0; i<btns.length; i++) {
//         console.log(i);
//         btns[i].addEventListener("click", function() {
//             let content = "";
//             let info = "";
//             for (let sp of dataGlasses) {
//                 let {id, src, virtualImg, brand, name, color, price, description} = sp;
//                 if(i == id) {
//                     content = `
//                         <img src="${virtualImg}">
//                     `;
//                     info = `
//                         <h1>${name} - ${brand} 
//                         (${color})</h1>
//                         <span><p>$${price}</p> Stocking</span>
//                         <p>$${description}</p>
//                     `
//                 }
//             }
//             // console.log(content);
//             document.getElementById("avatar").innerHTML = content;
//             document.getElementById("glassesInfo").innerHTML = info;
//             document.getElementById("glassesInfo").style.display = "block";
//         });
//     }
// }

// hienThiSanPham();

