import { useRef, useState } from "react";
import { useClickAway } from "react-use";

const Search = () => {
  const [query, setQuery] = useState("");
  const [focus, setFocus] = useState(false);

  const ref = useRef();
  useClickAway(ref, () => {
    setFocus(false);
  });

  return (
    <div
      ref={ref}
      className="sticky top-0 z-10 mb-3 flex h-[3.313rem] min-h-[2rem] items-center bg-[color:var(--background-primary)]"
    >
      <label className="group relative flex h-[2.688rem] w-full items-center rounded-full border border-transparent bg-[color:var(--background-third)] focus-within:border-[color:var(--color-primary)] focus-within:bg-[color:var(--background-primary)]">
        <div className="pointer-events-none absolute left-0 top-0 flex h-full w-[3.5rem] items-center justify-center">
          <svg
            viewBox="0 0 24 24"
            className="h-[1.172rem] min-w-[2rem] text-[color:var(--color-base-secondary)] group-focus-within:text-[color:var(--color-primary)]"
          >
            <path
              fill="currentColor"
              d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          placeholder="Ara"
          className="h-full w-full rounded-full bg-transparent ps-[3.5rem] text-[0.938rem] outline-none placeholder:text-[color:var(--color-base-secondary)]"
          value={query}
          onFocus={() => setFocus(true)}
          //   onBlur={() => setFocus(false)}
          onChange={(e) => setQuery(e.target.value)}
        />
        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="invisible absolute right-3 top-1/2 flex h-[22px] w-[22px] min-w-[22px] -translate-y-1/2 items-center justify-center rounded-full bg-[color:var(--color-primary)] text-black group-focus-within:visible"
          >
            <svg viewBox="0 0 15 15" width={10} height={10}>
              <path
                fill="currentColor"
                d="M6.09 7.5L.04 1.46 1.46.04 7.5 6.09 13.54.04l1.42 1.42L8.91 7.5l6.05 6.04-1.42 1.42L7.5 8.91l-6.04 6.05-1.42-1.42L6.09 7.5z"
              ></path>
            </svg>
          </button>
        )}
      </label>
      {focus && (
        <div className="absolute -left-px top-full max-h-[calc(80vh-53px)] min-h-[100px] w-[350px] -translate-y-1 rounded-lg bg-[color:var(--background-primary)] text-center shadow-box">
          <p className="p-3 pt-5 leading-5 text-[color:var(--color-base-secondary)]">
            Kişileri, listeleri veya anahtar kelimeleri aramayı dene
          </p>
        </div>
      )}
    </div>
  );
};
export default Search;
