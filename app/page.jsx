import Feed from "@components/Feed";
import Nav from "@components/nav";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Nav />
      <h1 className="head_text text-center">
        Discover and share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center"> AI powered prompts</span>
      </h1>
      <p className="desc text-center">
        Prompt Wave is an AI powered prompting website
      </p>
      <Feed />
    </section>
  );
};

export default Home;
//rafc;
