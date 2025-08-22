import { memo, ReactElement, useCallback, useState } from "react";

import {
  //   IdvLanguage,
  load,
  SdkMode,
  version,
  SdkLoadResult,
  SdkOnSuccessResult,
  SdkOnFailureResult,
  SdkOnCloseResult,
} from "@ondato-public/idv-sdk";

const OndatoIdv = memo((): ReactElement => {
  const [onAgeSetupId, setOnAgeSetupId] = useState("");

  const [language, setLanguage] = useState("");

  const [sdkOnAge, setSdkOnAge] = useState<SdkLoadResult | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const loadHandlerOnage = useCallback(() => {
    try {
      const onAge = load({
        mode: SdkMode.Sandbox,
      });

      setSdkOnAge(onAge);
      setIsLoaded(true);
    } catch (error) {
      console.warn("OnageSdkLoadFailure", error);
      alert(`OnageSdkLoadFailure, ${error}`);
    }
  }, []);

  const beginHandlerOnAge = useCallback(async () => {
    try {
      if (sdkOnAge?.onAge.begin) {
        await sdkOnAge.onAge.begin({
          onAgeSetupId: onAgeSetupId.trim(),

          //   language: language.trim() as IdvLanguage,
          onSuccess: (props: SdkOnSuccessResult) => {
            console.log("onSuccess", { props });
            alert(`onSuccess, OnAge: ${props}`);
          },
          onFailure: (props: SdkOnFailureResult) => {
            console.log("onFailure", props);
            alert(`onFailure, OnAge: ${props}, reason: ${props}}`);
          },
          onClose: (props: SdkOnCloseResult) => {
            console.log("onClose ", props.id);
          },
        });
      }
    } catch (error) {
      console.warn("OnAgeSdkBeginFailure", error);
      alert(`OnAgeSdkBeginFailure, ${error}`);
    }
  }, [sdkOnAge?.onAge, onAgeSetupId, language]);

  const versionHandler = useCallback(() => {
    alert(version());
  }, []);

  const endHandlerOnAge = useCallback(() => {
    sdkOnAge?.onAge.end();
  }, [sdkOnAge]);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
      <div style={{ display: "flex", gap: 20 }}>
        <button type="button" disabled={isLoaded} onClick={loadHandlerOnage}>
          Load OnAge
        </button>
        <button type="button" onClick={versionHandler}>
          SDK version
        </button>
        <button type="button" disabled={!isLoaded} onClick={beginHandlerOnAge}>
          Begin On age
        </button>
        <button
          type="button"
          className="end-action"
          onClick={endHandlerOnAge}
          disabled={!isLoaded}
        >
          X
        </button>
        <button
          type="button"
          className="end-action"
          onClick={endHandlerOnAge}
          disabled={!isLoaded}
        >
          X
        </button>
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="OnAge setup Id"
          value={onAgeSetupId}
          onChange={(event) => setOnAgeSetupId(event.target.value)}
        />
        <input
          type="text"
          className="short-input"
          placeholder="en-GB (optional)"
          value={language}
          onChange={(event) => setLanguage(event.target.value)}
        />
      </div>
    </div>
  );
});

export default OndatoIdv;
