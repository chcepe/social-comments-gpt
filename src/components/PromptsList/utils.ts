export const validate = (value: string) => {
  if (value.length <= 30) return "Prompt should be atleast 30 characters.";

  if (!value.includes("{postContent}"))
    return " You should include <span>{postContent}</span> on your prompt!";

  return "";
};
