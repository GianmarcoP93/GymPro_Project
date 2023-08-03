import React, { useState } from "react";
import Modal from "react-modal";

export const PersonalCard = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [showBody, setShowBody] = useState(true);

  Modal.setAppElement("#root");

  const scheda = [
    {
      giorno: "Giorno 1",
      exercises: [
        {
          id: 0,
          name: "Panca piana bil",
          img: "https://media.tenor.com/0hoNLcggDG0AAAAC/bench-press.gif",
        },
        {
          id: 1,
          name: "Panca inclinata bil",
          img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
        },
      ],
    },
    {
      giorno: "Giorno 2",
      exercises: [
        {
          id: 0,
          name: "Panca piana bil",
          img: "https://media.tenor.com/0hoNLcggDG0AAAAC/bench-press.gif",
        },
        {
          id: 1,
          name: "Panca inclinata bil",
          img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
        },
      ],
    },
    {
      giorno: "Giorno 3",
      exercises: [
        {
          id: 0,
          name: "Panca piana bil",
          img: "https://media.tenor.com/0hoNLcggDG0AAAAC/bench-press.gif",
        },
        {
          id: 1,
          name: "Panca inclinata bil",
          img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
        },
      ],
    },
  ];

  const closeModal = () => {
    setSelectedExercise(null);
  };

  const closeBody = () => {
    setShowBody(!showBody);
  };

  const openExerciseModal = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <>
      <div>
        <div className="flex justify-center mt-10">
          <h1 className="text-secondary-100 text-3xl">Scheda personale</h1>
        </div>
        <div className="bg-white-00  w-full mx-auto  flex flex-col gap-20">
          {scheda &&
            scheda.map((item, index) => {
              return (
                <table
                  className={`w-full bg-gray border border-slate-300 ${
                    showBody ? "transparent" : ""
                  }`}
                  key={index}
                >
                  <caption
                    className="border-slate-300 text-secondary-100 font-roboto font-bold text-xl py-5 bg-gray border rounded-t-xl"
                    onClick={closeBody}
                  >
                    <button
                      className="w-full text-3xl font-roboto font-bold"
                      onClick={closeBody}
                    >
                      {item.giorno}
                    </button>
                  </caption>
                  <thead>
                    <tr className="border-slate-300 text-secondary-100 font-roboto font-bold text-xl">
                      <th className="py-5 w-1/5">Esercizi</th>
                      <th className="w-1/5">Set</th>
                      <th className="w-1/5">Ripetizioni</th>
                      <th className="w-1/5">Rec</th>
                      <th className="w-1/5">Kg</th>
                    </tr>
                  </thead>
                  <tbody className="w-full font-montserrat border-t border-slate-300">
                    {showBody && (
                      <>
                        {item["exercises"] &&
                          item["exercises"].map((exercise) => {
                            console.log(exercise.id);
                            return (
                              <tr key={exercise.id}>
                                <td>
                                  <button
                                    onClick={() => openExerciseModal(exercise)}
                                    className="text-secondary-200 underline"
                                  >
                                    {exercise.name}
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                      </>
                    )}
                  </tbody>
                </table>
              );
            })}
        </div>

        <Modal
          isOpen={selectedExercise !== null}
          onRequestClose={closeModal}
          className="bg-transparent z-10 border-none flex justify-center items-center"
        >
          <div
            onClick={closeModal}
            className="fixed inset-0 cursor-pointer"
          ></div>
          <div className="h-screen flex justify-center items-center">
            {selectedExercise !== null && (
              <img
                src={selectedExercise.img}
                alt={selectedExercise.name}
                className="max-w-full content-center self-center text-center"
              />
            )}
          </div>
        </Modal>
      </div>
    </>
  );
};
