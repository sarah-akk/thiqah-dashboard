import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Test: React.FC = () => {
  const navigate = useNavigate(); // Initialize the navigation hook
  const [testName, setTestName] = useState<string>("");
  const [testDescription, setTestDescription] = useState<string>("");
  const [testDuration, setTestDuration] = useState<number>(0); // Duration in minutes
  const [questions, setQuestions] = useState<Question[]>([]);

  const handleQuestionChange = (questionId: number, newQuestion: string) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId ? { ...q, question: newQuestion } : q
      )
    );
  };

  const handleAnswerChange = (
    questionId: number,
    answerId: number,
    newAnswer: string
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              answers: q.answers.map((a) =>
                a.id === answerId ? { ...a, text: newAnswer } : a
              ),
            }
          : q
      )
    );
  };

  const handleAddQuestion = () => {
    const newQuestion: Question = {
      id: questions.length + 1,
      question: "New Question",
      answers: [
        { id: 1, text: "New Answer 1", isCorrect: false },
        { id: 2, text: "New Answer 2", isCorrect: false },
        { id: 3, text: "New Answer 3", isCorrect: false },
        { id: 4, text: "New Answer 4", isCorrect: false },
      ],
    };

    setQuestions([...questions, newQuestion]);
  };

  const handleAddAnswer = (questionId: number) => {
    const newAnswerId =
      Math.max(
        ...(questions
          .find((q) => q.id === questionId)
          ?.answers.map((a) => a.id) || [0])
      ) + 1;

    setQuestions((prevQuestions) =>
      prevQuestions.map((q) =>
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
      )
    );
  };

  const handleSave = () => {
    // Log or save the test data
    console.log("Test Data Saved:");
    console.log("Name:", testName);
    console.log("Description:", testDescription);
    console.log("Duration:", testDuration);
    console.log("Questions:", questions);

    // Navigate to another page or show a success message
    navigate("/home"); // Redirect to a different route, e.g., home or dashboard
  };

  const handleCancel = () => {
    // Navigate to a different page or clear the form
    navigate("/home"); // Redirect to a different route, e.g., home or dashboard
  };

  return (
    <div
      className="p-6 bg-gray-100 min-h-screen mt-18"
      style={{ direction: "rtl" }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          إنشاء اختبار جديد
        </h1>
        <div className="mb-6">
          <input
            type="text"
            value={testName}
            onChange={(e) => setTestName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="اسم الاختبار"
          />
          <textarea
            value={testDescription}
            onChange={(e) => setTestDescription(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
            placeholder="وصف الاختبار"
          />

          <div className="flex flex-row gap-20">
            <button
              onClick={handleAddQuestion}
              className="bg-yellow-500 text-white py-2 px-4 rounded hover:bg"
            >
              وقت الامتحان :
            </button>
            <input
              type="number"
              value={testDuration}
              onChange={(e) => setTestDuration(Number(e.target.value))}
              className=" p-2 border border-gray-300 rounded mb-4"
              placeholder="مدة الاختبار (بالدقائق)"
            />
          </div>
        </div>
        <div>
          {questions.map((question) => (
            <div key={question.id} className="mb-6">
              <textarea
                value={question.question}
                onChange={(e) =>
                  handleQuestionChange(question.id, e.target.value)
                }
                className="w-full p-2 border border-gray-300 rounded mb-4"
                placeholder="اكتب السؤال هنا"
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {question.answers.map((answer) => (
                  <div key={answer.id} className="flex items-center space-x-2">
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
                      placeholder="اكتب الإجابة هنا"
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
          <button
            onClick={handleAddQuestion}
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mb-4"
          >
            إضافة سؤال جديد
          </button>
        </div>
        <div className="flex justify-between mt-6">
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

export default Test;
