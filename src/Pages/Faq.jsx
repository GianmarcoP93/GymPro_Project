import { useState } from "react";
import { Sidebar } from "../components/shared/Sidebar";
import { useSelector } from "react-redux";
import { Navbar } from "../components/shared/Navbar";

export const Faq = () => {
  const data = useSelector((state) => state.data.me);
  const loading = useSelector((state) => state.data.userLoading);

  const faqData = [
    {
      question: "Che cos'è GymPro e quali servizi offre alle palestre?",
      answer:
        "GymPro è una piattaforma di gestione innovativa dedicata alle palestre. Offre una serie di servizi e strumenti che consentono la pianificazione delle lezioni, la gestione delle iscrizioni, il monitoraggio delle performance dei membri e molto altro.",
    },
    {
      question: "Come posso accedere a GymPro?",
      answer:
        "Puoi accedere a GymPro tramite il sito web ufficiale o attraverso l'applicazione mobile dedicata, utilizzando le tue credenziali di accesso personali.",
    },
    {
      question: "GymPro offre strumenti per la pianificazione delle lezioni?",
      answer:
        "Sì, GymPro ti permette di creare e gestire gli orari delle lezioni, consentendo ai membri di prenotare in base alle loro preferenze.",
    },
    {
      question: "Come posso gestire le iscrizioni dei membri su GymPro?",
      answer:
        "GymPro ti consente di gestire facilmente le iscrizioni dei membri, inclusi i dettagli dell'abbonamento, le scadenze e i pagamenti.",
    },
    {
      question: "Posso personalizzare i programmi di allenamento per i membri?",
      answer:
        "Assolutamente, GymPro ti permette di creare programmi di allenamento personalizzati in base alle esigenze e agli obiettivi di ciascun membro.",
    },
    {
      question: "Come vengono gestiti i dati sensibili dei membri su GymPro?",
      answer:
        "GymPro adotta rigorose misure di sicurezza per proteggere i dati sensibili dei membri, garantendo il rispetto delle normative sulla privacy.",
    },
    {
      question:
        "Come funziona il processo di registrazione dei nuovi membri su GymPro?",
      answer:
        " I nuovi membri possono registrarsi su GymPro fornendo le informazioni necessarie e selezionando l'abbonamento desiderato.",
    },
    {
      question: "Cosa devo fare in caso di problemi tecnici su GymPro?",
      answer:
        " GymPro offre un servizio di supporto tecnico dedicato per risolvere qualsiasi problema o rispondere a domande.",
    },
    {
      question:
        "Come vengono gestite le cancellazioni delle iscrizioni su GymPro?",
      answer:
        "GymPro ti permette di impostare politiche di cancellazione e di gestire le richieste di cancellazione secondo le procedure stabilite.",
    },
    {
      question: "Quali sono i requisiti tecnici per utilizzare GymPro?",
      answer:
        "Per utilizzare GymPro, è sufficiente avere un dispositivo (computer o smartphone) con accesso a Internet e un browser web aggiornato.",
    },
    {
      question: " Posso tenere traccia delle entrate della palestra su GymPro?",
      answer:
        "Sì, GymPro potrebbe offrire strumenti per monitorare le entrate provenienti dalle iscrizioni della palestra.",
    },
    {
      question:
        "GymPro offre opzioni di accesso e abbonamento flessibili per i membri?",
      answer:
        "Sì, GymPro potrebbe consentire la creazione di diversi tipi di abbonamenti e pacchetti, offrendo flessibilità ai membri nella scelta dell'opzione più adatta.",
    },
    {
      question: "Come posso creare un account su GymPro?",
      answer:
        "Per creare un account su GymPro, visita il sito ufficiale e segui le istruzioni di registrazione. Sarà necessario fornire alcune informazioni personali e di contatto.",
    },
    {
      question: "Posso gestire più sedi o filiali della palestra su GymPro?",
      answer:
        "Sì, GymPro potrebbe offrire la possibilità di gestire più sedi o filiali della palestra, centralizzando le operazioni e semplificando la gestione.",
    },
    {
      question: "GymPro fornisce analisi sulle tendenze di frequenza?",
      answer:
        "Sì, GymPro potrebbe generare analisi che mostrano le tendenze di frequenza delle lezioni e delle attività, aiutandoti a prendere decisioni informate.",
    },
    {
      question: "Posso personalizzare le schede dei membri su GymPro?",
      answer:
        "Sì, GymPro potrebbe consentirti di aggiungere dettagli personali alle schede dei membri, come obiettivi di allenamento o note.",
    },
    {
      question:
        "Come vengono gestite le richieste di assistenza o suggerimenti da parte dei membri su GymPro?",
      answer:
        "GymPro potrebbe includere una funzione per inviare richieste di assistenza o suggerimenti, che verranno indirizzati al personale appropriato per il follow-up.",
    },
    {
      question:
        "Come posso ottenere assistenza tecnica in caso di problemi con GymPro?",
      answer:
        "In caso di problemi tecnici, puoi contattare il servizio di assistenza tecnica di GymPro tramite i canali di supporto indicati sulla piattaforma o sul sito ufficiale.",
    },
  ];

  const [openWindow, setOpenWindow] = useState({});

  const toggleFaq = (question) => {
    setOpenWindow((prevState) => ({
      ...prevState,
      [question]: !prevState[question],
    }));
  };

  return (
    <>
      {!loading && data && (
        <div className="flex p-6">
          <Sidebar
            name={data && data.role === "admin" ? data.company : data.username}
            email={data && data.email}
            isGym={data && data.role === "admin" ? true : false}
            isFaq={true}
          />

          <div className="flex flex-col grow-[1] mx-auto max-w-section ">
            <h2 className="text-secondary-100 text-3xl text-center pb-4">
              FAQ
            </h2>
            <div className="max-h-[90vh] overflow-y-auto scrollbar">
              {faqData.map((faqItem, index) => (
                <div
                  key={index}
                  className={`pb-5 ${
                    index === 0
                      ? "border-t-[1px] border-b-[1px]"
                      : "border-b-[1px]"
                  }  text-slate-700 pt-4`}
                >
                  <button
                    onClick={() => toggleFaq(faqItem.question)}
                    className=" w-full text-secondary-300 text-left"
                  >
                    <div className="flex justify-between items-center">
                      <span>{faqItem.question}</span>
                      <span>{openWindow[faqItem.question] ? "-" : "+"}</span>
                    </div>
                  </button>
                  {openWindow[faqItem.question] && (
                    <span className="text-slate-400">{faqItem.answer}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      {!data && (
        <div className="flex flex-col ">
          <Navbar />

          <div className="flex flex-col grow-[1] mx-auto w-[80%] mt-4">
            <h2 className="text-secondary-100 text-3xl text-center pb-4">
              FAQ
            </h2>
            <div className="max-h-[90vh] overflow-y-auto scrollbar ">
              {faqData.map((faqItem, index) => (
                <div
                  key={index}
                  className={`pb-5 ${
                    index === 0
                      ? "border-t-[1px] border-b-[1px]"
                      : "border-b-[1px]"
                  }  text-slate-700 pt-4 `}
                >
                  <button
                    onClick={() => toggleFaq(faqItem.question)}
                    className=" w-full text-secondary-300 text-left "
                  >
                    <div className="flex justify-between items-center">
                      <span>{faqItem.question}</span>
                      <span>{openWindow[faqItem.question] ? "-" : "+"}</span>
                    </div>
                  </button>
                  {openWindow[faqItem.question] && (
                    <span className="text-slate-400">{faqItem.answer}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
