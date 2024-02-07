import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setBackgroundColor, setBoxShadow, setColor, setFontSize } from "~/store/appearance/actions";
import { colors, fontSizes } from "~/utils/consts";
import { useAppearance } from "~/store/appearance/hooks";
import classNames from "classnames";
import Button from "~/components/button";

const AppearanceModal = ({ close }: any) => {
  const { backgroundColor, color, fontSize } = useAppearance();

  const [fontSizePercent, setFontSizePercent] = useState(0);

  useEffect(() => {
    setTimeout(() => setFontSizePercent(document.querySelector(".active-font-size")?.offsetLeft + 3), 1);
  }, [fontSize]);

  return (
    <div className="w-[600px]">
      <h3 className="mb-3 mt-8 text-center text-[23px] font-extrabold leading-7">Görünümü özelleştir</h3>
      <div className="p-8 pt-0">
        <p className="mb-5 text-center text-[0.938rem] leading-5 text-[color:var(--color-base-secondary)]">
          Kullandığın yazı tipi boyutunu, rengi ve arka planı yönet. Bu ayarlar, bu tarayıcıdaki tüm X hesaplarını
          etkiler.
        </p>
        <div className="mx-8 mb-4">
          <div className="flex gap-3 rounded-2xl border border-[color:var(--background-third)] px-4 py-3">
            <img src="/profile.jpg" alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="flex flex-1 flex-col">
              <header className="mb-0.5 flex items-center leading-5">
                <div className="flex items-center font-bold">
                  X
                  <svg
                    viewBox="0 0 22 22"
                    width={18.75}
                    height={18.75}
                    className="ml-0.5 text-[color:var(--color-primary)]"
                  >
                    <path
                      fill="currentColor"
                      d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681s.075-1.299-.165-1.903c.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z"
                    ></path>
                  </svg>
                </div>
                <div className="ml-1 flex items-center text-[color:var(--color-base-secondary)]">@X · 20d</div>
              </header>
              <div className="leading-5 text-[color:var(--color-base)]">
                X'in merkezinde, tıpkı bunun gibi gönderi denen kısa mesajlar yatar. Gönderiler; fotoğraflar, videolar,
                bağlantılar, metinler, etiketler ve{" "}
                <Link to="/X" className="text-[color:var(--color-primary)] hover:underline">
                  @X
                </Link>{" "}
                gibi bahsetmeler içerebilir.
              </div>
            </div>
          </div>
        </div>
        <div className="grid gap-3">
          <section>
            <h6 className="mb-1 text-[13px] font-bold leading-5 text-[color:var(--color-base-secondary)]">
              Yazı tipi boyutu
            </h6>
            <div className="flex items-center gap-5 rounded-2xl bg-[color:var(--background-secondary)] p-4">
              <div className="text-[0.813rem]">Aa</div>
              <div className="relative h-1 flex-1 rounded-full bg-[color:var(--color-secondary)]">
                <div
                  style={{ width: fontSizePercent }}
                  className="absolute left-0 top-0 h-full rounded-full bg-[color:var(--color-primary)]"
                />
                <div className="absolute -left-[8px] -top-3.5 flex w-[calc(100%+16px)] justify-between">
                  {fontSizes.map((fs) => (
                    <button
                      type="button"
                      onClick={(e) => {
                        setFontSize(fs);
                        console.log(e.currentTarget.offsetLeft);
                      }}
                      className={classNames(
                        "relative flex h-8 w-8 items-center justify-center rounded-full before:absolute before:inset-0 before:rounded-full before:opacity-10 before:hover:bg-[color:var(--color-primary)]",
                        {
                          "active-font-size": fs === fontSize,
                        },
                      )}
                    >
                      <div
                        className={classNames("h-3 w-3 rounded-full bg-[color:var(--color-secondary)]", {
                          "h-4 w-4": fs === fontSize,
                          "!bg-[color:var(--color-primary)]": fs <= fontSize,
                        })}
                      />
                    </button>
                  ))}
                </div>
              </div>
              <div className="text-[1.25rem]">Aa</div>
            </div>
          </section>

          <section>
            <h6 className="mb-1 text-[13px] font-bold leading-5 text-[color:var(--color-base-secondary)]">Renk</h6>
            <div className="flex items-center justify-around rounded-2xl bg-[color:var(--background-secondary)] py-2">
              {colors.map((c, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setColor({
                      ...color,
                      ...c,
                    });
                  }}
                  style={{ "--bg": c.primary }}
                  className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[color:var(--bg)] text-white"
                >
                  {color.primary === c.primary && (
                    <svg viewBox="0 0 24 24" width={25}>
                      <path
                        fill="currentColor"
                        d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                      />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section>
            <h6 className="mb-1 text-[13px] font-bold leading-5 text-[color:var(--color-base-secondary)]">Arka plan</h6>
            <div className="mb-3 grid grid-cols-3 gap-2 rounded-2xl bg-[color:var(--background-secondary)] px-4 py-2">
              <button
                onClick={() => {
                  setColor({
                    ...color,
                    base: "#0f1419",
                    baseSecondary: "#536471",
                  });
                  setBackgroundColor({
                    name: "light",
                    primary: "#ffffff",
                    secondary: "#f7f9f9",
                    third: "#eff3f4",
                    modal: "#00000066",
                  });
                  setBoxShadow("rgba(101, 119, 134, 0.2) 0px 0px 15px, rgba(101, 119, 134, 0.15) 0px 0px 3px 1px");
                }}
                className={classNames(
                  "group flex h-[62px] items-center gap-1.5 rounded border border-white/10 bg-white pl-2 pr-3 font-bold text-[#0f1419]",
                  {
                    "!border-2 !border-[color:var(--color-primary)]": backgroundColor.name === "light",
                  },
                )}
              >
                <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full group-hover:bg-black/5">
                  <div
                    className={classNames(
                      "flex h-[20px] w-[20px] items-center justify-center rounded-full border-[2px] border-[#b9cad3]",
                      {
                        "!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white":
                          backgroundColor.name === "light",
                      },
                    )}
                  >
                    {backgroundColor.name === "light" && (
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="truncate">Varsayılan</div>
              </button>
              <button
                onClick={() => {
                  setColor({
                    ...color,
                    base: "#f7f9f9",
                    baseSecondary: "#8b98a5",
                  });
                  setBackgroundColor({
                    name: "dark",
                    primary: "#15202b",
                    secondary: "#1e2732",
                    third: "#263340",
                    modal: "#5b708366",
                  });
                  setBoxShadow("rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px");
                }}
                className={classNames(
                  "group flex h-[62px] items-center gap-1.5 rounded border border-white/10 bg-[#15202b] pl-2 pr-3 font-bold text-[#f7f9f9]",
                  {
                    "!border-2 !border-[color:var(--color-primary)]": backgroundColor.name === "dark",
                  },
                )}
              >
                <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full group-hover:bg-white/5">
                  <div
                    className={classNames(
                      "flex h-[20px] w-[20px] items-center justify-center rounded-full border-[2px] border-[#5c6e7e]",
                      {
                        "!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white":
                          backgroundColor.name === "dark",
                      },
                    )}
                  >
                    {backgroundColor.name === "dark" && (
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="truncate">Loş</div>
              </button>
              <button
                onClick={() => {
                  setColor({
                    ...color,
                    base: "#e7e9ea",
                    baseSecondary: "#71767b",
                  });
                  setBackgroundColor({
                    name: "darker",
                    primary: "#000000",
                    secondary: "#16181c",
                    third: "#212327",
                    modal: "#5b708366",
                  });
                  setBoxShadow("rgba(255, 255, 255, 0.2) 0px 0px 15px, rgba(255, 255, 255, 0.15) 0px 0px 3px 1px");
                }}
                className={classNames(
                  "group flex h-[62px] items-center gap-1.5 rounded border border-white/10 bg-black pl-2 pr-3 font-bold text-[#f7f9f9]",
                  {
                    "!border-2 !border-[color:var(--color-primary)]": backgroundColor.name === "darker",
                  },
                )}
              >
                <div className="flex h-[40px] w-[40px] flex-shrink-0 items-center justify-center rounded-full group-hover:bg-white/10">
                  <div
                    className={classNames(
                      "flex h-[20px] w-[20px] items-center justify-center rounded-full border-[2px] border-[#3e4144]",
                      {
                        "!border-[color:var(--color-primary)] !bg-[color:var(--color-primary)] text-white":
                          backgroundColor.name === "darker",
                      },
                    )}
                  >
                    {backgroundColor.name === "darker" && (
                      <svg viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
                        />
                      </svg>
                    )}
                  </div>
                </div>
                <div className="truncate">Işıklar kapalı</div>
              </button>
            </div>
          </section>
        </div>

        <div className="flex items-center justify-center pt-4">
          <Button onClick={close}>Bitti</Button>
        </div>
      </div>
    </div>
  );
};
export default AppearanceModal;
