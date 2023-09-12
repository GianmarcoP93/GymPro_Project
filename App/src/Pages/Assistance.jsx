import { useState } from "react";
import { OrangeButton } from "../components/shared/OrangeButton";
import { Sidebar } from "../components/shared/Sidebar";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Assistance = () => {
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const [err, setErr] = useState(null);

  const data = useSelector((state) => state.data.me);
  const loading = useSelector((state) => state.data.userLoading);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErr(null);
    if (option === "") {
      notifyMessageErr();
      setErr("Seleziona un tipo di assistenza!");
      return;
    }
    setOption("");

    setMessage("");
    notifyMessage();
  };

  const notifyMessage = () =>
    toast.success("Messaggio inviato!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const notifyMessageErr = () =>
    toast.warn(err, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      toastId: "custom-err-toast",
    });

  return (
    <>
      <ToastContainer
        toastStyle={{ backgroundColor: err ? "red" : "#F87A2C" }}
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      {!loading && data && (
        <div className="flex p-6">
          <Sidebar isGym={data && data.role === "admin" ? true : false} />
          <div className="flex flex-col grow-[1] mx-auto max-w-section ">
            <div className=" rounded-2xl p-10 bg-gray h-[100%]">
              <form onSubmit={handleSubmit}>
                <div className="w-full bg-white flex overflow-x-auto custom-scrollbar">
                  <div className="flex-1 px-2">
                    <div className="h-16 flex ">
                      <h2 className="text-secondary-100 text-3xl mx-[auto] pb-4 ">
                        Contatta l'assistenza
                      </h2>
                    </div>
                    <div className="mb-6 mt-4 rounded-2xl ">
                      <div className="mb-4">
                        <select
                          value={option}
                          className="bg-transparent border border-white-100 text-white-100 rounded-lg"
                          onChange={(e) => setOption(e.target.value)}
                        >
                          <option value="" disabled>
                            Seleziona un tipo di assistenza
                          </option>
                          <option className="text-black ">
                            Assistenza Tecnica
                          </option>
                          <option className="text-black">
                            Chiarimenti sulle Politiche
                          </option>
                          <option className="text-black">
                            Feedback e Segnalazione Problemi
                          </option>
                          <option className="text-black">
                            Assistenza su Pagamenti
                          </option>
                          <option className="text-black">
                            Assistenza su Abbonamenti
                          </option>
                          <option className="text-black">
                            Supporto su Dispositivi e Browser Supportati
                          </option>
                        </select>
                      </div>

                      <div>
                        <textarea
                          id="body"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full h-[50vh] text-gray-700  border border-white-100 outline-none focus:ring-0 text-white-100 pl-1 rounded-lg bg-transparent"
                          placeholder="Message..."
                        ></textarea>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex items-center space-x-2 ml-auto">
                          <OrangeButton type="submit" text="invia" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
