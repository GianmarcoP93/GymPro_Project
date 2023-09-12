import React, { useState } from "react";
import { TitleCard } from "../components/shared/TitleCard";
import { ButtonCloseWindow } from "../components/shared/ButtonCloseWindow";
import { OrangeButton } from "../components/shared/OrangeButton";
import { SubscriptionInput } from "../components/shared/SubscriptionInput";
import { serverURL } from "../constants/constants";
import clsx from "clsx";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateUserCard } from "../store/dataSlice";
import { toast } from "react-toastify";

export const ModalProfiloAdmin = ({ id, closeModal, onError, resetError }) => {
  const token = useSelector((state) => state.auth.adminToken);
  const dispatch = useDispatch();

  const [card, setCard] = useState({
    expiry: "",
    card: [
      {
        day: 1,
        exercises: [
          {
            name: "",
            set: "",
            rep: 0,
            rec: "",
            kg: 0,
          },
        ],
      },
    ],
  });
  console.log(card);

  const handleCardChange = (dayIndex, exerciseIndex, name, value) => {
    const updatedCard = { ...card };
    const updatedExercise = {
      ...updatedCard.card[dayIndex].exercises[exerciseIndex],
    };
    updatedExercise[name] = value;

    updatedCard.card[dayIndex].exercises[exerciseIndex] = updatedExercise;

    setCard(updatedCard);
  };

  const handleRemoveExercise = (dayIndex) => {
    setCard((state) => {
      const updatedCard = state.card.map((item, i) => {
        if (i === dayIndex) {
          return {
            ...item,
            exercises:
              item.exercises.length <= 1
                ? item.exercises
                : item.exercises.slice(0, -1),
          };
        }
        return item;
      });
      return { ...state, card: updatedCard };
    });
  };

  const handleAddExercise = (dayIndex) => {
    setCard((state) => {
      const updatedCard = state.card.map((prevItem, i) => {
        if (i === dayIndex) {
          const newExercise = {
            name: "",
            set: "",
            rep: 0,
            rec: "",
            kg: 0,
          };

          const updatedExercises = [...prevItem.exercises, newExercise];

          return {
            ...prevItem,
            exercises: updatedExercises,
          };
        }
        return prevItem;
      });
      return { ...state, card: updatedCard };
    });
  };

  const handleAddDay = () => {
    setCard((state) => {
      const newDay = state.card.length + 1;

      const newExercise = {
        name: "",
        set: "",
        rep: 0,
        rec: "",
        kg: 0,
      };

      const updatedCard = [
        ...state.card,
        { day: newDay, exercises: [newExercise] },
      ];

      return { ...state, card: updatedCard };
    });
  };

  const handleRemoveDay = () => {
    setCard((state) => {
      const updatedCard = state.card.slice(0, state.card.length <= 1 ? 1 : -1);
      return { ...state, card: updatedCard };
    });
  };

  const notifyError = (error) => {
    toast.error(error, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const notifySuccess = () => {
    toast.success("Scheda aggiornata con successo!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const handleSubmit = async () => {
    resetError();
    try {
      await axios({
        url: `${serverURL}/api/admins/createCard/${id}`,
        method: "PATCH",
        data: card,
        headers: { authorization: `Bearer ${token}` },
      });

      dispatch(updateUserCard({ id, card }));
      notifySuccess();
      closeModal();
    } catch (error) {
      onError(error);
      notifyError(error.response?.data?.message);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-10 max-h-[100vh]">
        <ButtonCloseWindow path="/admin/manage" func={closeModal} />
        <TitleCard text="Nuova scheda" />
        <div className="flex flex-col gap-10">
          {card.card.map((item, dayIndex) => {
            return (
              <div
                key={dayIndex}
                className="bg-white-00 border border-slate-300 rounded-xl w-full mx-auto bg-gray "
              >
                <table className="w-full">
                  <thead className="border-b border-white-100">
                    <tr className="text-secondary-100 font-roboto font-bold text-xl flex items-center">
                      <th className="py-5 flex-1">
                        Giorno {item.day} esercizi
                      </th>
                      <th className="flex-1">Set</th>
                      <th className="flex-1">Ripetizioni</th>
                      <th className="flex-1">Recupero</th>
                      <th className="flex-1">Kg</th>
                    </tr>
                  </thead>
                  <tbody className="w-full font-montserrat">
                    {Array.from(
                      { length: item.exercises.length },
                      (_, exerciseIndex) => (
                        <tr
                          className="flex items-center  border-b border-white-100"
                          key={exerciseIndex}
                        >
                          <td className="flex justify-center flex-1 py-5 ">
                            <select
                              className={clsx(
                                "font-semibold font-montserrat rounded-md pl-1 bg-gray text-white-100 outline-none border border-white-100 appearance-none",
                                item.exercises[exerciseIndex]?.name === "" &&
                                  "text-[#9ca3af]"
                              )}
                              name="name"
                              value={item.exercises[exerciseIndex]?.name}
                              onChange={() =>
                                handleCardChange(
                                  dayIndex,
                                  exerciseIndex,
                                  event.target.name,
                                  event.target.value
                                )
                              }
                            >
                              <option
                                className="text-[#9ca3af] font-semibold pt-10"
                                value=""
                              >
                                Seleziona esercizio
                              </option>
                              <option
                                className="text-red-600 font-semibold"
                                disabled
                              >
                                Petto
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Panca piana bilanciere"
                              >
                                Panca piana bilanciere
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Panca inclinata bilanciere"
                              >
                                Panca inclinata bilanciere
                              </option>
                              <option
                                className="text-red-600 font-semibold"
                                disabled
                              >
                                Bicipiti
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Curl alternati manubri"
                              >
                                Curl alternati manubri
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Curl bilanciere"
                              >
                                Curl bilanciere
                              </option>
                              <option
                                className="text-red-600 font-semibold"
                                disabled
                              >
                                Spalle
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Distensioni con manubri"
                              >
                                Distensioni con manubri
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Alzate laterali"
                              >
                                Alzate laterali
                              </option>
                              <option
                                className="text-red-600 font-semibold"
                                disabled
                              >
                                Gambe
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Squat"
                              >
                                Squat
                              </option>
                              <option
                                className="text-white-100 font-semibold"
                                value="Leg press"
                              >
                                Leg press
                              </option>
                            </select>
                          </td>
                          <td className="flex-1 flex justify-center">
                            <SubscriptionInput
                              placeholder="Inserisci set"
                              name="set"
                              value={item.exercises[exerciseIndex]?.set}
                              onInput={() =>
                                handleCardChange(
                                  dayIndex,
                                  exerciseIndex,
                                  event.target.name,
                                  event.target.value
                                )
                              }
                            />
                          </td>
                          <td className="flex-1 flex justify-center">
                            <SubscriptionInput
                              placeholder="Inserisci ripetizioni"
                              type="number"
                              name="rep"
                              value={item.exercises[exerciseIndex]?.rep}
                              onInput={() =>
                                handleCardChange(
                                  dayIndex,
                                  exerciseIndex,
                                  event.target.name,
                                  Number(event.target.value)
                                )
                              }
                            />
                          </td>
                          <td className="flex-1 flex justify-center">
                            <SubscriptionInput
                              placeholder="Inserisci recupero"
                              name="rec"
                              value={item.exercises[exerciseIndex]?.rec}
                              onInput={() =>
                                handleCardChange(
                                  dayIndex,
                                  exerciseIndex,
                                  event.target.name,
                                  event.target.value
                                )
                              }
                            />
                          </td>
                          <td className="flex-1 flex justify-center">
                            <SubscriptionInput
                              placeholder="Inserisci kg"
                              name="kg"
                              type="number"
                              value={item.exercises[exerciseIndex]?.kg}
                              onInput={() =>
                                handleCardChange(
                                  dayIndex,
                                  exerciseIndex,
                                  event.target.name,
                                  Number(event.target.value)
                                )
                              }
                            />
                          </td>
                        </tr>
                      )
                    )}
                  </tbody>
                </table>
                <div className="flex gap-6 justify-center py-5 ">
                  <OrangeButton
                    type="button"
                    text="Aggiungi esercizio"
                    func={() => handleAddExercise(dayIndex)}
                  />
                  <OrangeButton
                    type="button"
                    text="Rimuovi esercizio"
                    func={() => handleRemoveExercise(dayIndex)}
                  />
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row justify-end w-full gap-6">
          <SubscriptionInput
            text="Inserisci scadenza scheda"
            name="expiry"
            value={card.expiry}
            type="date"
            addStyle={true}
            onInput={() => {
              const { name, value } = event.target;
              setCard((state) => {
                return { ...state, [name]: value };
              });
            }}
          />
          <button
            onClick={handleAddDay}
            className="border rounded-lg py-1 px-1 border-slate-300 text-white-100 font-montserrat font-normal bg-gray"
          >
            Aggiungi giorno
          </button>
          <button
            onClick={handleRemoveDay}
            className="border rounded-lg py-1 px-1 border-slate-300 text-white-100 font-montserrat font-normal bg-gray"
          >
            Rimuovi giorno
          </button>
        </div>
        <div className="flex justify-end">
          <OrangeButton type="submit" text="Salva" func={handleSubmit} />
        </div>
      </div>
    </>
  );
};
