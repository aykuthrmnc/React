import { ErrorMessage, useField } from "formik";
import { FiCheck } from "react-icons/fi";
import classNames from "classnames";

export default function Checkbox({ label, ...props }) {
  const [field, meta, helpers] = useField(props);

  return (
    <>
      <label className="flex gap-x-2 items-center text-sm cursor-pointer">
        <button
          onClick={() => helpers.setValue(!field.value)}
          className={classNames({
            "w-5 h-5 rounded border transition-all flex items-center justify-center": true,
            "border-gray-300 text-transparent": !field.value,
            "border-red-600": meta.error && meta.touched,
            "border-blue-600 bg-blue-600 text-white": field.value && (!meta.error || !meta.touched),
          })}
          type="button"
        >
          <FiCheck size={16} />
        </button>
        {label}
      </label>
      <ErrorMessage name={field.name} component="small" className="text-xs block mt-2 text-red-600" />
    </>
  );
}
