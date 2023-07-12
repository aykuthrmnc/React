import Popover from "./popover";
import classNames from 'classnames'

const App = () => {
  return (
    <div className="p-5">
      <Popover as="div" className="relative">
        <Popover.Button
          className={({ open }) =>
            classNames("h-10 rounded bg-blue-500 px-4 text-sm font-medium text-white", {
              "border border-blue-500 bg-white text-blue-500": open,
            })
          }
        >
          Buraya Tıkla
        </Popover.Button>
        <Popover.Panel className="absolute top-full z-10 translate-y-1 w-[200px] bg-white border border-blue-500 rounded">
          {({ close }) => (
            <>
              Sonradan görünecek
              <br />
              <button onClick={close}>KAPAT</button>
            </>
          )}
        </Popover.Panel>
      </Popover>

      <Popover>
        <Popover.Button className={({ open }) => `button ${open ? "open" : ""}`}>
          {({ open }) => (
            <>
              Tıkla
              {open && " [x]"}
            </>
          )}
        </Popover.Button>
        <Popover.Panel>
          {({ close }) => (
            <>
              Sonradan görünecek
              <br />
              <button onClick={close}>KAPAT</button>
            </>
          )}
        </Popover.Panel>
      </Popover>
    </div>
  );
};
export default App;
