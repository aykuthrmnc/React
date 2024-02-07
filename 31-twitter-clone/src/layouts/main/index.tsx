import { Outlet } from "react-router-dom";
import Sidebar from "../sidebar";
import Rightbar from "../rightbar";
import { useModal } from "~/store/modal/hooks";
import Modal from "~/modals";
import { useEffect } from "react";
import { useAppearance } from "~/store/appearance/hooks";

const MainLayout = () => {
  const modal = useModal();
  const appearance = useAppearance();

  useEffect(() => {
    if (appearance) {
      document.documentElement.style.setProperty("--background-primary", appearance.backgroundColor.primary);
      document.documentElement.style.setProperty(
        "--background-primary-alpha",
        appearance.backgroundColor.primary + "a6",
      );
      document.documentElement.style.setProperty("--background-secondary", appearance.backgroundColor.secondary);
      document.documentElement.style.setProperty("--background-third", appearance.backgroundColor.third);
      document.documentElement.style.setProperty("--background-modal", appearance.backgroundColor.modal);

      document.documentElement.style.setProperty("--color-primary", appearance.color.primary);
      document.documentElement.style.setProperty("--color-primary-alpha", appearance.color.primary + "12");
      document.documentElement.style.setProperty("--color-secondary", appearance.color.secondary);
      document.documentElement.style.setProperty("--color-base", appearance.color.base);
      document.documentElement.style.setProperty("--color-base-secondary", appearance.color.baseSecondary);

      document.documentElement.style.setProperty("--box-shadow", appearance.boxShadow);

      document.documentElement.style.setProperty("--font-size", appearance.fontSize + "px");
    }
  }, [appearance]);

  return (
    <div className="mx-auto flex w-[1265px]">
      {modal && <Modal />}
      <Sidebar />

      <main className="flex flex-1 gap-[30px]">
        <div className="max-w-[600px] flex-1 border-x border-[color:var(--background-third)]">
          <Outlet />
        </div>
        <Rightbar />
      </main>
    </div>
  );
};
export default MainLayout;
