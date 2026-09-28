# Quiz App

This is a responsive quiz application built with React. The app allows users to answer multiple-choice questions,
move between questions, see which questions they have answered, submit the quiz, and see their final score.

## Live Demo

**Live Application:** https://quizappgr.netlify.app
**GitHub Repository:** https://github.com/mpano04/quiz-app

---

## Features

- Answer multiple-choice questions
- Move between questions using Previous and Next buttons
- Jump to a specific question using the question numbers
- Keep selected answers when moving between questions
- Show answered, unanswered, and current questions with different styles
- Show an explanation for each question
- Submit the quiz after answering all questions
- Cancel submission and go back to the questions
- Display the final score after submitting
- Show wrong answers after submission
- Responsive on desktop and mobile devices

---

## Technologies Used

- React
- JavaScript
- CSS

---

## Project Structure

```text
src/
├── components/
│   ├── header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── question/
│   │   ├── QuestionCard.jsx
│   │   └── QuestionCard.css
│   │
│   ├── questionNavigation/
│   │   ├── QuestionNavigation.jsx
│   │   └── QuestionNavigation.css
│   │
│   └── score/
│       ├── Score.jsx
│       └── Score.css
│
├── data/
│   └── questions.json
│
├── App.jsx
├── App.css
└── main.jsx
```

## Main Components

### App.jsx

This is the main component of the application. It manages the quiz state such as the current question, selected answers, navigation, and quiz submission.

### QuestionCard

This component displays the current question and its answer options. It also allows the user to select an answer.

### QuestionNavigation

This component displays the question numbers. It allows the user to move directly to a specific question and also shows the status of each question.

### Score

This component calculates and displays the final score after the user submits the quiz.

### questions.json

This file contains the quiz questions, answer options, correct answers, and explanations.

---

## How to Run the Project

To run this project on your computer, follow these steps.

### 1. Clone the repository

```bash
git clone https://github.com/mpano04/quiz-app.git
```

### 2. Go to the project folder

```bash
cd quiz-app
```

### 3. Install the dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

After running the project, Vite will give you a local URL similar to:

```text
http://localhost:5173/
```

Open the URL in your browser to use the application.

---

## How to Use the Quiz

1. Read the question.
2. Click one of the answers to select it.
3. Use the **Next** and **Previous** buttons to move between questions.
4. You can also click a question number to move directly to that question.
5. Answer all questions before submitting.
6. After the last question, a confirmation box will appear.
7. Click **Cancel** if you want to go back and check your answers.
8. Click **Submit** if you are ready to submit the quiz.
9. After submitting, your final score will be displayed.

---

## Deployment

The application is deployed on Netlify.
**Live URL:** https://quizappgr.netlify.app

---

## Team

This project was developed as a team project while practicing React.

## License

This project is for educational purposes.
