function App() {
  return (
    <div className=" relative h-screen w-full flex justify-center items-center bg-blue-500/10 text-gray-700">
      <div className="flex flex-col w-[1530px] mx-auto h-full items-center justify-evenly gap-2 px-4">
        <h1 className="text-5xl text-sky-700 font-bold  px-4 py-2  ">
          Random Password Generator
        </h1>
        <div className="min-w-80 min-h-44 w-[800px] h-[300px] rounded-lg shadow-lg bg-slate-100 border border-slate-950/5 "></div>
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
            Project Gitub{" "}
            <a
              className="font-bold text-sky-950 hover:text-sky-600 duration-150"
              href="#"
            >
              Link
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
