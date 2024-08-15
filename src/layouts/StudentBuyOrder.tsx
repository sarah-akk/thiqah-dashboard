import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Payment {
  id: number;
  amount: number;
  paymentDate: string;
}

const initialPayments: Payment[] = [
  {
    id: 1,
    amount: 500,
    paymentDate: "2024-08-01",
  },
  {
    id: 2,
    amount: 300,
    paymentDate: "2024-08-05",
  },
];

const StudentBuyOrder: React.FC = () => {
  const navigate = useNavigate();
  const [payments, setPayments] = useState<Payment[]>(initialPayments);
  const [newPayment, setNewPayment] = useState<Partial<Payment>>({
    amount: 0,
    paymentDate: "",
  });

  const handleAddPayment = () => {
    if (newPayment.amount && newPayment.paymentDate) {
      const newPaymentData: Payment = {
        id: payments.length + 1,
        amount: newPayment.amount,
        paymentDate: newPayment.paymentDate,
      };
      setPayments([...payments, newPaymentData]);
      setNewPayment({ amount: 0, paymentDate: "" });
    }
  };

  return (
    <div
      className="p-6 bg-gray-50 min-h-screen mt-15"
      style={{ direction: "rtl" }}
    >
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Back button */}
        <button
          onClick={() => navigate(-1)}
          className="left-20 absolute mb-4 px-4 py-2 bg-gray-500 text-white bg-orange-400 font-semibold rounded-lg 
          shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400"
        >
          عودة
        </button>

        <h1 className="text-2xl font-semibold mb-4 text-gray-800">
          طلبات شراء الطالب
        </h1>

        {/* Table for displaying payment data */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  قيمة الدفعة
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  تاريخ الدفع
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {payments.map((payment) => (
                <tr key={payment.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.amount} ر.س
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {payment.paymentDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentBuyOrder;
