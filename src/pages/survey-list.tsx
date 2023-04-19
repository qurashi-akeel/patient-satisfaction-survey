import { useState } from "react";
import type { Patient } from "@prisma/client";
import { MdDelete, MdDisplaySettings } from "react-icons/md";
import { SurveyDetail, TablePlaceholder } from "~/components";
import { api } from "~/utils/api";

const SurveyList = () => {
  const [showModal, setShowModal] = useState<Patient | null>(null);

  const { data: surveys } = api.patientSurvey.getAll.useQuery();

  return (
    <main className="flex min-h-[95vh] flex-col items-center justify-center bg-gradient-to-br from-stone-900 to-indigo-950">
      {surveys ? (
        <div className="relative m-2 overflow-x-auto">
          {showModal ? (
            <div className="w-full text-left text-sm text-indigo-300">
              <SurveyDetail setShowModal={setShowModal} showModal={showModal} />
            </div>
          ) : (
            <table className="w-full text-left text-sm text-indigo-300">
              <thead className="bg-indigo-100 text-xs uppercase text-gray-700">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    File Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Patient Name
                  </th>
                  <th scope="col" className="hidden px-6 py-3 sm:table-cell">
                    Unit
                  </th>
                  <th scope="col" className="hidden px-6 py-3 md:table-cell">
                    Facility
                  </th>
                  <th scope="col" className="hidden px-6 py-3 md:table-cell">
                    Treatment
                  </th>
                  <th scope="col" className="hidden px-6 py-3 md:table-cell">
                    created
                  </th>
                  <th scope="col" className="hidden px-6 py-3 lg:table-cell">
                    comments
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {surveys?.map((survey) => (
                  <tr
                    key={survey.id}
                    className="border-b border-gray-900 bg-gray-800 hover:bg-gray-900"
                  >
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 text-white"
                    >
                      {survey.fileNumber}
                    </th>
                    <td className="px-6 py-4 capitalize">
                      {survey.patientName}
                    </td>
                    <td className="hidden px-6 py-4 capitalize sm:table-cell">
                      {survey.patientUnit}
                    </td>
                    <td className="hidden px-6 py-4 capitalize md:table-cell">
                      {survey.medicalFacilitiesRating}
                    </td>
                    <td className="hidden px-6 py-4 capitalize md:table-cell">
                      {survey.overallTreatmentRating}
                    </td>
                    <td className="hidden px-6 py-4 md:table-cell">
                      {survey.createdAt.toDateString()}
                    </td>
                    <td className="hidden px-6 py-4 lg:table-cell">
                      {survey.overallComments.substring(0, 8)}...
                    </td>
                    <td className="flex cursor-pointer gap-6 px-6 py-4">
                      <span className="text-indigo-200 hover:text-indigo-400">
                        <MdDisplaySettings
                          size={20}
                          onClick={() => setShowModal(survey)}
                        />
                      </span>
                      <span className="text-yellow-300 hover:text-yellow-500">
                        <MdDelete
                          size={20}
                          onClick={() => console.log("delete")}
                        />
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      ) : (
        <TablePlaceholder n={10} />
      )}
    </main>
  );
};
export default SurveyList;
