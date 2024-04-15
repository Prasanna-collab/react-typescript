type PersonProps = {
  name: {
    first: string;
    last: string;
  };
  age: {
    year: number;
  };
};

export const Person = (props: PersonProps) => {
  return (
    <div>
      {props.name.first} {props.name.last} is {props.age.year} years old.
    </div>
  );
};
