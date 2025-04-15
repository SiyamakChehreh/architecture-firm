import ImageSlider from "../components/ImageSlider";

export default function ProjectsPage() {
  return (
    <section id="projects" className="h-screen w-screen">
      <div className="h-screen w-screen grid grid-cols-2 gap-5 m-10">
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
        <ImageSlider />
      </div>
    </section>
  );
}
