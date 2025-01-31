import { faker } from "@faker-js/faker";
import { useCallback, useState } from "react";

export const generateWords = (count: number) => {
  return faker.word.words(count).toLowerCase();
};


export const useWords = (count: number) => {
  const [words, setWords] = useState<string>(generateWords(count));

  const updateWords = useCallback(() => {
    setWords(generateWords(count));
  }, [count]);
  return { words, updateWords };
};
