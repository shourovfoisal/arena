/**
 * Source: https://www.youtube.com/watch?v=hZ9WUyn2bvI
 * Array flatMap() method in JavaScript! - New in Chrome Update 69
 * This video shows map(), flat(), and flatMap()
 */

export const flat = () => {
  const pairs = [1, 2, , [], [5], [10, 20], [30, 40, [50, 60]]];

  console.log("original");
  console.log(pairs);
  console.log("");

  // flat(0) only removes empty values
  console.log("flat(0)");
  console.log(pairs.flat(0));
  console.log("");

  // flat() without any arguments equals to flat(1)
  console.log("flat()");
  console.log(pairs.flat());
  console.log("");

  // flat(1) merges level 1 arrays
  console.log("flat(1)");
  console.log(pairs.flat(1));
  console.log("");

  // flat(2) and higher merges level 2 and later nested arrays
  console.log("flat(2)");
  console.log(pairs.flat(2));
  console.log("");

  // flat(-1) and lower acts as flat(0)
  console.log("flat(-1)");
  console.log(pairs.flat(-1));
  console.log("");
};

export const flatWithObjects = () => {
  const array = [
    {
      id: 7,
      label: "Media & Technologies",
      checked: false,
      options: [
        {
          id: 10,
          label: "Computer",
          checked: false,
          isPopular: false,
        },
        {
          id: 11,
          label: "Telephone",
          checked: false,
          isPopular: false,
        },
        {
          id: 12,
          label: "Printer",
          checked: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 10,
      label: "Indoor Entertainment",
      checked: false,
      options: [
        {
          id: 7,
          label: "Book",
          checked: false,
          isPopular: false,
        },
        {
          id: 8,
          label: "Table Tennis",
          checked: false,
          isPopular: false,
        },
        {
          id: 9,
          label: "Darts",
          checked: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 12,
      label: "Business Facilities",
      checked: false,
      options: [
        {
          id: 13,
          label: "Auditorium",
          checked: false,
          isPopular: false,
        },
        {
          id: 14,
          label: "Conference Hostess",
          checked: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 13,
      label: "General",
      checked: false,
      options: [
        {
          id: 4,
          label: "Air Conditioning",
          checked: false,
          isPopular: false,
        },
        {
          id: 5,
          label: "Elevator",
          checked: false,
          isPopular: false,
        },
        {
          id: 6,
          label: "Sofa Bed",
          checked: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 16,
      label: "Food and Drink",
      checked: false,
      options: [
        {
          id: 1,
          label: "Buffet Lunch",
          checked: false,
          isPopular: false,
        },
        {
          id: 2,
          label: "Buffet Dinner",
          checked: false,
          isPopular: false,
        },
        {
          id: 3,
          label: "Menu Lunch",
          checked: false,
          isPopular: false,
        },
      ],
    },
    {
      id: 22,
      label: "sdfsdf",
      checked: false,
      options: [],
    },
  ];

  const unifiedOptions = array.flatMap((category) => category.options);

  console.log(unifiedOptions);
};
