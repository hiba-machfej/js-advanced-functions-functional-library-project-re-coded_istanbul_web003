const fi = (function () {
  return {
    libraryMethod: function () {
      return "Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0";
    },

    each: function (collection, alert) {
      for (const el in collection) {
        alert(collection[el]);
      }
      return collection;
    },

    map: function (collection, callback) {
      const array = [];
      for (const el in collection) {
        array.push(callback(collection[el]));
      }
      return array;
    },

    reduce: function (collection, callback, acc) {
      if (acc === undefined) {
        return collection.reduce(callback);
      } else {
        return collection.reduce(callback, acc);
      }
    },

    find: function (collection, predicate) {
      for (const el in collection) {
        if (predicate(collection[el]) === true) {
          return collection[el];
        }
      }
    },

    filter: function (collection, predicate) {
      const array2 = [];
      for (const el in collection) {
        if (predicate(collection[el]) === true) {
          array2.push(collection[el]);
        }
      }
      return array2;
    },

    size: function (collection) {
      return Object.keys(collection).length;
    },

    first: function (array, n) {
      if (n === undefined) {
        return array[0];
      } else {
        return array.slice(0, n);
      }
    },

    last: function (array, n) {
      if (n === undefined) {
        return array[array.length - 1];
      } else {
        return array.slice(array.length - n);
      }
    },

    compact: function (array) {
      const array2 = [];
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          array2.push(array[i]);
        }
      }
      return array2;
    },

    sortBy: function (array, callback) {
      return [...array].sort(function (a, b) {
        return callback(a) - callback(b);
      });
    },

    // flatten: function (array, shallow) {
    //   if (shallow) {
    //     return array.flatten(array, true);
    //   } else {
    //     return array.flatten(array);
    //   }
    // },

    flatten: function(array, shallow) {
      let newArray = [];
      if (!!shallow) {
        newArray = array.flat();
      } else {
       newArray= array.flat(3)
      }
      return newArray
    },

    uniq: function (array, isSorted, callback) {
      let newArray = [];
      if (!callback) {
        return [...new Set(array)];
      } else {
        let arr = [...array].map((element) => callback(element));
        newArray = array.filter(
          (value, index) => arr.indexOf(callback(value)) === index
        );
        return newArray;
      }
    },

    keys: function (obj) {
      return Object.keys(obj);
    },

    values: function (obj) {
      return Object.values(obj);
    },

    functions: function (fi) {
      let newArr = [];
      for (let i in fi) {
        if (typeof fi[i] == "function") {
          newArr.push(fi[i]);
        }
      }
      newArr.sort();
      return newArr;
    },
  };
})();

fi.libraryMethod();
