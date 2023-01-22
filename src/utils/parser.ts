export const reelsContentBodyParser = (content: string) =>
  content.split("\n").slice(3, -4)?.join("\n");
