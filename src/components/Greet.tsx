type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>
        {props.isLoggedIn ? (
          `Welcome ${props.name} ! vous avez ${props.messageCount} message`
        ) : (
          <span>Bonjour Visiteur</span>
        )}
      </h2>
    </div>
  );
};
