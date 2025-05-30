// 작품 소개
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/text_box1.txt");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.querySelector(".text_box1 p").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

// 출판사 서평 :::::::::
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/text_box3.txt");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.querySelector(".text_box3 p").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});

// 작가 소개 :::::::::::::::::::::
document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("./text/text_box2-2.txt");
        
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.text();
        document.querySelector(".text_box2-2 p").innerHTML = data;
    } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
    }
});