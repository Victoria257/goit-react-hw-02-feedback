import Feedback from "./Feedback/Feedback";

export const App = () => {
  return (
    <div>

      <div>
        <Feedback  initialGood={0}
        initialNeutral= {0}
        initialBad={0}/>
      </div>
     
    </div>
  );
};
