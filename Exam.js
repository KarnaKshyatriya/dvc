// JSON structure with questions and options
const questionsData = [
  {
    question: "01.Microsoft Windows is an",
    options: [
      "Operating System",
      "Graphic Program ",
      "Word Processor",
      "Database Program",
    ],
    correctOption: 0,
  },
  {
    question: "Which of the following is not an operating system:",
    options: ["DOS", "Linux", "Windows", "Ms_Office"],
    correctOption: 3,
  },
  {
    question: "You should choose sleep option when ",
    options: [
      "The computer is tired after working for the whole day",
      "You are leaving for a very short time and want to resume your work shortly",
      "When Computer gets hanged frequently. Let it sleep for some time",
      "You finish working and going to bed",
    ],
    correctOption: 1,
  },
  {
    question: "A_______ is a named location on disk where files are stored:",
    options: ["POD", "FOLDER", "ICON", "Version"],
    correctOption: 1,
  },
  {
    question: "In Windows , Start Button is used to",
    options: [
      "Run Application",
      "Device Settings",
      "Turn off the system",
      "All of the above",
    ],
    correctOption: 3,
  },
  {
    question:
      "Once text has been cut to the clipboard  you can ____ that text into another document.",
    options: ["Paste", "Copy", "Transfer", "None of the above"],
    correctOption: 0,
  },
  {
    question: "What is not a font style :",
    options: ["BOLD", "Superscript", "Italic", "Regular"],
    correctOption: 3,
  },
  {
    question: "When you move a directory from one location to another :",
    options: [
      "A. All files inside the directory are moved",
      "b. All the subdirectory inside that directory are moved",
      " c. The directory is moved but the files are not moved",
      "D.Both A & B",
    ],
    correctOption: 3,
  },
  {
    question: " Landscape is :",
    options: [
      "A> Font Style",
      "b. Page Orientation ",
      "c. Paper Size",
      "d. Page Layout",
    ],
    correctOption: 1,
  },
  {
    question:
      "A number of letter that appears little below the normal text is called:",
    options: ["SubScript", "Superscript", "Supertext", "Toptext"],
    correctOption: 0,
  },
  {
    question: "We can insert a page number at :",
    options: ["Footer", "Header", "Both A & B", "None"],
    correctOption: 2,
  },
  {
    question: "Which is the default alignment in Ms Word?",
    options: ["Right", "Left", "Centre", "Justify"],
    correctOption: 1,
  },
  {
    question: "Microsoft Word is a :",
    options: [
      "A>Presentation Programme",
      "b. Word Processing Programme",
      " c. Spreadsheet programme",
      "d. None of these",
    ],
    correctOption: 1,
  },
  {
    question:
      "What is the default file extension for all MS Word documents for version 16?",
    options: [".txts", ".word", ".docs", ".docx"],
    correctOption: 3,
  },
  {
    question:
      "A _______ is a dot or other symbol positioned at the beginning of the paragraph :",
    options: ["Bullet", "logo", "Cell", "Target"],
    correctOption: 0,
  },
  {
    question: "In the formula which symbol specifies the fixed column or rows",
    options: ["$", "*", "%", ";"],
    correctOption: 0,
  },
  {
    question:
      "Which tool will you use to join adjacent cells and place the content at the middle of joined cell:",
    options: [
      "A.From Format cells dialog box choose shrink to fit",
      "b. From Format cells dialog box select the Central alignment",
      "c. From Format cells dialog box choose Merge cells",
      "d. From alignment group choose Merge & center and click",
    ],
    correctOption: 3,
  },
  {
    question: "What is Artificial Intelligence?",
    options: [
      "A subset of machine learning",
      "b. The study of how to create machines capable of performing tasks that require human intelligence",
      "c. Programming languages like Python and Java",
      "d. Data analysis using statistical methods",
    ],
    correctOption: 1,
  },
  {
    question:
      " Which of the following is an application of Natural Language Processing (NLP) in AI?",
    options: [
      "A.Speech recognition",
      "b) Database querying",
      "c) Network configuration",
      "d) Web development",
    ],
    correctOption: 1,
  },
];

// Function to populate the questions and options
function populateQuestions() {
  const form = document.getElementById("exam-form");
  questionsData.forEach((questionData, index) => {
    const questionDiv = document.createElement("div");
    questionDiv.className = "question";

    const questionTitle = document.createElement("h3");
    questionTitle.textContent = `Q${index + 1}: ${questionData.question}`;
    questionDiv.appendChild(questionTitle);

    questionData.options.forEach((option, optionIndex) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `question${index}`;
      console.log(`Option is  ${option} and option Index is ${optionIndex}`);
      input.value = optionIndex;
      label.appendChild(input);
      label.appendChild(document.createTextNode(option));
      questionDiv.appendChild(label);
    });

    form.appendChild(questionDiv);
  });
}

// Function to check the selected answers
function checkAnswers() {
  const form = document.getElementById("exam-form");
  const result = document.getElementById("result");
  let score = 0;

  questionsData.forEach((questionData, index) => {
    const selectedOption = form.elements[`question${index}`].value;
    if (parseInt(selectedOption) === questionData.correctOption) {
      score++;
    }
  });
  alert(`You scored ${score} out of ${questionsData.length}`);
  result.textContent = `You scored ${score} out of ${questionsData.length}.`;
}

// Populate the questions and options on page load
window.onload = populateQuestions;
