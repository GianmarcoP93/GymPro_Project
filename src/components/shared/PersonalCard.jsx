import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import { TitleCard } from "./TitleCard";
import { ButtonCloseWindow } from "./ButtonCloseWindow";
import clsx from "clsx";
import { useSelector } from "react-redux";

export const PersonalCard = () => {
  const data = useSelector((state) => state.data.me);
  const loading = useSelector((state) => state.data.userLoading);
  const [card, setCard] = useState(null);

  const [selectedExercise, setSelectedExercise] = useState(null);

  const [showBody, setShowBody] = useState(
    Array(card && card.length).fill(true)
  );

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

  useEffect(() => {
    setCard(data?.cardInfo?.card);
  }, [data]);

  console.log(card);
  return (
    <>
      {!loading && data && (
        <div className="p-6 flex flex-col gap-10 ">
          <ButtonCloseWindow path="../dashboard" />
          <TitleCard text="Scheda personale" />
          <div className="bg-white-00  w-full mx-auto  flex flex-col gap-20 ">
            {!loading &&
              card &&
              card.map((item, index) => {
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
                          Giorno {item.day}
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
      )}
    </>
  );
};
