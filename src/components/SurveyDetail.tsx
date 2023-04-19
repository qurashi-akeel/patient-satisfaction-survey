import type { Patient } from "@prisma/client";
import type { Dispatch, SetStateAction } from "react";
import { MdDelete } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { api } from "~/utils/api";

type SurveyDetailProps = {
  setShowModal: Dispatch<SetStateAction<Patient | null>>;
  showModal: Patient;
};

const SurveyDetail = (props: SurveyDetailProps) => {
  const {
    createdAt,
    fileNumber,
    medicalFacilitiesRating,
    overallComments,
    overallTreatmentRating,
    patientName,
    patientUnit,
  } = props.showModal;

  const deleteSurvey = api.patientSurvey.delete.useMutation();

  return (
    <div className="min-w-auto relative bg-gray-900 px-6 pb-6 sm:min-w-[30rem] md:min-w-[45rem]">
      <h2 className="my-4 text-2xl">Survey Details</h2>
      <div className="border-2 border-indigo-300">
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            File Number
          </p>
          <p className="p-2">{fileNumber}</p>
        </div>
        <hr className="border border-indigo-300" />
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            Patient Name
          </p>
          <p className="p-2">{patientName}</p>
        </div>
        <hr className="border border-indigo-300" />
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            Patient Unit
          </p>
          <p className="p-2">{patientUnit}</p>
        </div>
        <hr className="border border-indigo-300" />
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            Medical Facility Rating
          </p>
          <p className="p-2">{medicalFacilitiesRating}</p>
        </div>
        <hr className="border border-indigo-300" />
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            Overall Treatment Rating
          </p>
          <p className="p-2">{overallTreatmentRating}</p>
        </div>
        <hr className="border border-indigo-300" />
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            Created At
          </p>
          <p className="p-2">{createdAt.toDateString()}</p>
        </div>
        <hr className="border border-indigo-300" />
        <div className="flex justify-between text-lg">
          <p className="w-[40%] border-r-2 border-indigo-300 p-2 font-semibold text-indigo-200">
            Overall Comments
          </p>
          <p className="p-2">{overallComments}</p>
        </div>
      </div>
      <div>
        <div
          className="absolute right-16 top-2 rounded-full bg-red-500 p-0.5 text-white hover:bg-red-700"
          onClick={() => {
            props.setShowModal(null);
            return deleteSurvey.mutate({ fileNumber });
          }}
        >
          <MdDelete size={15} />
        </div>
        <div className="absolute right-6 top-2 rounded-full bg-yellow-300 p-0.5 text-black hover:bg-yellow-100">
          <RxCross2 size={15} onClick={() => props.setShowModal(null)} />
        </div>
      </div>
    </div>
  );
};
export default SurveyDetail;
