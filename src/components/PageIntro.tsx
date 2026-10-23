export default function PageIntro({ title, description }: { title: string; description: string }) {
  return (
    <>
      <h1 id="page-header">{title}</h1>
      <div id="page-description">{description}</div>
    </>
  );
}
