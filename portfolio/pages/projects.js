import Layout from "../components/layout/index.js";

const Projects = () => {
  return (
    <>
      <Layout />
      <section>
        <h2>Projects</h2>
        <p>
          Here are some of the projects that I've been working on. You can see
          the code as well as the deployed project.
        </p>
      </section>
      <section className="flex">
        <div className="w-1/2">
          <img src="/nutrivurv.png" />
        </div>
        <div className="w-1/2 flex items-center">
          <p>
            Nutrivurv is an application that makes it easy for you to track your
            health and fitness. It features a way to track all of your food in a
            journal. We use the Edamam API to return all of the data. It also
            allows you to update your weight so that you can see your progress
            over time. Finally, it includes a blog so that users can share their
            progress.
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
