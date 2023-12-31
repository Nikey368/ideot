export default {
    search: function (searchTerm, searchLimit, sortBy) {
      // fetch api of reddit
      return (
        fetch(
          `https://www.reddit.com/search.json?q=${searchTerm}&t=day&sort=${sortBy}&limit=${searchLimit}`
        )
          .then((res) => res.json())
          .then((data) => data.data.children.map((data) => data.data))
          // to get error
          .catch((err) => console.log(err))
      );
    },
  };