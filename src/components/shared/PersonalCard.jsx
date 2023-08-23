import React, { useState } from "react";
import Modal from "react-modal";
import { TitleCard } from "./TitleCard";
import { ButtonCloseWindow } from "./ButtonCloseWindow";
import clsx from "clsx";

export const PersonalCard = () => {
  const [selectedExercise, setSelectedExercise] = useState(null);

  Modal.setAppElement("#root");

  const scheda = [
    {
      giorno: "Giorno 1",
      exercises: [
        {
          id: 0,
          name: "Panca piana bil",
          img: "https://media.tenor.com/0hoNLcggDG0AAAAC/bench-press.gif",
          set: "4",
          rep: "12-10-8-6",
          rec: "60'",
          kg: "50kg",
        },
        {
          id: 1,
          name: "Panca inclinata bil",
          img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
          set: "4",
          rep: "8-8-6-6",
          rec: "80'",
          kg: "45kg",
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
          set: "4",
          rep: "12-10-8-6",
          rec: "60'",
          kg: "50kg",
        },
        {
          id: 1,
          name: "Panca inclinata bil",
          img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
          set: "4",
          rep: "8-8-6-6",
          rec: "80'",
          kg: "45kg",
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
          set: "4",
          rep: "12-10-8-6",
          rec: "60'",
          kg: "50kg",
        },
        {
          id: 1,
          name: "Panca inclinata bil",
          img: "https://hips.hearstapps.com/menshealth-uk/main/assets/incline-bench-press.gif?crop=1.00xw:0.845xh;0,0.137xh&resize=980:*",
          set: "4",
          rep: "8-8-6-6",
          rec: "80'",
          kg: "45kg",
        },
      ],
    },
  ];

  const [showBody, setShowBody] = useState(Array(scheda.length).fill(true));

  const closeModal = () => {
    setSelectedExercise(null);
  };

  const closeBody = (index) => {
    setShowBody((prevStates) => {
      const updatedStates = [...prevStates];
      updatedStates[index] = !updatedStates[index];
      return updatedStates;
    });
  };

  const openExerciseModal = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <>
      <div className="mx-5 flex flex-col gap-10 ">
        <ButtonCloseWindow />
        <TitleCard text="Scheda personale" />
        <div className="bg-white-00  w-full mx-auto  flex flex-col gap-20 ">
          {scheda &&
            scheda.map((item, index) => {
              return (
                <div
                  className="bg-white-00 border border-slate-300 rounded-xl w-full mx-auto overflow-hidden bg-gray  "
                  key={index}
                >
                  <table
                    className={`w-full bg-gray border-collapse rounded-b-xl `}
                  >
                    <caption
                      className={clsx(
                        "text-secondary-100 font-roboto font-bold text-xl py-5 bg-gray border-b border-slate-100",
                        !showBody[index] && "border-none"
                      )}
                    >
                      <button
                        className="w-full text-3xl font-roboto font-bold"
                        onClick={() => closeBody(index)}
                      >
                        {item.giorno}
                      </button>
                    </caption>
                    {showBody[index] && (
                      <thead className="border-b border-collapse border-slate-100">
                        <tr className=" text-secondary-100 font-roboto font-bold text-xl  border-slate-100">
                          <th className="py-5 w-1/5">Esercizi</th>
                          <th className="w-1/5">Set</th>
                          <th className="w-1/5">Ripetizioni</th>
                          <th className="w-1/5">Rec</th>
                          <th className="w-1/5">Kg</th>
                        </tr>
                      </thead>
                    )}
                    {showBody[index] && (
                      <>
                        <tbody className="w-full font-montserrat [&>*:last-child]:border-none ">
                          {item["exercises"] &&
                            item["exercises"].map((exercise) => {
                              return (
                                <tr
                                  key={exercise.id}
                                  className="  text-center border-b border-slate-100  text-white-100"
                                >
                                  <td>
                                    <button
                                      onClick={() =>
                                        openExerciseModal(exercise)
                                      }
                                      className="  py-5 underline  hover:text-secondary-300  decoration-1 "
                                    >
                                      {exercise.name}
                                    </button>
                                  </td>
                                  <td>{exercise.set}</td>
                                  <td>{exercise.rep}</td>
                                  <td>{exercise.rec}</td>
                                  <td>{exercise.kg}</td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </>
                    )}
                  </table>
                </div>
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
