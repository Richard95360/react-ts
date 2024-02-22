import { Name } from "./Person.type";

type PersonListProps = {
  names: Name[];
};

export const PersonList = (props: PersonListProps) => {
  return (
    <div>
      {props.names.map((p) => (
        <h2 key={p.first}>
          {p.last} {p.last}
        </h2>
      ))}
    </div>
  );
};
