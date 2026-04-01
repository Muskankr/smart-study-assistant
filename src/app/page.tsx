"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  // ✅ ONLY ONE FUNCTION
  const callAI = async (type: string) => {
    let prompt = "";

    if (type === "explain") {
      prompt = `Explain this in simple terms: ${input}`;
    } else if (type === "quiz") {
      prompt = `Create 3 MCQs from this topic: ${input}`;
    } else {
      prompt = `Answer this question clearly: ${input}`;
    }

    // 🔥 Show loading
    setOutput("Thinking... 🤖");

    // 🔥 Fake AI delay
    setTimeout(() => {
      const text = input.toLowerCase().replace("what is", "").replace("?", "").trim();

      if (type === "explain") {
        if (text.includes("photosynthesis")) {
          setOutput(
            "Photosynthesis is the process by which green plants use sunlight, carbon dioxide, and water to produce glucose (food) and oxygen."
          );
        } else if (text.includes("ai")) {
          setOutput(
            "Artificial Intelligence (AI) refers to machines that can perform tasks requiring human intelligence."
          );
        } else if (text.includes("gravity")) {
          setOutput(
            "Gravity is a force that attracts objects toward the Earth."
          );
        } else if (text.includes("dbms")) {
          setOutput(
            "DBMS is software used to store and manage data efficiently."
          );
        } else if (text.includes("os")) {
          setOutput(
            "Operating System manages hardware and software resources."
          );
        } else if (text.includes("network")) {
          setOutput(
            "Computer networks allow devices to communicate and share data."
          );
        } else {
          setOutput(
            `${input} is an important concept used in real-world applications.`
          );
        }
      }

      else if (type === "quiz") {
        if (text.includes("photosynthesis")) {
          setOutput(
            `1. What is the main purpose of photosynthesis?
A) To absorb oxygen  
B) To produce food for the plant ✅  
C) To release carbon dioxide  

2. Which pigment is responsible for photosynthesis?
A) Hemoglobin  
B) Chlorophyll ✅  
C) Melanin  

3. What is the byproduct of photosynthesis?
A) Nitrogen  
B) Oxygen ✅  
C) Hydrogen`
          );
        }

        else if (text.includes("ai")) {
          setOutput(
            `1. What does AI stand for?
A) Automated Input  
B) Artificial Intelligence ✅  
C) Advanced Interface  

2. Which of the following is an application of AI?
A) Manual calculation  
B) Self-driving cars ✅  
C) Typing  

3. AI systems are designed to:
A) Replace electricity  
B) Mimic human intelligence ✅  
C) Store water`
          );
        }

        else if (text.includes("dbms")) {
          setOutput(
            `1. What is DBMS used for?
A) Playing games  
B) Managing data efficiently ✅  
C) Designing hardware  

2. Which is an example of DBMS?
A) MySQL ✅  
B) Chrome  
C) Windows  

3. DBMS helps in:
A) Data redundancy  
B) Data organization ✅  
C) Deleting hardware`
          );
        }

        else {
          setOutput(
            `1. What is ${text}?
A) A random concept  
B) An important concept ✅  
C) Not useful  

2. ${text} is mainly used for:
A) Entertainment  
B) Learning and applications ✅  
C) Nothing  

3. ${text} is:
A) Irrelevant  
B) Useful concept ✅  
C) Unknown`
          );
        }
      }

      else {
        setOutput(
          `Great question! ${input} can be explained as an important concept in learning.`
        );
      }

    }, 1000);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
      <div className="w-full max-w-2xl bg-white/80 backdrop-blur-lg shadow-2xl rounded-2xl p-6 border">

        <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
          🤖 Smart Study Assistant
        </h1>

        <textarea
          className="w-full p-4 border rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="Ask anything like 'What is photosynthesis?'..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <div className="flex flex-wrap gap-3 justify-center mb-4">
          <button
            onClick={() => callAI("explain")}
            className="bg-blue-500 hover:bg-blue-600 transition text-white px-5 py-2 rounded-xl shadow-md"
          >
            Explain
          </button>

          <button
            onClick={() => callAI("quiz")}
            className="bg-green-500 hover:bg-green-600 transition text-white px-5 py-2 rounded-xl shadow-md"
          >
            Generate Quiz
          </button>

          <button
            onClick={() => callAI("doubt")}
            className="bg-purple-500 hover:bg-purple-600 transition text-white px-5 py-2 rounded-xl shadow-md"
          >
            Ask Doubt
          </button>
        </div>

        <div className="bg-white border rounded-xl p-4 min-h-[150px] shadow-inner">
          <p className="text-sm text-gray-500 mb-2">AI Response:</p>
          <p className="whitespace-pre-line text-gray-800">
            {output || "Your intelligent answer will appear here..."}
          </p>
        </div>
      </div>
    </main>
  );
}