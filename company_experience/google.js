class InMemorySearch {
  constructor() {
    this.data = {};
  }

  addDocuments = (name, ...args) => {
    //  this.data ={
    //      ...this.data,
    //      [name] : args,
    //  }
    // this.data[name] = [(this.data];
    if (!this.data[name]) {
      this.data[name] = [];
    }
    this.data[name].push(...args);
  };

  search = (name, cb, sortBy) => {
    if (this.data[name]) {
      let res = this.data[name].filter((item) => cb(item));
      if (sortBy.asc === true) {
        res.sort((a, b) => a[sortBy.key] - b[sortBy.key]);
      } else {
        res.sort((a, b) => b[sortBy.key] - a[sortBy.key]);
      }
      return res;
    }
  };
}

const searchEngine = new InMemorySearch();

searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

searchEngine.addDocuments(
  "Movies",
  { name: "Avenger", rating: 8.5, year: 2017 },
  { name: "Black Adam", rating: 8.7, year: 2022 },
  { name: "Jhon Wick 4", rating: 8.2, year: 2023 },
  { name: "Black Panther", rating: 9.0, year: 2022 }
);

console.log(
  searchEngine.search("Movies", (e) => e.rating > 8.5, {
    key: "rating",
    asc: false,
  })
);

// Output
/*
  [
    {
      "name": "Black Panther",
      "rating": 9,
      "year": 2022
    },
    {
      "name": "Black Adam",
      "rating": 8.7,
      "year": 2022
    }
  ]
  */
