import { useState, useEffect } from "react";

function App() {
  const [length, setLength] = useState(12);
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setisChar] = useState(false);
  const [password, setPassword] = useState("");
  const [genbtn, setGenbtn] = useState(false);

  const passwordGenerator = () => {
    let finalPass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    let char = '`~!@#$%^&*()_+={}|[]\\:";<>?,./';
    let passpool = str;
    isNumber && (passpool += num);
    isChar && (passpool += char);
    for (let i = 0; i < length; i++) {
      let tempchar = passpool.charAt(
        Math.floor(Math.random() * passpool.length)
      );
      finalPass += tempchar;
    }
    setPassword(finalPass);
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, isNumber, isChar, genbtn]);

  return (
    <div className=" relative h-screen w-full flex justify-center items-center bg-gray-50 text-gray-700">
      <div className="flex flex-col w-[1530px] mx-auto h-full items-center justify-evenly gap-2 px-4">
        <h1 className="text-5xl text-sky-700 font-bold  px-4 py-2  ">
          Random Password Generator
        </h1>
        <div className="min-w-80 min-h-44 w-[800px] h-[300px] rounded-lg shadow-lg bg-zinc-100/5 border border-slate-950/5 ">
          <div className="flex flex-col justify-between items-center h-full gap-2 py-8">
            <input
              type="text"
              value={password}
              placeholder="Generated Password"
              readOnly
              className="outline-none w-3/4 font-medium text-lg rounded-lg shadow-md px-8 py-4 text-green-700"
            />
            <div className="flex justify-evenly w-full px-4">
              <div className="flex flex-col gap-2 w-1/3 justify-center items-center">
                <input
                  type="range"
                  min={8}
                  max={50}
                  value={length}
                  className="cursor-pointer w-full"
                  onChange={(e) => setLength(Number(e.target.value))} // normal e.target.value gives type error
                />
                <label
                  htmlFor="length"
                  className="text-lg font-medium  text-blue-400"
                >
                  Length: {length}
                </label>
              </div>
              <div className="flex flex-col gap-2 ">
                <div className="flex items-center font-medium text-blue-400 text-lg gap-2">
                  <input
                    type="checkbox"
                    defaultChecked={isNumber}
                    onChange={() => setIsNumber((prev) => !prev)}
                    className="w-6 h-6 "
                  />
                  <label htmlFor="number">Numbers</label>
                </div>
                <div className="flex gap-2 text-blue-400 text-lg font-medium">
                  <input
                    type="checkbox"
                    defaultChecked={isChar}
                    onChange={() => setisChar((prev) => !prev)}
                    className="w-6 h-6"
                  />
                  <label htmlFor="char">Characters</label>
                </div>
              </div>
            </div>
            <div className="flex justify-evenly w-full px-4">
              <button
                onClick={() => setGenbtn((prev) => !prev)}
                className="rounded-lg border-2 border-blue-500 hover:scale-105 px-4 py-2 font-bold text-blue-500 shadow-blue-400 hover:bg-blue-500 hover:text-white hover:duration-300"
              >
                Generate
              </button>
              <button className="rounded-lg border-2 border-green-700 hover:scale-105 px-4 py-2 font-bold  text-green-700 shadow-green-700 hover:bg-green-700 hover:text-white hover:duration-300">
                Copy
              </button>
            </div>
          </div>
        </div>
        <div>
          <ul className="font-medium text-lg text-gray-600 ">
            <li className="font-normal mb-8">
              You can Select any of the fields, each time you select, new
              password is generated
            </li>
            <li>
              {" "}
              <span className="font-bold text-sky-700">Generate: </span>Click
              Generate Button to generate a new password
            </li>
            <li>
              <span className="font-bold text-sky-700">Length</span>: Total
              length of the password
            </li>
            <li>
              <span className="font-bold text-sky-700">number</span>: Verify
              whether number is included{" "}
            </li>
            <li>
              <span className="font-bold text-sky-700">Character</span>: Verify
              whether Special Character is included or not
            </li>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className=" font-bold text-3xl ">Made with React + Tailwind</h3>
          <p className="font-medium text-2xl">
            Project Code on{" "}
            <a
              className="font-bold text-sky-700 hover:text-cyan-400 duration-150"
              href="https://github.com/pratishu/password-generator-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
