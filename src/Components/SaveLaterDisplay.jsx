import { useGlobal } from "../Context/context";
import { HorizCardSave } from "./Cards/horizCardSave";

export const SaveLaterDisplay = () => {
  const { state, dispatch } = useGlobal();
  return (
    <>
      {state.saveLater.length > 0 ? (
        state.saveLater.map((product) => <HorizCardSave product={product} />)
      ) : (
        <h1>Save something for later</h1>
      )}
    </>
  );
};
