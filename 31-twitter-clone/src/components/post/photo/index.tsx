const Photo = ({ photos }: any) => {
  switch (photos.length) {
    case 1:
      return (
        <div className="mt-3">
          <img
            src={photos[0]}
            alt=""
            className="max-h-[510px] rounded-2xl border border-[color:var(--background-third)] object-cover"
          />
        </div>
      );

    case 2:
      return (
        <div className="mt-3 grid h-[288px] grid-cols-2 gap-0.5 overflow-hidden rounded-2xl border border-[color:var(--background-third)]">
          <img src={photos[0]} alt="" className="h-full w-full object-cover" />
          <img src={photos[1]} alt="" className="h-full w-full object-cover" />
        </div>
      );

    case 3:
      return (
        <div className="mt-3 grid h-[288px] grid-cols-2 gap-0.5 overflow-hidden rounded-2xl border border-[color:var(--background-third)]">
          <img src={photos[0]} alt="" className="h-full w-full object-cover" />
          <div className="flex h-full flex-col gap-0.5">
            <div className="relative flex-1 flex-shrink-0">
              <img src={photos[1]} alt="" className="absolute inset-0 h-full w-full flex-shrink-0 object-cover" />
            </div>
            <div className="relative flex-1 flex-shrink-0">
              <img src={photos[2]} alt="" className="absolute inset-0 h-full w-full flex-shrink-0 object-cover" />
            </div>
          </div>
        </div>
      );

    case 4:
      return (
        <div className="mt-3 grid h-[286px] grid-cols-2 gap-0.5 overflow-hidden rounded-2xl border border-[color:var(--background-third)]">
          <img src={photos[0]} alt="" className="h-[141px] w-full object-cover" />
          <img src={photos[1]} alt="" className="h-[141px] w-full object-cover" />
          <img src={photos[2]} alt="" className="h-[141px] w-full object-cover" />
          <img src={photos[3]} alt="" className="h-[141px] w-full object-cover" />
        </div>
      );
  }
};

export default Photo;
