export function searchBar() {
  const searchInput = document.getElementById("searchBar-input");
  const ulFilter = document.getElementById("ul-filter-result");
  const resultulDv = document.querySelector(".resultulDv");
  const searchFiltr = document.getElementById("searchFiltr");
  const searchbarIcon = document.getElementById("searchbar-icon");
  const closeIcon = document.getElementById("searchbar-close");
  const body = document.getElementById("body");
  searchbarIcon.addEventListener("click", function () {
    searchFiltr.classList.add("active");
    body.classList.add("hideY");
  });
  closeIcon.addEventListener("click", function () {
    searchFiltr.classList.remove("active");
    body.classList.remove("hideY");
  });
  let list = [];
  async function asyncFilt() {
    let totalPages = 6;
    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(
        `https://www.episodate.com/api/most-popular?page=${page}`
      );
      try {
        if (!response.ok) {
          throw new Error("CannT Find");
        }
        const cmbck = await response.json();
        cmbck.tv_shows.forEach(function (element) {
          const li = document.createElement("li");
          li.classList.add("filter-li");
          const p = document.createElement("p");
          p.classList.add("filter-p");
          p.textContent = `${element.name}`;
          const img = document.createElement("img");
          img.src = element.image_thumbnail_path;
          img.classList.add("filter-img");
          //
          //
          li.appendChild(p);
          li.appendChild(img);

          list.push(li);
          // ulFilter.appendChild(li);
        });
        renderList();
      } catch (error) {
        if (error === 404) {
          alert("There was an error fetching data.");
        }
      }
    }
  }
  asyncFilt();
  function renderList() {
    ulFilter.innerHTML = "";
    list.forEach(function (li) {
      ulFilter.appendChild(li);
    });
    resultulDv.classList.add("active");
  }

  function filtr(search) {
    if (search.trim() === "") {
      ulFilter.innerHTML = "";
      list = [];
      asyncFilt();
      resultulDv.classList.remove("active");
    } else {
      list.forEach(function (item) {
        if (
          item.innerText
            .toLowerCase()
            .trim()
            .includes(search.toLowerCase().trim())
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
      resultulDv.classList.add("active");
    }
  }

  searchInput.addEventListener("keyup", function () {
    filtr(this.value);
    document.getElementById("body").classList.add("hidden");
    resultulDv.classList.add("active");
    // if (searchInput.value === "") {
    //   ulFilter.innerHTML = "";
    //   list = [];

    //   resultulDv.classList.remove("active");
    //   document.getElementById("body").classList.remove("hidden");
    // }
  });

  // document.addEventListener("click", function () {
  //   searchInput.value = "";
  //   ulFilter.innerHTML = "";
  //   list = [];

  //   resultulDv.classList.remove("active");
  //   document.getElementById("body").classList.remove("hidden");
  // });

  //
  //
}
