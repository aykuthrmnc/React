import { ErrorMessage, useField } from "formik";
import { FiCheck } from "react-icons/fi";
import classNames from "classnames";

export default function Radio({ label, options, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="grid gap-y-2">
      <div className="text-sm text-gray-600 block mb-1.5">{label}</div>
      {options.map((option, key) => (
        <label key={key} className="flex gap-x-2 items-center text-sm cursor-pointer">
          <button
            onClick={() => helpers.setValue(option.key)}
            className={classNames({
              "w-5 h-5 rounded-full border transition-all flex items-center justify-center": true,
              "border-gray-300": field.value !== option.key,
              "border-blue-600": field.value === option.key,
            })}
            type="button"
          >
            <div
              className={classNames({
                "w-3 h-3 rounded-full": true,
                "bg-blue-600": field.value === option.key,
              })}
            />
          </button>
          {option.value}
        </label>
      ))}
      <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
    </div>
  );
}
