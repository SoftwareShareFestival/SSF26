export default function HomeVideoSection() {
  return (
    <section className="bg-[#f5f3f8] pb-24 md:pb-32">
      <div className="mx-auto w-full max-w-[var(--content-max)] px-[var(--content-pad)]">
        <div className="mx-auto w-full max-w-5xl overflow-hidden rounded-sm">
          <div className="aspect-video w-full">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/rO1_2oN-0lA"
              title="SSF video"
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
