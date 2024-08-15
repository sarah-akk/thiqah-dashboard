const testsData = [
    {
      id: 1,
      name: "اختبار 1",
      description: "وصف الاختبار 1",
      image: "https://via.placeholder.com/150?text=Test1",
      questions: [
        {
          id: 1,
          question: "ما هو السؤال 1 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "ما هو السؤال 2 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "ما هو السؤال 3 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "ما هو السؤال 4 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: true }
          ]
        },
        {
          id: 5,
          question: "ما هو السؤال 5 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 6,
          question: "ما هو السؤال 6 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 7,
          question: "ما هو السؤال 7 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 2,
      name: "اختبار 2",
      description: "وصف الاختبار 2",
      image: "https://via.placeholder.com/150?text=Test2",
      questions: [
        {
          id: 1,
          question: "ما هو السؤال 1 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "ما هو السؤال 2 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "ما هو السؤال 3 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "ما هو السؤال 4 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: true }
          ]
        },
        {
          id: 5,
          question: "ما هو السؤال 5 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 6,
          question: "ما هو السؤال 6 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 7,
          question: "ما هو السؤال 7 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 3,
      name: "اختبار 3",
      description: "وصف الاختبار 3",
      image: "https://via.placeholder.com/150?text=Test3",
      questions: [
        {
          id: 1,
          question: "ما هو السؤال 1 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "ما هو السؤال 2 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "ما هو السؤال 3 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "ما هو السؤال 4 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: true }
          ]
        },
        {
          id: 5,
          question: "ما هو السؤال 5 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 6,
          question: "ما هو السؤال 6 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 7,
          question: "ما هو السؤال 7 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 4,
      name: "اختبار 4",
      description: "وصف الاختبار 4",
      image: "https://via.placeholder.com/150?text=Test4",
      questions: [
        {
          id: 1,
          question: "ما هو السؤال 1 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "ما هو السؤال 2 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "ما هو السؤال 3 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "ما هو السؤال 4 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: true }
          ]
        },
        {
          id: 5,
          question: "ما هو السؤال 5 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 6,
          question: "ما هو السؤال 6 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 7,
          question: "ما هو السؤال 7 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        }
      ]
    },
    {
      id: 5,
      name: "اختبار 5",
      description: "وصف الاختبار 5",
      image: "https://via.placeholder.com/150?text=Test5",
      questions: [
        {
          id: 1,
          question: "ما هو السؤال 1 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 2,
          question: "ما هو السؤال 2 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 3,
          question: "ما هو السؤال 3 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 4,
          question: "ما هو السؤال 4 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: true }
          ]
        },
        {
          id: 5,
          question: "ما هو السؤال 5 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: true },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 6,
          question: "ما هو السؤال 6 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: true },
            { id: 3, text: "إجابة 3", isCorrect: false },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        },
        {
          id: 7,
          question: "ما هو السؤال 7 حول اختبار 1؟",
          answers: [
            { id: 1, text: "إجابة 1", isCorrect: false },
            { id: 2, text: "إجابة 2", isCorrect: false },
            { id: 3, text: "إجابة 3", isCorrect: true },
            { id: 4, text: "إجابة 4", isCorrect: false }
          ]
        }
      ]
    }
  ];
  
  export default testsData;
  