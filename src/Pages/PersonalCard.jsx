export const PersonalCard = () => {
  return (
    <>
      <div className="bg-white-00 border border-slate-300 rounded-xl w-full mx-auto bg-gray ">
        <table className="w-full ">
          <thead>
            <tr className="border-bot border-slate-300 text-secondary-100 font-roboto font-bold text-xl">
              <th className="py-5">Lista utenti</th>
              <th>Rinnovato il</th>
              <th>Scadenza scheda</th>
              <th>N. Tessera</th>
              <th>Scadenza abbonamento</th>
            </tr>
          </thead>
          <tbody className="w-full font-montserrat  ">
            <tr className="border-t border-slate-300 text-white-100 text-center">
              <td className="py-5">
                <button className="underline decoration-1 hover:text-secondary-300">
                  aaaa
                </button>
              </td>

              <td>bbbb</td>

              <td>
                <button className="underline decoration-1 hover:text-secondary-300 ">
                  ccccccccccccc
                </button>
              </td>

              <td>ccccccccccccc</td>

              <td>
                <button className="text-red-200 text-center underline decoration-1 font-montserrat  font-normal hover:text-red-300">
                  Scaduto
                </button>
              </td>

              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
