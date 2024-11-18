//1
axios
  .get("https://www.episodate.com/api/most-popular?page=1")
  .then(function (response) {
    const imgContainer = document.getElementById("img-container1");
    response.data.tv_shows.slice(0, 20).forEach(function (item) {
      let img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("Scroll");
      imgContainer.appendChild(img);
    });
    setInterval(function () {
      axios
        .get("https://www.episodate.com/api/most-popular?page=1")
        .then(function (response) {
          response.data.tv_shows.slice(0, 20).forEach(function (item) {
            let img = document.createElement("img");
            img.src = item.image_thumbnail_path;
            img.classList.add("Scroll");
            imgContainer.appendChild(img);
          });
        })
        .catch(function (error) {
          if (error === 404) {
            alert("There was an error!!");
          }
        });
    }, 1400);
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });

//2
axios
  .get("https://www.episodate.com/api/most-popular?page=6")
  .then(function (response) {
    const imgContainer = document.getElementById("img-container2");
    response.data.tv_shows.splice(0, 20).forEach(function (item) {
      let img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("Scroll");
      imgContainer.appendChild(img);
    });
    setInterval(function () {
      axios
        .get("https://www.episodate.com/api/most-popular?page=6")
        .then(function (response) {
          response.data.tv_shows.slice(0, 20).forEach(function (item) {
            let img = document.createElement("img");
            img.src = item.image_thumbnail_path;
            img.classList.add("Scroll");
            imgContainer.appendChild(img);
          });
        })
        .catch(function (error) {
          if (error === 404) {
            alert("There was an error!!");
          }
        });
    }, 1400);
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });

//3
axios
  .get("https://www.episodate.com/api/most-popular?page=3")
  .then(function (response) {
    const imgContainer = document.getElementById("img-container3");
    response.data.tv_shows.splice(0, 20).forEach(function (item) {
      let img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("Scroll");
      imgContainer.appendChild(img);
    });
    setInterval(function () {
      axios
        .get("https://www.episodate.com/api/most-popular?page=3")
        .then(function (response) {
          response.data.tv_shows.slice(0, 20).forEach(function (item) {
            let img = document.createElement("img");
            img.src = item.image_thumbnail_path;
            img.classList.add("Scroll");
            imgContainer.appendChild(img);
          });
        })
        .catch(function (error) {
          if (error === 404) {
            alert("There was an error!!");
          }
        });
    }, 1400);
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });

//4
axios
  .get("https://www.episodate.com/api/most-popular?page=4")
  .then(function (response) {
    const imgContainer = document.getElementById("img-container4");
    response.data.tv_shows.splice(0, 20).forEach(function (item) {
      let img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("Scroll");
      imgContainer.appendChild(img);
    });
    setInterval(function () {
      axios
        .get("https://www.episodate.com/api/most-popular?page=4")
        .then(function (response) {
          response.data.tv_shows.slice(0, 20).forEach(function (item) {
            let img = document.createElement("img");
            img.src = item.image_thumbnail_path;
            img.classList.add("Scroll");
            imgContainer.appendChild(img);
          });
        })
        .catch(function (error) {
          if (error === 404) {
            alert("There was an error !!");
          }
        });
    }, 1400);
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
// importebi
import { searchBar } from "./search.js";
searchBar();

import { lognSign } from "./log.sign..js";
lognSign();

import burgerBar from "./burgerbar.js";
burgerBar();

//accordion
let accordionContainers = document.querySelectorAll(".accordion");

accordionContainers.forEach((item) => {
  item.addEventListener("click", function () {
    this.classList.toggle("active");
  });
});
// 3 sliders axios
//1 slider
axios
  .get("http://localhost:3000/products")
  .then(function (response) {
    // const ulresult1 = document.querySelector(".splide__list");
    const result = document.getElementById("slider1");
    response.data.slice(0, 7).forEach(function (item) {
      const divPH = document.createElement("div");
      const name = document.createElement("h1");
      name.textContent = `${item.name}`;
      const date = document.createElement("p");
      date.textContent = `Start/Date: ${item.start_date}`;
      const network = document.createElement("p");
      network.textContent = `Network: ${item.network}`;
      const rating = document.createElement("p");
      rating.textContent = `IMDb RTG: ${item.IMDb_RATING}`;
      //appendChld+class
      divPH.classList.add("divPH");
      name.classList.add("h1SL");
      date.classList.add("pSL");
      network.classList.add("pSL");
      rating.classList.add("pSL");
      //
      divPH.appendChild(name);
      divPH.appendChild(date);
      divPH.appendChild(network);
      divPH.appendChild(rating);
      //
      const li = document.createElement("li");
      li.classList.add("splide__slide");
      const img = document.createElement("img");
      img.classList.add("sliderImg");
      img.src = item.img;
      //event
      li.addEventListener("mouseover", function () {
        divPH.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        divPH.classList.remove("active");
      });
      //append
      li.appendChild(divPH);
      li.appendChild(img);
      result.appendChild(li);
    });
    var splide1 = new Splide(".splide-1", {
      type: "loop",
      perPage: 3,
      perMove: 1,
    });

    splide1.mount();
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//2 slider
axios
  .get("http://localhost:3000/products")
  .then(function (response) {
    // const ulresult1 = document.querySelector(".splide__list");
    const result = document.getElementById("slider2");
    response.data.slice(7, 14).forEach(function (item) {
      const divPH = document.createElement("div");
      const name = document.createElement("h1");
      name.textContent = `${item.name}`;
      const date = document.createElement("p");
      date.textContent = `Start/Date: ${item.start_date}`;
      const network = document.createElement("p");
      network.textContent = `Network: ${item.network}`;
      const rating = document.createElement("p");
      rating.textContent = `IMDb RTG: ${item.IMDb_RATING}`;
      //appendChld+class
      divPH.classList.add("divPH");
      name.classList.add("h1SL");
      date.classList.add("pSL");
      network.classList.add("pSL");
      rating.classList.add("pSL");
      //
      divPH.appendChild(name);
      divPH.appendChild(date);
      divPH.appendChild(network);
      divPH.appendChild(rating);
      //
      const li = document.createElement("li");
      li.classList.add("splide__slide");
      const img = document.createElement("img");
      img.classList.add("sliderImg");
      img.src = item.img;
      //event
      li.addEventListener("mouseover", function () {
        divPH.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        divPH.classList.remove("active");
      });
      //append
      li.appendChild(divPH);
      li.appendChild(img);
      result.appendChild(li);
    });
    var splide2 = new Splide(".splide-2", {
      type: "loop",
      perPage: 3,
      perMove: 1,
    });

    splide2.mount();
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//3 slider
axios
  .get("http://localhost:3000/products")
  .then(function (response) {
    const result = document.getElementById("slider3");
    response.data.slice(14, 21).forEach(function (item) {
      const divPH = document.createElement("div");
      const name = document.createElement("h1");
      name.textContent = `${item.name}`;
      const date = document.createElement("p");
      date.textContent = `Start/Date: ${item.start_date}`;
      const network = document.createElement("p");
      network.textContent = `Network: ${item.network}`;
      const rating = document.createElement("p");
      rating.textContent = `IMDb RTG: ${item.IMDb_RATING}`;
      //appendChld+class
      divPH.classList.add("divPH");
      name.classList.add("h1SL");
      date.classList.add("pSL");
      network.classList.add("pSL");
      rating.classList.add("pSL");
      //
      divPH.appendChild(name);
      divPH.appendChild(date);
      divPH.appendChild(network);
      divPH.appendChild(rating);
      //
      const li = document.createElement("li");
      li.classList.add("splide__slide");
      const img = document.createElement("img");
      img.classList.add("sliderImg");
      img.src = item.img;
      //event
      li.addEventListener("mouseover", function () {
        divPH.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        divPH.classList.remove("active");
      });
      //append
      li.appendChild(divPH);
      li.appendChild(img);
      result.appendChild(li);
    });
    var splide3 = new Splide(".splide-3", {
      type: "loop",
      perPage: 3,
      perMove: 1,
    });

    splide3.mount();
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//seoncd slider
//slider
var splide = new Splide(".splide");
// sliders AnimationS
const boxes = document.querySelectorAll(".splide");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
} //scrollreveal
// rodesac am kods vaimporteb ar imarteba sworad amitom mtavar js shi chavagde es kodi

axios
  .get("https://www.episodate.com/api/most-popular?page=1")
  .then(function (response) {
    const firstImgDv = document.getElementById("firstdv");
    if (response.data && response.data.tv_shows)
      response.data.tv_shows.slice(0, 10).forEach(function (item) {
        const li = document.createElement("li");
        li.classList.add("liscroll");
        const dataDv = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.image_thumbnail_path;
        img.classList.add("scrollimg");
        const name = document.createElement("h1");
        const data = document.createElement("p");
        const country = document.createElement("p");
        const network = document.createElement("p");
        name.textContent = `${item.name}`;
        data.textContent = `Data:${item.start_date}`;
        country.textContent = `Country: ${item.country}`;
        network.textContent = `Network: ${item.network}`;
        dataDv.appendChild(name);
        dataDv.appendChild(data);
        dataDv.appendChild(country);
        dataDv.appendChild(network);
        dataDv.classList.add("datadv");
        data.classList.add("PIMGS");
        country.classList.add("PIMGS");
        network.classList.add("PIMGS");
        name.classList.add("h1IMGS");
        li.addEventListener("mouseover", function () {
          dataDv.classList.add("active");
        });
        li.addEventListener("mouseout", function () {
          dataDv.classList.remove("active");
        });
        li.appendChild(dataDv);
        li.appendChild(img);
        firstImgDv.appendChild(li);
      });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
// middle axxios
axios
  .get("https://www.episodate.com/api/most-popular?page=2")
  .then(function (response) {
    const middledv = document.getElementById("middledv");

    response.data.tv_shows.slice(2, 12).forEach(function (item) {
      const li = document.createElement("li");
      li.classList.add("liscroll");
      const dataDv = document.createElement("div");
      const img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("scrollimg");
      const name = document.createElement("h1");
      const data = document.createElement("p");
      const country = document.createElement("p");
      const network = document.createElement("p");
      name.textContent = `${item.name}`;
      data.textContent = `Data:${item.start_date}`;
      country.textContent = `Country: ${item.country}`;
      network.textContent = `Network: ${item.network}`;
      dataDv.appendChild(name);
      dataDv.appendChild(data);
      dataDv.appendChild(country);
      dataDv.appendChild(network);
      dataDv.classList.add("datadv");
      data.classList.add("PIMGS");
      country.classList.add("PIMGS");
      network.classList.add("PIMGS");
      name.classList.add("h1IMGS");
      li.addEventListener("mouseover", function () {
        dataDv.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        dataDv.classList.remove("active");
      });
      li.appendChild(dataDv);
      li.appendChild(img);

      const randomSize = Math.floor(Math.random() * 3);

      if (randomSize === 0) {
        img.classList.add("small");
      } else if (randomSize === 1) {
        img.classList.add("medium");
      } else {
        img.classList.add("large");
      }

      middledv.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//midleDv2
axios
  .get("https://www.episodate.com/api/most-popular?page=8")
  .then(function (response) {
    const middledv2 = document.getElementById("middledv2");

    response.data.tv_shows.slice(0, 10).forEach(function (item) {
      const li = document.createElement("li");
      li.classList.add("liscroll");
      const imgIcon = document.createElement("img");
      imgIcon.src = photoData;
      const dataDv = document.createElement("div");
      const img = document.createElement("img");

      img.src = item.image_thumbnail_path;
      img.classList.add("scrollimg");
      const name = document.createElement("h1");
      const data = document.createElement("p");
      const country = document.createElement("p");
      const network = document.createElement("p");
      name.textContent = `${item.name}`;
      data.textContent = `Data:${item.start_date}`;
      country.textContent = `Country: ${item.country}`;
      network.textContent = `Network: ${item.network}`;
      dataDv.appendChild(name);
      dataDv.appendChild(data);
      dataDv.appendChild(country);
      dataDv.appendChild(network);
      dataDv.classList.add("datadv");
      data.classList.add("PIMGS");
      country.classList.add("PIMGS");
      network.classList.add("PIMGS");
      name.classList.add("h1IMGS");
      li.addEventListener("mouseover", function () {
        dataDv.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        dataDv.classList.remove("active");
      });
      li.appendChild(dataDv);
      li.appendChild(img);

      const randomSize = Math.floor(Math.random() * 3);

      if (randomSize === 0) {
        img.classList.add("small");
      } else if (randomSize === 1) {
        img.classList.add("medium");
      } else {
        img.classList.add("large");
      }

      middledv2.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//middlDv3
axios
  .get("https://www.episodate.com/api/most-popular?page=3")
  .then(function (response) {
    const middledv3 = document.getElementById("middledv3");

    response.data.tv_shows.slice(5, 20).forEach(function (item) {
      const li = document.createElement("li");
      li.classList.add("liscroll");
      const dataDv = document.createElement("div");
      const img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("scrollimg");
      const name = document.createElement("h1");
      const data = document.createElement("p");
      const country = document.createElement("p");
      const network = document.createElement("p");
      name.textContent = `${item.name}`;
      data.textContent = `Data:${item.start_date}`;
      country.textContent = `Country: ${item.country}`;
      network.textContent = `Network: ${item.network}`;
      dataDv.appendChild(name);
      dataDv.appendChild(data);
      dataDv.appendChild(country);
      dataDv.appendChild(network);
      dataDv.classList.add("datadv");
      data.classList.add("PIMGS");
      country.classList.add("PIMGS");
      network.classList.add("PIMGS");
      name.classList.add("h1IMGS");
      li.addEventListener("mouseover", function () {
        dataDv.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        dataDv.classList.remove("active");
      });
      li.appendChild(dataDv);
      li.appendChild(img);
      const randomSize = Math.floor(Math.random() * 3);

      if (randomSize === 0) {
        img.classList.add("small");
      } else if (randomSize === 1) {
        img.classList.add("medium");
      } else {
        img.classList.add("large");
      }

      middledv3.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//middlDv4
axios
  .get("https://www.episodate.com/api/most-popular?page=4")
  .then(function (response) {
    const middledv4 = document.getElementById("middledv4");

    response.data.tv_shows.slice(1, 11).forEach(function (item) {
      const li = document.createElement("li");
      li.classList.add("liscroll");
      const dataDv = document.createElement("div");
      const img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("scrollimg");
      const name = document.createElement("h1");
      const data = document.createElement("p");
      const country = document.createElement("p");
      const network = document.createElement("p");
      name.textContent = `${item.name}`;
      data.textContent = `Data:${item.start_date}`;
      country.textContent = `Country: ${item.country}`;
      network.textContent = `Network: ${item.network}`;
      dataDv.appendChild(name);
      dataDv.appendChild(data);
      dataDv.appendChild(country);
      dataDv.appendChild(network);
      dataDv.classList.add("datadv");
      data.classList.add("PIMGS");
      country.classList.add("PIMGS");
      network.classList.add("PIMGS");
      name.classList.add("h1IMGS");
      li.addEventListener("mouseover", function () {
        dataDv.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        dataDv.classList.remove("active");
      });
      li.appendChild(dataDv);
      li.appendChild(img);
      const randomSize = Math.floor(Math.random() * 3);

      if (randomSize === 0) {
        img.classList.add("small");
      } else if (randomSize === 1) {
        img.classList.add("medium");
      } else {
        img.classList.add("large");
      }

      middledv4.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//middlDv4
axios
  .get("https://www.episodate.com/api/most-popular?page=5")
  .then(function (response) {
    const middledv5 = document.getElementById("middledv5");

    response.data.tv_shows.slice(0, 10).forEach(function (item) {
      const li = document.createElement("li");
      li.classList.add("liscroll");
      const dataDv = document.createElement("div");
      const img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("scrollimg");
      const name = document.createElement("h1");
      const data = document.createElement("p");
      const country = document.createElement("p");
      const network = document.createElement("p");
      name.textContent = `${item.name}`;
      data.textContent = `Data:${item.start_date}`;
      country.textContent = `Country: ${item.country}`;
      network.textContent = `Network: ${item.network}`;
      dataDv.appendChild(name);
      dataDv.appendChild(data);
      dataDv.appendChild(country);
      dataDv.appendChild(network);
      dataDv.classList.add("datadv");
      data.classList.add("PIMGS");
      country.classList.add("PIMGS");
      network.classList.add("PIMGS");
      name.classList.add("h1IMGS");
      li.addEventListener("mouseover", function () {
        dataDv.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        dataDv.classList.remove("active");
      });
      li.appendChild(dataDv);
      li.appendChild(img);
      const randomSize = Math.floor(Math.random() * 3);

      if (randomSize === 0) {
        img.classList.add("small");
      } else if (randomSize === 1) {
        img.classList.add("medium");
      } else {
        img.classList.add("large");
      }

      middledv5.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
// lastimgdv
axios
  .get("https://www.episodate.com/api/most-popular?page=7")
  .then(function (response) {
    const lastdv = document.getElementById("lastdv");

    response.data.tv_shows.slice(0, 15).forEach(function (item) {
      const li = document.createElement("li");
      li.classList.add("liscroll");
      const dataDv = document.createElement("div");
      const img = document.createElement("img");
      img.src = item.image_thumbnail_path;
      img.classList.add("scrollimg");
      const name = document.createElement("h1");
      const data = document.createElement("p");
      const country = document.createElement("p");
      const network = document.createElement("p");
      name.textContent = `${item.name}`;
      data.textContent = `Data:${item.start_date}`;
      country.textContent = `Country: ${item.country}`;
      network.textContent = `Network: ${item.network}`;
      dataDv.appendChild(name);
      dataDv.appendChild(data);
      dataDv.appendChild(country);
      dataDv.appendChild(network);
      dataDv.classList.add("datadv");
      data.classList.add("PIMGS");
      country.classList.add("PIMGS");
      network.classList.add("PIMGS");
      name.classList.add("h1IMGS");
      li.addEventListener("mouseover", function () {
        dataDv.classList.add("active");
      });
      li.addEventListener("mouseout", function () {
        dataDv.classList.remove("active");
      });
      li.appendChild(dataDv);
      li.appendChild(img);

      const randomSize = Math.floor(Math.random() * 3);

      if (randomSize === 0) {
        img.classList.add("small");
      } else if (randomSize === 1) {
        img.classList.add("medium");
      } else {
        img.classList.add("large");
      }

      lastdv.appendChild(li);
    });
  })
  .catch(function (error) {
    if (error === 404) {
      alert("There was an error fetching data.");
    }
  });
//scroll
ScrollReveal().reveal("#imgs");
ScrollReveal({ reset: true });
ScrollReveal().reveal(".headlines", { delay: 150 });
ScrollReveal().reveal(".middleline1", { delay: 250 });
ScrollReveal().reveal(".middleline2", { delay: 250 });
ScrollReveal().reveal(".middleline3", { delay: 250 });
ScrollReveal().reveal(".middleline4", { delay: 250 });
ScrollReveal().reveal(".middleline5", { delay: 250 });
ScrollReveal().reveal(".lastline", { delay: 150 });
//backToTop
var btnBack2Top = document.querySelector(".btn-back2top");

window.addEventListener("scroll", function () {
  var scrolledOffset = window.pageYOffset;

  if (scrolledOffset > 500) {
    btnBack2Top.classList.add("show");
  } else {
    btnBack2Top.classList.remove("show");
  }
});

btnBack2Top.addEventListener("click", scrollToTop);
function scrollToTop() {
  if (window.pageYOffset > 0) {
    window.scrollBy(0, -80);
    setTimeout(scrollToTop, 2);
  }
}
//
