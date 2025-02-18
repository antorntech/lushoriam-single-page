import clsx from "clsx";

const Container = ({ children, className = "" }) => {
  return (
    <div className={clsx("mx-auto max-w-screen-xl px-4", className)}>
      {children}
    </div>
  );
};

const ContainerLarge = ({ children, className = "" }) => {
  return (
    <div className={clsx("mx-auto max-w-screen-2xl", className)}>
      {children}
    </div>
  );
};

const ContainerFluid = ({ children, className = "" }) => {
  return <div className={clsx("px-4", className)}>{children}</div>;
};

export { Container, ContainerLarge, ContainerFluid };

export default Container;
