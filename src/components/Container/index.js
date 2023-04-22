function Container({className, children, style}) {
  return (
    <div className={className} style={style}>
      <div className="pt-8 px-8">{children}</div>
    </div>
  );
}

export default Container;
