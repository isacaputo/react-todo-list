export function isValidShape({ content, done, id }) {
  return (
    typeof content !== "undefined" &&
    typeof done !== "undefined" &&
    typeof id === "undefined"
  );
}
