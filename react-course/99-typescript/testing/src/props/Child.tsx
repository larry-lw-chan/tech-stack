interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

function Child({ color, onClick, children }: ChildProps) {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click Me</button>
    </div>
  );
}

Child.displayName = "Child";

export default Child;
