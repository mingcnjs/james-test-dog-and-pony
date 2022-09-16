type Prop = {
  children: React.ReactNode;
};

const Container = ({ children }: Prop) => {
  return <div className="flex justify-center">{children}</div>;
};

export default Container;
