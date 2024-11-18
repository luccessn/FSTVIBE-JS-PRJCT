export function scrollReveal() {
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
  // lastimgdv
  axios
    .get("https://www.episodate.com/api/most-popular?page=5")
    .then(function (response) {
      const lastdv = document.getElementById("lastdv");

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
  ScrollReveal().reveal(".headlines", { delay: 250 });
  ScrollReveal().reveal(".middleline1", { delay: 250 });
  ScrollReveal().reveal(".middleline2", { delay: 250 });
  ScrollReveal().reveal(".middleline3", { delay: 250 });
  ScrollReveal().reveal(".middleline4", { delay: 250 });
  ScrollReveal().reveal(".lastline", { delay: 250 });
}
