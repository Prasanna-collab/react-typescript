type GreetProps = {
  name: string;
  count?: number; //for optional value
  isLoggedIn?: boolean;
};



export const Greets = (props: GreetProps) => {
  return (
    <div>
      <h1>
        {props.isLoggedIn ? (
          <>
            hello {props.name}, you have {props.count} messages left!
          </>
        ) : (
          <>welcome guest</>
        )}
      </h1>
    </div>
  );
};
