function Project({title, children}) {
  return (
    <div className="mt-8">
      <h1 className="text-2xl">{title}</h1>

      {children}
    </div>
  );
}

export default Project;
