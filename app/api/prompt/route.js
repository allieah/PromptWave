import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
  try {
    await connectToDB();
    // Fetch prompts and populate creator field
    const prompts = await Prompt.find({}).populate("creator");
    console.log("Fetched Prompts:", prompts); // Log the fetched prompts
    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Failed to fetch prompts:", error); // Log any error
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
