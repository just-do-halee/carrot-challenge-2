"use server";

export async function handleForm(_: any, formData: FormData) {
  const password = formData.get("password");
  return {
    messages: [password === "12345" ? "Correct password" : "Wrong password"],
  };
}
