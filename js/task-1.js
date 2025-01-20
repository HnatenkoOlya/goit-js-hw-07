const itemCategories = document.querySelectorAll("#categories .item");
 console.log(`Number of categories: ${itemCategories.length}`);

//const items = document.querySelectorAll(".item");
//const titles = document.querySelectorAll(".title");

itemCategories.forEach((item) => {
    const title = item.querySelector(".title").textContent;
    const liCount = item.querySelectorAll("ul li").length;
    console.log(`Category: ${title}`);
    console.log(`Elements: ${liCount}`);
});

//items.forEach((item, title) => {
  //  return item.title;})
