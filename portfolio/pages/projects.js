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
      <section className="flex flex-row-reverse">
        <div className="w-1/2">
          <img src="/spider_graph_chart.png" />
        </div>
        <div className="w-1/2 flex">
          <p>
            Spider Graph is an application that makes it easy for users to
            create graphs of their data. They are able to add as many axis as
            they need to present their data. The back end consists of a REST API
            built using Node, Express, Knex and Postgres. Deployed to Heroku.
          </p>
        </div>
      </section>
    </>
  );
};

export default Projects;
