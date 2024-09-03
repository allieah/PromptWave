import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => {
  const { userID, prompt, tag } = await req.json();
  //can extract all data
  try {
    await connectToDB(); // we do everytime as it is an lambda fnc(it dies once the job is done)
    const newPrompt = new Prompt({
      creator: userID,
      prompt,
      tag,
    });
    await newPrompt.save();
    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response("Failed to create a new prompt", { status: 500 });
  }
};
