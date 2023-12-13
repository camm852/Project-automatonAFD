import React from "react";
import AFD from "./assets/AFD.png";

interface IAFD {
  states: string[];
  alphabet: string[];
  initialState: string;
  acceptingStates: string[];
  transitions: Record<string, Record<string, string>>;
}

const afd: IAFD = {
  states: [
    "q0",
    "q1",
    "q2",
    "q3",
    "q4",
    "q5",
    "q6",
    "q7",
    "q8",
    "q9",
    "q10",
    "q11",
    "q12",
    "q13",
    "q14",
    "q15",
    "q16",
    "q17",
    "q18",
  ],
  alphabet: [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "confirmar",
    "editar",
    "cancelar",
    "tarjeta",
  ],
  initialState: "q0",
  acceptingStates: ["q18"],
  transitions: {
    q0: { tarjeta: "q1" },
    q1: {
      confirmar: "q2",
      cancelar: "q18",
      "1": "q3",
      "0": "q4",
      "2": "q4",
      "3": "q4",
      "4": "q4",
      "5": "q4",
      "6": "q4",
      "7": "q4",
      "8": "q4",
      "9": "q4",
    },
    q2: { confirmar: "q1", cancelar: "q18" },
    q3: {
      "2": "q5",
      "0": "q4",
      "1": "q4",
      "3": "q4",
      "4": "q4",
      "5": "q4",
      "6": "q4",
      "7": "q4",
      "8": "q4",
      "9": "q4",
      cancelar: "q18",
      editar: "q1",
      confirmar: "q2",
    },
    q4: {
      confirmar: "q2",
      editar: "q1",
      cancelar: "q18",
    },
    q5: {
      editar: "q1",
      "3": "q6",
      "0": "q4",
      "1": "q4",
      "2": "q4",
      "4": "q4",
      "5": "q4",
      "6": "q4",
      "7": "q4",
      "8": "q4",
      "9": "q4",
      cancelar: "q18",
    },
    q6: {
      confirmar: "q7",
      editar: "q1",
      cancelar: "q18",
      "0": "q4",
      "1": "q4",
      "2": "q4",
      "4": "q4",
      "5": "q4",
      "6": "q4",
      "7": "q4",
      "8": "q4",
      "9": "q4",
    },
    q7: {
      cofirmar: "q8",
      cancelar: "q18",
      "0": "q9",
      "1": "q9",
      "2": "q9",
      "3": "q9",
      "4": "q9",
      "5": "q9",
      "6": "q9",
      "7": "q9",
      "8": "q9",
      "9": "q9",
    },
    q8: {
      confirmar: "q7",
      cancelar: "q18",
    },
    q9: {
      editar: "q7",
      cancelar: "q18",
      confirmar: "q8",
      "0": "q10",
      "1": "q11",
      "2": "q11",
      "3": "q11",
      "4": "q11",
      "5": "q11",
      "6": "q11",
      "7": "q11",
      "8": "q11",
      "9": "q11",
    },
    q10: {
      confirmar: "q8",
      cancelar: "q18",
      editar: "q7",
      "0": "q13",
      "1": "q14",
      "2": "q14",
      "3": "q14",
      "4": "q14",
      "5": "q14",
      "6": "q14",
      "7": "q14",
      "8": "q14",
      "9": "q14",
    },
    q11: {
      confirmar: "q8",
      cancelar: "q18",
      editar: "q7",
      "0": "q12",
      "1": "q14",
      "2": "q14",
      "3": "q14",
      "4": "q14",
      "5": "q14",
      "6": "q14",
      "7": "q14",
      "8": "q14",
      "9": "q14",
    },
    q12: {
      confirmar: "q8",
      cancelar: "q18",
      editar: "q7",
      "0": "q16",
      "1": "q14",
      "2": "q14",
      "3": "q14",
      "4": "q14",
      "5": "q14",
      "6": "q14",
      "7": "q14",
      "8": "q14",
      "9": "q14",
    },
    q13: {
      confirmar: "q17",
      cancelar: "q18",
      editar: "q7",
      "0": "q15",
      "1": "q14",
      "2": "q14",
      "3": "q14",
      "4": "q14",
      "5": "q14",
      "6": "q14",
      "7": "q14",
      "8": "q14",
      "9": "q14",
    },
    q14: {
      confirmar: "q8",
      cancelar: "q18",
      editar: "q7",
    },
    q15: {
      confirmar: "q17",
      cancelar: "q18",
      editar: "q7",
    },
    q16: {
      confirmar: "q17",
      cancelar: "q18",
      editar: "q7",
    },
    q17: {
      tarjeta: "q0",
    },
    q18: {
      tarjeta: "q0",
    },
  },
};

function App() {
  const [currentState, setCurrentState] = React.useState<string>(
    afd.initialState
  );

  const [display, setDisplay] = React.useState<string>("");

  React.useEffect(() => {
    if (
      currentState === "q18" ||
      currentState === "q7" ||
      currentState === "q0" ||
      currentState === "q1"
    ) {
      setDisplay("");
    }
  }, [currentState]);

  const handleDisplay = (
    e:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.BaseSyntheticEvent
  ) => {
    if (
      currentState === "q18" ||
      currentState === "q17" ||
      currentState === "q0"
    )
      return;
    setDisplay((prev) => prev.concat(e.target.innerText));
  };

  const handleTransition = (input: string) => {
    if (afd.alphabet.includes(input) && afd.transitions[currentState][input]) {
      setCurrentState(afd.transitions[currentState][input]);
    }
  };

  return (
    <>
      <div className="w-[1920px] flex flex-nowrap justify-center py-10 gap-8 bg-black">
        <div className="flex-col w-2/4 bg-green-200 rounded-lg ">
          {/* Display */}
          <div className="flex items-center  justify-center py-10" id="cajero">
            <div className="flex justify-center border-b-2 border-black w-full pb-8 gap-4">
              <div className="w-[700px] h-[400px] flex flex-row justify-center items-center bg-gray-200 rounded-xl">
                <div className="flex flex-row flex-wrap justify-center items-center gap-5">
                  <div className="w-full text-center">
                    <p className="text-2xl">Bienvenido</p>
                  </div>
                  <div className="w-full text-center">
                    {currentState === "q0" ? (
                      <p>
                        Por favor, inserte su tarjeta para iniciar la
                        transacción.
                      </p>
                    ) : currentState === "q18" ? (
                      <p>Transacción cancelada.</p>
                    ) : currentState === "q17" ? (
                      <p>Transacción exitosa.</p>
                    ) : currentState === "q2" ? (
                      <p>Contraseña incorrecta.</p>
                    ) : +currentState.substring(1) >= 1 &&
                      +currentState.substring(1) < 7 ? (
                      <p>Por favor ingrese su contraseña.</p>
                    ) : currentState === "q8" ? (
                      <p>Retiro fallido.</p>
                    ) : (
                      +currentState.substring(1) >= 7 && (
                        <p>Por favor ingrese el monto a retirar.</p>
                      )
                    )}
                  </div>
                  <input
                    className="bg-slate-100 text-center outline-none rounded-lg p-3 text-xl"
                    value={currentState === "q17" ? "" : display}
                    disabled
                  />
                </div>
              </div>
              {/* Botones de aceptacion/correcion/cancelar */}
              <div className="flex flex-col justify-end gap-4">
                <button
                  className="bg-yellow-300 rounded-md w-32 p-2"
                  onClick={() => {
                    handleTransition("editar");
                  }}
                >
                  Editar
                </button>
                <button
                  className="bg-green-500 rounded-md w-32 p-2"
                  onClick={() => {
                    handleTransition("confirmar");
                  }}
                >
                  Confirmar
                </button>
                <button
                  className="bg-red-500 rounded-md w-32 p-2"
                  onClick={() => {
                    handleTransition("cancelar");
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
          {/* Pad Numerico */}
          <div className="flex items-center  justify-center py-2" id="cajero">
            <div className="flex justify-center border-b-2 border-black w-full pb-8 gap-2">
              <div className="w-[500px] h-[300px] flex flex-row justify-center items-center bg-gray-900 px-7 rounded-lg">
                <div className="flex flex-row flex-wrap justify-center items-center gap-3 bg-gray-700 p-4 rounded-lg">
                  <div className="flex flex-row flex-nowrap gap-2">
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("1");
                        handleDisplay(e);
                      }}
                    >
                      1
                    </button>
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("2");
                        handleDisplay(e);
                      }}
                    >
                      2
                    </button>
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("3");
                        handleDisplay(e);
                      }}
                    >
                      3
                    </button>
                  </div>
                  <div className="flex flex-row flex-nowrap gap-2">
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("4");
                        handleDisplay(e);
                      }}
                    >
                      4
                    </button>
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("5");
                        handleDisplay(e);
                      }}
                    >
                      5
                    </button>
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("6");
                        handleDisplay(e);
                      }}
                    >
                      6
                    </button>
                  </div>
                  <div className="flex flex-row flex-nowrap gap-2">
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("7");
                        handleDisplay(e);
                      }}
                    >
                      7
                    </button>
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("8");
                        handleDisplay(e);
                      }}
                    >
                      8
                    </button>
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("9");
                        handleDisplay(e);
                      }}
                    >
                      9
                    </button>
                  </div>
                  <div className="flex flex-row flex-nowrap gap-2">
                    <button
                      className="bg-slate-300 rounded-md w-32 p-2 font-bold"
                      onClick={(e) => {
                        handleTransition("0");
                        handleDisplay(e);
                      }}
                    >
                      0
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-start gap-4 relative ">
                <div className="bg-gray-800  w-60 p-4 flex flex-wrap justify-center gap-2 rounded-lg">
                  <div className="bg-gray-600 w-56 p-2"></div>
                </div>
                <div
                  className={`w-48 bg-green-600 h-[250px] absolute top-7 left-6 rounded-md text-white cursor-pointer ${
                    currentState === "q0" || currentState === "q18"
                      ? ""
                      : "hidden"
                  }`}
                  onClick={() => {
                    if (currentState === "q0" || currentState === "q18") {
                      handleTransition("tarjeta");
                    }
                  }}
                >
                  <div className="mt-2 ml-2 font-bold text-sm">
                    BANCO FALABELLA
                  </div>
                  <div className="mt-14 ml-6 font-bold text-sm">
                    8885 7732 7583 8293
                  </div>
                  <div className="mt-10 ml-20 font-bold">MASTERCARD</div>
                  <div className="ml-20 font-bold">
                    <img
                      src="https://www.logo.wine/a/logo/Mastercard/Mastercard-Logo.wine.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Dinero */}
          <div className="flex items-center  justify-center py-10" id="cajero">
            <div className="flex justify-center border-b-2 border-black w-full pb-8 gap-2 relative">
              <div className="w-2/3 p-2 bg-gray-900 flex justify-center">
                <div className="w-11/12 p-2 bg-gray-700"></div>
                <div
                  className={`absolute top-5 w-7/12 h-[200px] bg-green-600 rounded-md border-8 border-green-800 flex justify-center items-center cursor-pointer ${
                    currentState !== "q17" ? "hidden" : ""
                  }`}
                  onClick={() => {
                    handleTransition("tarjeta");
                  }}
                >
                  <div className="bg-transparent text-3xl ">${display}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="w-2/4 h-[1400px]"
          style={{
            backgroundImage: `url(${AFD})`,
            maxWidth: "800px",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            borderColor: "rgb(227, 242, 253)",
          }}
        >
          {/*  */}
          <div className="grid grid-cols-4 mt-3">
            <div className="border-2 border-transparent"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q0" ? "bg-red-500 border-0" : ""
                }`}
              >
                Espera Tarjeta
              </button>
            </div>
            <div className="border-2 border-transparent"></div>
            <div className="border-2 border-transparent"></div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q1" ? "bg-red-500 border-0" : ""
                }`}
              >
                1° Numero
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q2" ? "bg-red-500 border-0" : ""
                }`}
              >
                Pass Incorrec
              </button>
            </div>
            <div className="border-2 border-transparent"></div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-12">
            <div className="border-2 border-transparent"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q3" ? "bg-red-500 border-0" : ""
                }`}
              >
                2° Numero
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm${
                  currentState === "q4" ? " border-0 bg-red-500" : ""
                }`}
              >
                Pass Incorrec
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-[4.2rem] h-[4.3rem] ml-5 -mt-1 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q18" ? "bg-red-500 border-0" : ""
                }`}
              >
                Cancelado
              </button>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-[4.2rem] h-[4.2rem] -mt-1 mr-6 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q18" ? "bg-red-500 border-0" : ""
                }`}
              >
                Cancelado
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q5" ? "bg-red-500 border-0" : ""
                }`}
              >
                3° Numero
              </button>
            </div>
            <div className="border-2 border-transparent"></div>
            <div className="border-2 border-transparent flex justify-center"></div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q6" ? "bg-red-500 border-0" : ""
                }`}
              >
                Pass Correct
              </button>
            </div>
            <div className="border-2 border-transparent"></div>
            <div className="border-2 border-transparent flex justify-center"></div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q7" ? "bg-red-500 border-0" : ""
                }`}
              >
                Ingrese Monto
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 ml-1 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q8" ? "bg-red-500 border-0" : ""
                }`}
              >
                Retiro Fallido
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center"></div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q9" ? "bg-red-500 border-0" : ""
                }`}
              >
                X Numero
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-[4.2rem] h-[4.3rem] ml-5 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q18" ? "bg-red-500 border-0" : ""
                }`}
              >
                Cancelado
              </button>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q10" ? "bg-red-500 border-0" : ""
                }`}
              >
                X0
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q11" ? "bg-red-500 border-0" : ""
                }`}
              >
                XY Numero
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 ml-6 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q12" ? "bg-red-500 border-0" : ""
                }`}
              >
                XY0
              </button>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-[4.2rem] h-[4.3rem] mr-6 -mt-1 bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q18" ? "bg-red-500 border-0" : ""
                }`}
              >
                Cancelado
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 -ml-2 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q13" ? "bg-red-500 border-0" : ""
                }`}
              >
                X00
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q14" ? "bg-red-500 border-0" : ""
                }`}
              >
                Monto Incorrec
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center"></div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q15" ? "bg-red-500 border-0" : ""
                }`}
              >
                X000
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-16 h-16 mt-[1px] bg-gray-100 shadow-2xl border-2 border-black text-sm ${
                  currentState === "q16" ? "bg-red-500 border-0" : ""
                }`}
              >
                XY00
              </button>
            </div>
          </div>

          {/*  */}
          <div className="grid grid-cols-4 mt-11">
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center"></div>
            <div className="border-2 border-transparent flex justify-center">
              <button
                className={`rounded-full w-[4.3rem] h-[4.2rem] ml-1 -mt-1 bg-gray-100 shadow-2xl  text-sm ${
                  currentState === "q17" ? "bg-green-500 border-0" : ""
                }`}
              >
                Retiro Exitoso
              </button>
            </div>
            <div className="border-2 border-transparent flex justify-center"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
