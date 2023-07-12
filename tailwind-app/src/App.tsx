import { useState } from "react";
import { FaCss3, FaHtml5, FaJs, FaMoon, FaPhp, FaSortDown, FaSun, FaTwitter, FaUserCircle } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { VscMenu } from "react-icons/vsc";
import Button from "./components/Button";
import Dropdown from "./components/Dropdown";
import useTheme from "./hooks/useTheme";

const App = () => {
  const { theme, changeTheme } = useTheme();
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => setSidebar(!sidebar);

  return (
    <div className="flex min-h-screen flex-col dark:bg-gray-900 dark:text-white">
      {/* HEADER */}
      <div className="flex h-15 w-full flex-shrink-0 items-center justify-between border-b border-gray-100 px-2 dark:border-gray-700 lg:px-3">
        <button onClick={toggleSidebar} className="block text-deneme dark:text-white lg:hidden">
          <VscMenu />
        </button>
        <button className="text-2xl text-deneme dark:text-white">
          Tailwind <span className="ml-2 hidden text-sm text-gray-400 lg:inline">v2.5.0</span>
        </button>
        <form action="" className="hidden w-1/2 lg:block">
          <input
            type="text"
            placeholder="Ara"
            className="h-10 w-full rounded bg-gray-100 px-3 placeholder-gray-600 dark:bg-gray-700 dark:placeholder-gray-300"
          />
        </form>
        {/* <div className="flex gap-2">
          <button
            onClick={changeTheme}
            className="bg-deneme text-white h-10 flex items-center gap-2 rounded px-4"
          >
            {theme == "light" ? (
              <>
                <FaMoon /> Koyu Mod
              </>
            ) : (
              <>
                <FaSun /> Açık Mod
              </>
            )}
          </button> */}
        {/* <button onClick={toggle} className="inline-flex h-10 items-center rounded bg-deneme px-5 text-white justify-self-end">
          Giriş yap
        </button> */}
        <div className="group relative">
          <button className="flex h-10 items-center gap-2 rounded text-sm">
            <FaUserCircle size="24" />
            <span className="hidden lg:inline">aykuthrmnc</span>
            <FaSortDown />
          </button>
          <div
            tabIndex={0}
            className="invisible absolute top-full right-0 z-50 w-44 space-y-1 rounded bg-gray-100 p-1 t-0 transition-all group-focus-within:visible group-focus-within:mt-1 group-focus-within:t-100 dark:bg-gray-700"
          >
            <button
              onClick={toggle}
              className="flex h-7 w-full items-center rounded px-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-500"
            >
              Profil
            </button>
            <button className="flex h-7 w-full items-center rounded px-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-500">
              Profil Düzenle
            </button>
            <button className="flex h-7 w-full items-center rounded px-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-500">
              Takipçiler
            </button>
            <button className="flex h-7 w-full items-center rounded px-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-500">
              Sorular
            </button>
            <button className="flex h-7 w-full items-center rounded px-3 text-sm transition-colors hover:bg-gray-200 dark:hover:bg-gray-500">
              Cevaplar
            </button>
            <button className="flex h-7 w-full items-center rounded px-3 text-sm text-red-500 transition-colors hover:bg-red-100 dark:hover:bg-red-600 dark:hover:text-white">
              Çıkış Yap
            </button>
          </div>
        </div>
        {/* </div> */}
      </div>

      <div className="flex calc-max-h-screen-15">
        {/* SIDEBAR */}
        <aside className={`sidebar${sidebar ? " active" : ""}`}>
          <nav className="space-y-1 pb-4">
            <button className="nav-link active">Ana Sayfa</button>
            <button className="nav-link">Akış</button>
            <button className="nav-link">Keşfet</button>
            <button className="nav-link">Makaleler</button>
            <button className="nav-link">Soru & Cevap</button>
          </nav>
          <nav className="space-y-1 pt-4">
            <button className="nav-link">HTML</button>
            <button className="nav-link">CSS</button>
            <button className="nav-link">JavaScript</button>
            <button className="nav-link">PHP</button>
            <button className="nav-link">MySQL</button>
            <button className="nav-link">Laravel</button>
            <button className="nav-link">Python</button>
          </nav>
          <div className="mt-auto pt-4">
            <button
              onClick={changeTheme}
              className="flex h-10 w-full items-center gap-2 rounded bg-gray-700 px-4 text-white transition-colors hover:bg-gray-600 dark:bg-white dark:text-gray-700"
            >
              {theme === "dark" ? (
                <>
                  <FaSun /> Açık Mod
                </>
              ) : (
                <>
                  <FaMoon /> Koyu Mod
                </>
              )}
            </button>
          </div>
        </aside>
        {/* MAIN */}
        <section className="flex-auto overflow-auto py-6 px-5 lg:px-10">
          <div className="mx-auto max-w-screen-xl">
            <h2 className="mb-3 text-3xl font-semibold leading-relaxed text-deneme dark:text-white">Lorem, ipsum dolor.</h2>
            <p className="mb-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, nemo? At est tenetur, numquam quisquam amet quidem enim officia
              dignissimos?
            </p>

            <div className="flex snap-x snap-mandatory grid-cols-2 gap-3 overflow-x-auto sm:grid lg:grid-cols-3 lg:gap-7 xl:grid-cols-5">
              <div className="col-span-1 flex-shrink-0 flex-grow-0 basis-full snap-center">
                <button className="slider-item group hover:!border-red-700 dark:border-gray-700">
                  <span className="relative mb-4 grid h-24 w-24 place-items-center rounded-full border border-red-500">
                    <span className="absolute -top-[10px] -right-[10px] -z-1 h-24 w-24 scale-90 rounded-full bg-red-500/10"></span>
                    <FaHtml5 className="text-red-700" size="40" />
                  </span>
                  <span className="inline-flex h-10 items-center bg-red-500 px-3 text-white transition-colors group-hover:bg-red-700">HTML</span>
                </button>
              </div>
              <div className="col-span-1 flex-shrink-0 flex-grow-0 basis-full snap-center">
                <button className="slider-item hover:!border-indigo-700 dark:border-gray-700">
                  <span className="relative mb-4 grid h-24 w-24 place-items-center rounded-full border border-indigo-500">
                    <span className="absolute -top-[10px] -right-[10px] -z-1 h-24 w-24 scale-90 rounded-full bg-indigo-500/10"></span>
                    <FaCss3 className="text-indigo-700" size="40" />
                  </span>
                  <span className="inline-flex h-10 items-center bg-indigo-500 px-3 text-white">CSS</span>
                </button>
              </div>
              <div className="col-span-1 flex-shrink-0 flex-grow-0 basis-full snap-center">
                <button className="slider-item hover:!border-yellow-700 dark:border-gray-700">
                  <span className="relative mb-4 grid h-24 w-24 place-items-center rounded-full border border-yellow-500">
                    <span className="absolute -top-[10px] -right-[10px] -z-1 h-24 w-24 scale-90 rounded-full bg-yellow-500/10"></span>
                    <FaJs className="text-yellow-700" size="40" />
                  </span>
                  <span className="inline-flex h-10 items-center bg-yellow-500 px-3 text-white">JavaScript</span>
                </button>
              </div>
              <div className="col-span-1 flex-shrink-0 flex-grow-0 basis-full snap-center">
                <button className="slider-item hover:!border-indigo-700 dark:border-gray-700">
                  <span className="relative mb-4 grid h-24 w-24 place-items-center rounded-full border border-indigo-500">
                    <span className="absolute -top-[10px] -right-[10px] -z-1 h-24 w-24 scale-90 rounded-full bg-indigo-500/10"></span>
                    <FaPhp className="text-indigo-700" size="40" />
                  </span>
                  <span className="inline-flex h-10 items-center bg-indigo-500 px-3 text-white">PHP</span>
                </button>
              </div>
              <div className="col-span-1 flex-shrink-0 flex-grow-0 basis-full snap-center">
                <button className="slider-item hover:!border-red-700 dark:border-gray-700">
                  <span className="relative mb-4 grid h-24 w-24 place-items-center rounded-full border border-red-500">
                    <span className="absolute -top-[10px] -right-[10px] -z-1 h-24 w-24 scale-90 rounded-full bg-red-500/10"></span>
                    <GrMysql className="text-red-700" size="40" />
                  </span>
                  <span className="inline-flex h-10 items-center bg-red-500 px-3 text-white">MySQL</span>
                </button>
              </div>
            </div>

            <div className="bg-gradient-to-br from-twitter to-blue-600  mt-5 flex flex-col items-center gap-3 rounded-md p-4 text-white lg:flex-row">
              <div className="flex w-20 flex-shrink-0 justify-center">
                <FaTwitter size="50" />
              </div>
              <div>
                <h6 className="mb-1 text-xl">
                  Lorem <strong className="font-semibold">ipsum</strong> dolor sit amet consectetur.
                </h6>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione suscipit atque sunt.</p>
                <button className="mt-4 inline-flex h-11 items-center rounded bg-white px-5 text-black">Lorem, ipsum.</button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <div className={`modal${modal ? " active" : ""}`}>
        <div className="modal-content">
          <h3 className="mb-4 text-2xl">Giriş yap</h3>
          <button onClick={toggle} className="inline-flex h-10 items-center rounded bg-deneme px-6 text-white">
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
