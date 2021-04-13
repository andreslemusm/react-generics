import warning from "warning"
import { useEffect, useRef } from "react";

export const useControlledSwitchWarning = (
  controlPropValue: unknown | null,
  controlPropName: string,
  componentName: string
): void => {
  const isControlled = controlPropValue != null;
  const { current: wasControlled } = useRef(isControlled);

  useEffect(() => {
    warning(
      !(isControlled && !wasControlled),
      `\`${componentName}\` is changing from uncontrolled to be controlled. Components should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled \`${componentName}\` for the lifetime of the component. Check the \`${controlPropName}\` prop.`
    );
    warning(
      !(!isControlled && wasControlled),
      `\`${componentName}\` is changing from controlled to be uncontrolled. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled \`${componentName}\` for the lifetime of the component. Check the \`${controlPropName}\` prop.`
    );
  }, [componentName, controlPropName, isControlled, wasControlled]);
};
