import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { api } from "~/utils/api";

type FormValues = {
  patientName: string;
  fileNumber: number;
  patientUnit: string;
  overallTreatment: string;
  medicalFacilities: string;
  overallComments: string;
};

const SurveyForm = () => {
  const { mutate, isLoading, isSuccess } = api.patientSurvey.create.useMutation(
    {}
  );

  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      patientName: "",
      fileNumber: 0, // 0 will be default value for file number
      patientUnit: "",
      overallTreatment: "",
      medicalFacilities: "",
      overallComments: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log({ data });
    alert("You Entered: \n\n" + JSON.stringify(data, null, 4));
    const res = mutate({
      patientName: data.patientName,
      fileNumber: data.fileNumber,
      patientUnit: data.patientUnit,
      medicalFacilitiesRating: data.medicalFacilities,
      overallTreatmentRating: data.overallTreatment,
      overallComments: data.overallComments,
    });
    console.log(res);
  };

  return (
    <div>
      {isLoading && <p>Saving data please wait...</p>}
      {isSuccess && toast.success("Saved successfully")}
      <form
        className="flex flex-col gap-6 px-8 py-10 sm:border-2 md:border-indigo-300"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div>
          <label htmlFor="patientName">Patients Name:</label>
          <div className="ml-0 flex flex-col">
            <input
              autoComplete="off"
              type="text"
              id="patientName"
              placeholder="Enter Patients Name"
              {...register("patientName", {
                required: {
                  value: true,
                  message: "Patient Name is required.",
                },
                pattern: {
                  value: /^([a-zA-Z]+\s)*[a-zA-Z]+$/,
                  message: "Invalid name",
                },
                validate: (fieldValue) => {
                  return (
                    fieldValue !== "admin" || "Please enter different name"
                  );
                },
              })}
            />
            <span className="input-error">
              {errors.patientName?.message || <span>&nbsp;</span>}
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="fileNumber">File Number:</label>
          <div className="ml-0 flex flex-col">
            <input
              autoComplete="off"
              type="text"
              id="fileNumber"
              {...register("fileNumber", {
                valueAsNumber: true,
                required: {
                  value: true,
                  message: "File Number is required.",
                },
                validate: (fieldValue) => {
                  return fieldValue > 999 || "Please enter valid file number";
                },
              })}
              placeholder="Enter File Number"
            />
            <span className="input-error">
              {errors.fileNumber?.message || <span>&nbsp;</span>}
            </span>
          </div>
        </div>

        <div>
          <label htmlFor="patientUnit">Patients Unit:</label>
          <div className="ml-0 flex flex-col">
            <select
              id="patientUnit"
              {...register("patientUnit", {
                required: "Please choose the patient unit from options.",
              })}
            >
              <option value="">Select from dropdown</option>
              <option value="surgery">Surgery</option>
              <option value="medicine">Medicine</option>
              <option value="pathology">Pathology</option>
              <option value="gynaecology">Gynaecology</option>
              <option value="anaesthesia">Anaesthesia</option>
              <option value="ENT">ENT</option>
              <option value="orthopedics">Orthopedics</option>
            </select>
            <span className="input-error">
              {errors.patientUnit?.message || <span>&nbsp;</span>}
            </span>
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="overAllTreatment">Overall Treatment Rating:</label>
          <span className="input-error">
            {errors.overallTreatment?.message || <span>&nbsp;</span>}
          </span>
          <div>
            <label htmlFor="otr-very-satisfied">Very Satisfied:</label>
            <input
              type="radio"
              id="otr-very-satisfied"
              value="very satisfied"
              {...register("overallTreatment", {
                required: {
                  value: true,
                  message: "Overall Treatment rating is required.",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="otr-satisfied">Satisfied:</label>
            <input
              type="radio"
              id="otr-satisfied"
              value="satisfied"
              {...register("overallTreatment", {
                required: {
                  value: true,
                  message: "Overall Treatment rating is required.",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="otr-not-satisfied">Not Satisfied:</label>
            <input
              type="radio"
              id="otr-not-satisfied"
              value="not satisfied"
              {...register("overallTreatment", {
                required: {
                  value: true,
                  message: "Overall Treatment rating is required.",
                },
              })}
            />
          </div>
        </div>

        <br />

        <div className="flex flex-col">
          <label htmlFor="medicalFacilities">Medical Facilities Rating:</label>
          <span className="input-error">
            {errors.medicalFacilities?.message || <span>&nbsp;</span>}
          </span>
          <div>
            <label htmlFor="mf-very-satisfied">Very Satisfied:</label>
            <input
              type="radio"
              id="mf-very-satisfied"
              value="very satisfied"
              {...register("medicalFacilities", {
                required: {
                  value: true,
                  message: "Medical Facilities rating is required.",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="mf-satisfied">Satisfied:</label>
            <input
              type="radio"
              id="mf-satisfied"
              value="satisfied"
              {...register("medicalFacilities", {
                required: {
                  value: true,
                  message: "Medical Facilities rating is required.",
                },
              })}
            />
          </div>

          <div>
            <label htmlFor="mf-not-satisfied">Not Satisfied:</label>
            <input
              type="radio"
              id="mf-not-satisfied"
              value="not satisfied"
              {...register("medicalFacilities", {
                required: {
                  value: true,
                  message: "Medical Facilities rating is required.",
                },
              })}
            />
          </div>
        </div>

        <div>
          <label htmlFor="overallComments">Overall Comments:</label>
          <div className="ml-0 flex flex-col">
            <textarea
              autoComplete="off"
              id="overallComments"
              placeholder="Enter your overall feedback"
              {...register("overallComments", {
                required: {
                  value: true,
                  message: "Overall comment is required.",
                },
                minLength: {
                  value: 15,
                  message: "Please write atleast 15 characters.",
                },
              })}
            />
            <span className="input-error">
              {errors.overallComments?.message || <span>&nbsp;</span>}
            </span>
          </div>
        </div>

        <div className="mt-8 flex justify-center">
          <input
            type="reset"
            onClick={() => {
              setError("patientName", { message: "" });
              setError("fileNumber", { message: "" });
              setError("patientUnit", { message: "" });
              setError("overallTreatment", { message: "" });
              setError("overallComments", { message: "" });
              setError("medicalFacilities", { message: "" });
            }}
            className="btn bg-red-600 text-center hover:bg-red-500"
          />
          <input
            type="submit"
            className={`btn text-center ${
              isLoading ? "cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};
export default SurveyForm;
