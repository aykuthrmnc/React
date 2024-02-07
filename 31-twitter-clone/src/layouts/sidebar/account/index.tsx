import { Popover, Transition } from "@headlessui/react";
import { useAccount } from "~/store/auth/hooks";
import More from "./more";

const Account = () => {
  const account = useAccount();

  return (
    <div className="mt-auto">
      <Popover className="relative">
        <Popover.Button className="my-3 flex w-full items-center rounded-full p-3 text-left outline-none transition-colors hover:bg-[color:var(--background-third)]">
          <img
            src={account.avatar}
            className="h-10 w-10 flex-shrink-0 rounded-full"
            alt=""
          />
          <div className="mx-3">
            <h6 className="font-bold leading-[1.25rem]">{account.fullName}</h6>
            <div className="text-[color:var(--color-base-secondary)]">@{account.username}</div>
          </div>
          <svg viewBox="0 0 24 24" className="ml-auto h-[1.172rem]">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>
        <Transition
          enter="transition duration-200 ease-out"
          enterFrom="transform opacity-0"
          enterTo="transform opacity-100"
          leave="transition duration-200 ease-out"
          leaveFrom="transform opacity-100"
          leaveTo="transform opacity-0"
        >
          <Popover.Panel className="absolute bottom-[80px] left-1/2 z-[1] w-[300px] -translate-x-1/2 -translate-y-2 rounded-2xl bg-[color:var(--background-primary)] py-3 shadow-box">
            {({ close }) => <More close={close} />}
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  );
};
export default Account;
