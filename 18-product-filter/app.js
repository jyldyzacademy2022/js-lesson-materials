const products = [
  {
    id: 1,
    title: "Phone 1",
    category: "phones",
    img: "https://www.kivano.kg/images/product/40544/40544_full.jpg",
    price: 4561321,
    desc: 'смартфон, Android 6.0 поддержка двух SIM-карт экран 5", разрешение 1280x720 камера 8 МП память 8 Гб, слот для карты памяти 3G, Wi-Fi, Bluetooth, GPS объем оперативной памяти 1 Гб аккумулятор 2500 мА⋅ч вес 152 г, ШxВxТ 70x142x8.20 мм',
  },
  {
    id: 2,
    title: "TV 1",
    category: "tv",
    img: "https://www.kivano.kg/images/product/99876/full/1635932704_96809000.jpg",
    price: 4561321,
    desc: 'смартфон, Android 6.0 поддержка двух SIM-карт экран 5", разрешение 1280x720 камера 8 МП память 8 Гб, слот для карты памяти 3G, Wi-Fi, Bluetooth, GPS объем оперативной памяти 1 Гб аккумулятор 2500 мА⋅ч вес 152 г, ШxВxТ 70x142x8.20 мм',
  },
  {
    id: 2,
    title: "hello",
    category: "hello",
    img: "https://www.kivano.kg/images/product/99876/full/1635932704_96809000.jpg",
    price: 4561321,
    desc: 'смартфон, Android 6.0 поддержка двух SIM-карт экран 5", разрешение 1280x720 камера 8 МП память 8 Гб, слот для карты памяти 3G, Wi-Fi, Bluetooth, GPS объем оперативной памяти 1 Гб аккумулятор 2500 мА⋅ч вес 152 г, ШxВxТ 70x142x8.20 мм',
  },
];

window.addEventListener("load", function () {
  const productsInner = document.querySelector(".products__inner");
  const filtersContainer = document.querySelector(".products__filters");

  displayProductsItems(products);
  displayFilterBtns();

  function displayProductsItems(products) {
    let displayProducts = products.map(function (item) {
      return `
        <article class="products__item">
          <img src="${item.img}">
          <div class="products__item-info">
            <h3>${item.title}</h3>
            <span>${item.price}</span>
            <p><h3>${item.desc}</h3></p>
          </div>
        </atticle>
      `;
    });

    displayProducts = displayProducts.join("");
    productsInner.innerHTML = displayProducts;
  }

  function displayFilterBtns() {
    const categories = products.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }

        return values;
      },
      ["all"]
    );

    const categoryBtns = categories
      .map((cat) => {
        return `
      <button class="products__filters-btn" type="button" data-cat="${cat}">
        ${cat}
      </button>
    `;
      })
      .join("");

    filtersContainer.innerHTML = categoryBtns;
    const filterBtns = document.querySelectorAll(".products__filters-btn");

    filterBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const category = e.currentTarget.dataset.cat;
        const productCategory = products.filter((item) => {
          if (item.category === category) {
            return item;
          }
        });

        if (category === "all") {
          displayProductsItems(products);
        } else {
          displayProductsItems(productCategory);
        }
      });
    });
  }
});
