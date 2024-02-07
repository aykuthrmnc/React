import { Popover } from "@headlessui/react";
import { Link } from "react-router-dom";
import { numberFormat } from "~/utils/formats";

interface Props {
  item: {
    title: string;
    topic: {
      type: string;
      value: string;
    };
    postCount?: number;
  };
}

const Topic = ({ item }: Props) => {
  return (
    <Link to="/" className="relative px-4 py-3 transition-colors hover:bg-[color:var(--background-third)]">
      <div className="text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)]">{item.title}</div>
      <div className="mt-0.5 text-[0.938rem] font-bold leading-5">
        {item.topic.type === "tag" && "#"}
        {item.topic.value}
      </div>
      {item?.postCount && (
        <div className="mt-1 text-[0.813rem] leading-4 text-[color:var(--color-base-secondary)]">
          {numberFormat(item?.postCount)} posts
        </div>
      )}
      <Popover className="absolute right-2 top-1.5">
        <Popover.Button className="flex h-[34.75px] w-[34.75px] items-center justify-center rounded-full outline-none transition-colors hover:bg-[color:var(--color-primary)1a] hover:text-[color:var(--color-primary)]">
          <svg viewBox="0 0 24 24" className="h-[1.172rem]">
            <path
              fill="currentColor"
              d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"
            />
          </svg>
        </Popover.Button>
        <Popover.Panel className="absolute right-0 top-2 z-[1] grid w-[24rem] overflow-hidden rounded-xl bg-[color:var(--background-primary)] shadow-box">
          <button
            type="button"
            className="flex items-center gap-3 px-4 py-3 text-left text-[0.938rem] leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            <svg viewBox="0 0 24 24" className="h-[1.172rem]">
              <path
                fill="currentColor"
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              />
            </svg>
            İlgimi çekmiyor
          </button>
          <button
            type="button"
            className="flex items-center gap-3 px-4 py-3 text-left text-[0.938rem] leading-5 transition-colors hover:bg-[color:var(--background-secondary)]"
          >
            <svg viewBox="0 0 24 24" className="h-[1.172rem]">
              <path
                fill="currentColor"
                d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z"
              />
            </svg>
            Bu gündem başlığı zararlı veya spam içeriyor
          </button>
        </Popover.Panel>
      </Popover>
    </Link>
  );
};
export default Topic;
