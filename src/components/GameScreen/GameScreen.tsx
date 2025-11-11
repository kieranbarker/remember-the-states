import Form, { type FormProps } from "../Form/Form";
import Stats, { type StatsProps } from "../Stats/Stats";
import Stopwatch, { type StopwatchProps } from "../Stopwatch/Stopwatch";

export interface GameScreenProps {
  formProps: FormProps;
  statsProps: StatsProps;
  stopwatchProps: Omit<StopwatchProps, "isRunning">;
}

export default function GameScreen({
  formProps,
  statsProps,
  stopwatchProps,
}: GameScreenProps) {
  return (
    <>
      <Stopwatch {...stopwatchProps} isRunning={true} />
      <Stats {...statsProps} />
      <Form {...formProps} />
    </>
  );
}
