import Button from "~/components/button";

const Premium = () => {
  return (
    <section className="mb-4 flex flex-col gap-2.5 rounded-2xl border border-[color:var(--background-secondary)] bg-[color:var(--background-secondary)] px-4 py-3">
      <h6 className="text-xl font-extrabold leading-6">Premium'a Abone Ol</h6>
      <p className="font-bold leading-5">
        Yeni özellikleri açmak için abone ol ve uygun olman durumunda reklam geliri payı kazan.
      </p>
      <div className="self-start">
        <Button>Abone ol</Button>
      </div>
    </section>
  );
};

export default Premium;
