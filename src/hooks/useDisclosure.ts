import { useCallback, useState } from "react";

/**
 * Custom hook used to help handle common `open`, `close`, or `toggle` scenarios.
 * It can be used to control feedback component such as `Modals`, `Drawers`.
 */
export const useDisclosure = (
  defaultOpen = false
): {
  isOpen: boolean;
  toggle: React.Dispatch<React.SetStateAction<boolean>>;
  open: () => void;
  close: () => void;
} => {
  const [isOpen, toggle] = useState(defaultOpen);

  const close = useCallback(() => toggle(false), []);

  const open = useCallback(() => toggle(true), []);

  return { isOpen, toggle, open, close };
};
