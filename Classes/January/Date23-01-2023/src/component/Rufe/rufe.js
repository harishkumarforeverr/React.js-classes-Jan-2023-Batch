const name = "ssddwedgghsbshttt";

  // expected Outpiut ==>
  const expectedObj = {
    s: 2,
    d: 2,
    g: 2,
    t: 3,
  };
  const obj = name.split("").reduce(
    (prev, acc, index) => {
      console.log(prev, acc);
      const myObj = {};
      if (acc == prev.current) {
        myObj[acc] = (prev[acc] || 0) + 1;
      }
      return {
        ...prev,
        current: acc,
        ...myObj,
      };
    },
    { current: name[0] }
  );


    // const obj = [
  //   {
  //     name: "harish",
  //     role: "react.js",
  //     salary: 21,
  //   },
  //   {
  //     name: "shiva",
  //     role: "angular.js",
  //     salary: 21,
  //   },
  //   {
  //     name: "kalyan",
  //     role: "react.js",
  //     salary: 21,
  //   },
  //   {
  //     name: "chandana",
  //     role: "javascript.js",
  //     salary: 21,
  //   },
  //   {
  //     name: "rao",
  //     role: "angular.js",
  //     salary: 21,
  //   },
  //   {
  //     name: "sharayana",
  //     role: "javascript.js",
  //     salary: 21,
  //   },
  // ];
