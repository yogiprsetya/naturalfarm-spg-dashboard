export const numericOnly = (event: KeyboardEvent) => {
  if (event.key.length === 1 && isNaN(Number(event.key))) {
    event.preventDefault();
  }
};
