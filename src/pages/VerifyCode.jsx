import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const VerifyCode = () => {
  const [verificationCode, setVerificationCode] = useState(["", "", "", ""]);
  const { verifyCode, loading, email } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!email) {
      toast.error("Please log in to verify your code.");
      navigate("/login");
    }
  }, [email, navigate]);

  const handleCodeChange = (index, value) => {
    if (/^\d?$/.test(value)) {
      const updatedCode = [...verificationCode];
      updatedCode[index] = value;
      setVerificationCode(updatedCode);

      // Automatically move focus to the next input if not the last one
      if (value && index < 3) {
        document.getElementById(`code-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all the code fields are filled
    const fullCode = verificationCode.join("");
    if (fullCode.length !== 4) {
      toast.error("Please enter a valid 4-digit verification code.");
      return;
    }

    // Send email and verification code for validation
    verifyCode(email, fullCode);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-800 to-gray-900 p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 sm:p-8">
        <h2 className="text-3xl font-extrabold text-center text-yellow-600 mb-4">Verify Code</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter the 4-digit verification code sent to your email.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex justify-center gap-3">
            {verificationCode.map((code, index) => (
              <input
                key={index}
                id={`code-input-${index}`}
                type="text"
                maxLength="1"
                value={code}
                onChange={(e) => handleCodeChange(index, e.target.value)}
                className="w-12 h-12 text-center text-xl font-bold border-2 border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
              />
            ))}
          </div>
          <div>
            <button
              type="submit"
              className={`w-full py-2 px-4 text-white font-bold rounded-lg shadow-md transition-colors ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-yellow-600 hover:bg-yellow-700"
              }`}
              disabled={loading}
            >
              {loading ? "Verifying..." : "Verify Code"}
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <button
            onClick={() => navigate("/login")}
            className="text-gray-500 hover:text-yellow-600 font-medium transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerifyCode;
