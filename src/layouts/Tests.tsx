import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import testsData from "../data/testData";

interface Answer {
  id: number;
  text: string;
  isCorrect: boolean;
}

interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

interface Test {
  id: number;
  name: string;
  description: string;
  image: string;
  questions: Question[];
}

const Tests: React.FC = () => {
  const { testId } = useParams<{ testId: string }>();
  const [test, setTest] = useState<Test | undefined>(
    testsData.find((test) => test.id === Number(testId))
  );

  if (!test) {
    return <div>Test not found</div>;
  }

  const handleQuestionChange = (questionId: number, newQuestion: string) => {
    setTest((prevTest) => {
      if (!prevTest) return prevTest;
      return {
        ...prevTest,
        questions: prevTest.questions.map((q) =>
          q.id === questionId ? { ...q, question: newQuestion } : q
        ),
      };
    });
  };

  const handleAnswerChange = (
    questionId: number,
    answerId: number,
    newAnswer: string
  ) => {
    setTest((prevTest) => {
      if (!prevTest) return prevTest;
      return {
        ...prevTest,
        questions: prevTest.questions.map((q) =>
          q.id === questionId
            ? {
                ...q,
                answers: q.answers.map((a) =>
                  a.id === answerId ? { ...a, text: newAnswer } : a
                ),
              }
            : q
        ),
      };
    });
  };

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: test.questions.length + 1,
      question: "New Question",
      answers: [
        { id: 1, text: "New Answer 1", isCorrect: false },
        { id: 2, text: "New Answer 2", isCorrect: false },
        { id: 3, text: "New Answer 3", isCorrect: false },
        { id: 4, text: "New Answer 4", isCorrect: false },
      ],
    };

    setTest((prevTest) => {
      if (!prevTest) return prevTest;
      return {
        ...prevTest,
        questions: [...prevTest.questions, newQuestion],
      };
    });
  };

  const handleAddAnswer = (questionId: number) => {
    const newAnswerId =
      Math.max(
        ...(test.questions
          .find((q) => q.id === questionId)
          ?.answers.map((a) => a.id) || [0])
      ) + 1;

    setTest((prevTest) => {
      if (!prevTest) return prevTest;
      return {
        ...prevTest,
        questions: prevTest.questions.map((q) =>
          q.id === questionId
            ? {
                ...q,
                answers: [
                  ...q.answers,
                  {
                    id: newAnswerId,
                    text: `New Answer ${newAnswerId}`,
                    isCorrect: false,
                  },
                ],
              }
            : q
        ),
      };
    });
  };

  const navigate = useNavigate();

  const handleSave = () => {
    // Navigate to another page or show a success message
    navigate("/home"); // Redirect to a different route, e.g., home or dashboard
  };

  const handleCancel = () => {
    // Navigate to a different page or clear the form
    navigate("/home"); // Redirect to a different route, e.g., home or dashboard
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <div
      className="p-6 bg-gray-100 min-h-screen mt-18"
      style={{ direction: "rtl" }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={test.image}
          alt={test.name}
          className="w-full h-60 object-cover"
        />
        <div className="p-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{test.name}</h1>
          <textarea
            value={test.description}
            className="w-full p-2 border border-gray-300 rounded text-gray-600"
          />

          <div className="flex flex-row mt-10 mb-10 gap-5">
            <button
              onClick={handleAddQuestion}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg"
            >
              وقت الامتحان :
            </button>
            <div className="flex items-center space-x-2">
              <textarea
                value={"30"}
                className="w-full p-2 border border-gray-300 rounded text-gray-600"
              />
            </div>
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4">الاسئلة : </h1>

          <div>
            {test.questions.map((question) => (
              <div key={question.id} className="mb-6">
                <textarea
                  value={question.question}
                  onChange={(e) =>
                    handleQuestionChange(question.id, e.target.value)
                  }
                  className="w-full p-2 border border-gray-300 rounded mb-4"
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {question.answers.map((answer) => (
                    <div
                      key={answer.id}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="radio"
                        name={`question-${question.id}`}
                        value={answer.id}
                        className="form-radio text-blue-600"
                      />
                      <textarea
                        value={answer.text}
                        onChange={(e) =>
                          handleAnswerChange(
                            question.id,
                            answer.id,
                            e.target.value
                          )
                        }
                        className="w-full p-2 border border-gray-300 rounded text-gray-600"
                      />
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => handleAddAnswer(question.id)}
                  className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
                >
                  إضافة إجابة جديدة
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleAddQuestion}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            إضافة سؤال جديد
          </button>
        </div>
        <div className="flex justify-between mt-6 p-5">
          <button
            onClick={handleSave}
            className="bg-pink-700 text-white py-2 px-4 rounded hover:bg-pink-800"
          >
            حفظ
          </button>
          <button
            onClick={handleCancel}
            className="bg-gray-500 text-black  border  py-2 px-4 rounded hover:bg-gray-600"
          >
            إلغاء
          </button>
        </div>
      </div>
    </div>
  );
};

export default Tests;
