import { useEffect, useState } from "react";

const EMOJI_MATCH = /:[a-zA-Z_\-0-9]{2,}(?! )$/g;

export const useEmoji = ({ input }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [partialMatch, setPartialMatch] = useState(null);
  const resetMatch = () => {
    setPartialMatch(null);
  };
  const close = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    const match = input.match(EMOJI_MATCH);
    if (match?.length) {
      setIsOpen(true);
      setPartialMatch(match[0]);
    } else {
      setIsOpen(false);
      setPartialMatch(null);
    }
  }, [input]);

  return {
    isOpen,
    partialMatch,
    resetMatch,
    close,
  };
};
