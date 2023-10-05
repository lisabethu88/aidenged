export const mathLessons = [
  {
    id: 1,
    subject: "math",
    title: "Absolute Value",
    introduction:
      "Absolute value is a mathematical concept that represents the distance of a number from zero on the number line. It is always a positive value, regardless of the sign of the number.",
    mainPoints:
      "1. Absolute value is denoted by two vertical bars surrounding a number, e.g., |x|.\n2. The absolute value of a positive number is the number itself.\n3. The absolute value of a negative number is its positive counterpart.\n4. The absolute value of zero is zero.",
    exampleProblems: [
      "Find the absolute value of -5.",
      "Calculate |12|.",
      "If |x| = 7, what are the possible values of x?",
    ],
  },
  {
    id: 2,
    subject: "math",
    title: "Order of Operations",
    introduction:
      "The order of operations is a set of rules used to determine the sequence in which mathematical operations should be performed in a given expression or equation.",
    mainPoints:
      "1. The order of operations is often remembered using the acronym PEMDAS: Parentheses, Exponents, Multiplication and Division (from left to right), Addition and Subtraction (from left to right).\n2. Operations enclosed in parentheses should be performed first.\n3. Exponents should be calculated next.\n4. Multiplication and division should be performed from left to right.\n5. Addition and subtraction should be performed from left to right.",
    exampleProblems: [
      "Evaluate: 3 + (5 × 2).",
      "Simplify: 4² ÷ (2 + 2).",
      "Calculate: 6 - 2(4 + 1).",
    ],
  },
  {
    id: 3,
    subject: "math",
    title: "Ratios",
    introduction:
      "Ratios are a way of comparing two or more quantities. They are often expressed as fractions and can be used to describe relationships between different types of quantities.",
    mainPoints:
      "1. Ratios can be written in different forms, such as a:b, a/b, or a to b.\n2. Ratios should be simplified to their simplest form.\n3. Ratios can represent various relationships, such as part-to-part, part-to-whole, or whole-to-part.\n4. Proportions are equations that express equal ratios.\n5. Cross-multiplication is a method used to solve proportions.",
    exampleProblems: [
      "Express the ratio of cats to dogs as a fraction if there are 12 cats and 18 dogs.",
      "If a recipe calls for 3 cups of water and 5 cups of flour, express the ratio of water to flour.",
      "Simplify the ratio 6:12.",
    ],
  },
];

export const mathQuizzes = [
  {
    lessonId: 1,
    questions: [
      {
        id: 1,
        question: "What is the absolute value of -7?",
        options: ["-7", "0", "7", "-1", "1"],
        correctAnswer: "7",
      },
      {
        id: 2,
        question: "Calculate the absolute value of |10|:",
        options: ["-10", "10", "0", "1", "-1"],
        correctAnswer: "10",
      },
      {
        id: 3,
        question: "If |x| = 8, what is the value of x?",
        options: ["-8", "0", "8", "-1", "1"],
        correctAnswer: "8 or -8",
      },
      {
        id: 4,
        question: "What is the absolute value of -100?",
        options: ["-100", "0", "100", "-1", "1"],
        correctAnswer: "100",
      },
      {
        id: 5,
        question: "If |y| = 15, what are the possible values of y?",
        options: ["-15 and 15", "0", "-1 and 1", "-30", "30"],
        correctAnswer: "-15 and 15",
      },
      {
        id: 6,
        question: "Calculate the absolute value of |-50|.",
        options: ["-50", "50", "0", "-1", "1"],
        correctAnswer: "50",
      },
      {
        id: 7,
        question: "If |a| = 42, what is the value of a?",
        options: ["-42", "0", "42", "-1", "1"],
        correctAnswer: "42 or -42",
      },
      {
        id: 8,
        question: "Find the absolute value of -3/4.",
        options: ["-3/4", "3/4", "-1/3", "1/4", "3/3"],
        correctAnswer: "3/4",
      },
      {
        id: 9,
        question: "If |b| = 25, what are the possible values of b?",
        options: ["-25 and 25", "0", "-1 and 1", "-50", "50"],
        correctAnswer: "-25 and 25",
      },
      {
        id: 10,
        question: "Calculate the absolute value of |-11|.",
        options: ["-11", "11", "0", "-1", "1"],
        correctAnswer: "11",
      },
    ],
  },
  {
    lessonId: 2,
    questions: [
      {
        id: 1,
        question: "Solve: 4 + (6 - 2)",
        options: ["2", "4", "6", "8", "10"],
        correctAnswer: "8",
      },
      {
        id: 2,
        question: "Calculate: 7 × 3 - (4 + 1)",
        options: ["10", "12", "14", "16", "18"],
        correctAnswer: "10",
      },
      {
        id: 3,
        question: "Evaluate: 5 × (3 - 2)²",
        options: ["5", "10", "15", "20", "25"],
        correctAnswer: "5",
      },
      {
        id: 4,
        question: "Solve: 18 ÷ 2 + 4 × 3",
        options: ["8", "9", "10", "12", "14"],
        correctAnswer: "13",
      },
      {
        id: 5,
        question: "Calculate: (9 + 7) × 2 - 6",
        options: ["16", "18", "20", "22", "24"],
        correctAnswer: "23",
      },
      {
        id: 6,
        question: "Evaluate: 3 × (5 - 3)²",
        options: ["3", "6", "9", "12", "15"],
        correctAnswer: "18",
      },
      {
        id: 7,
        question: "Solve: 12 ÷ (4 - 2) + 5",
        options: ["7", "9", "11", "13", "15"],
        correctAnswer: "11",
      },
      {
        id: 8,
        question: "Calculate: (6 + 3) × 4 - 8",
        options: ["16", "18", "20", "22", "24"],
        correctAnswer: "20",
      },
      {
        id: 9,
        question: "Evaluate: 10 × (7 - 6)²",
        options: ["10", "20", "30", "40", "50"],
        correctAnswer: "10",
      },
      {
        id: 10,
        question: "Solve: 24 ÷ 3 + 6 × 2",
        options: ["16", "18", "20", "22", "24"],
        correctAnswer: "20",
      },
    ],
  },
  {
    lessonId: 3,
    questions: [
      {
        id: 1,
        question:
          "Express the ratio of cats to dogs as a fraction if there are 12 cats and 18 dogs.",
        options: ["6/9", "2/3", "3/2", "4/6", "12/18"],
        correctAnswer: "2/3",
      },
      {
        id: 2,
        question:
          "If a recipe calls for 3 cups of water and 5 cups of flour, express the ratio of water to flour.",
        options: ["5:3", "3:5", "2:5", "3:2", "5:2"],
        correctAnswer: "3:5",
      },
      {
        id: 3,
        question: "Simplify the ratio 6:12.",
        options: ["1:2", "2:3", "3:4", "4:5", "6:12"],
        correctAnswer: "1:2",
      },
      {
        id: 4,
        question: "Solve for x: 4/5 = x/15.",
        options: ["12", "3", "9", "10", "7.5"],
        correctAnswer: "9",
      },
      {
        id: 5,
        question:
          "If a map has a scale of 1 inch to 20 miles, how many inches on the map represent 80 miles in real life?",
        options: ["2 inches", "3 inches", "4 inches", "5 inches", "6 inches"],
        correctAnswer: "4 inches",
      },
      {
        id: 6,
        question:
          "Express the ratio of apples to oranges as a fraction if there are 30 apples and 20 oranges.",
        options: ["3/2", "2/3", "1/2", "2/1", "4/5"],
        correctAnswer: "3/2",
      },
      {
        id: 7,
        question:
          "If a bag contains 5 red marbles and 3 green marbles, what is the ratio of red marbles to the total number of marbles?",
        options: ["3:8", "5:3", "8:3", "5:8", "3:5"],
        correctAnswer: "5:8",
      },
      {
        id: 8,
        question: "Simplify the ratio 9:27.",
        options: ["1:2", "2:3", "3:4", "4:5", "9:27"],
        correctAnswer: "1:3",
      },
      {
        id: 9,
        question: "Solve for x: 6/9 = x/27.",
        options: ["18", "4", "12", "9", "24"],
        correctAnswer: "12",
      },
      {
        id: 10,
        question:
          "If a jar has a ratio of 3 blue marbles to 5 red marbles, how many red marbles are there if there are 15 blue marbles?",
        options: ["5", "10", "15", "20", "25"],
        correctAnswer: "25",
      },
    ],
  },
];
