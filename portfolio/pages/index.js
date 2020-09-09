import Layout from "../components/layout/index.js";
import SkylineSVG from "../components/svg/SkylineSVG.js";

const Index = ({ title, description, ...props }) => {
  return (
    <>
      <Layout />
      <section className="hero-top">
        <div className="bg-bg-gray-custom pt-12 pb-12">
          <div className="flex justify-around">
            <div className="w-2/5">
              <SkylineSVG />
            </div>
            <div className="w-2/5 self-center">
              <p className="text-white w-3/5 leading-relaxed text-xl">
                I am a detail oriented full stack web developer with a research
                background. When I'm not developing, you can find me reading,
                deep diving on new programming technologies, or running half
                marathons.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="projects-section bg-bg-gray-custom">
        <p className="text-white">My work</p>
        <div className="flex justify-around">
          <div className="w-1/3">
            <div className="w-3/4 pb-4">
              <img src="/nutrivurv.png" className="max-w-md h-56" />
            </div>
            <div className="w-3/4">
              <p className="text-white">
                Nutrivurv is an application that makes it easy for you to track
                your health and fitness. It features a way to track all of your
                food in a journal. We use the Edamam API to return all of the
                data. It also allows you to update your weight so that you can
                see your progress over time. Finally, it includes a blog so that
                users can share their progress.
              </p>
            </div>
          </div>
          <div className="w-1/3">
            <div className="w-3/4 pb-4">
              <img src="/spider_graph_chart.png" className="max-w-md h-56" />
            </div>
            <div className="w-3/4">
              <p className="text-white">
                Spider Graph is an application that makes it easy for users to
                create graphs of their data. They are able to add as many axis
                as they need to present their data. The back end consists of a
                REST API built using Node, Express, Knex and Postgres. Deployed
                to Heroku.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;

{
  /* <div className="bg-bg-gray-custom">

<p>
  Here are some of the projects that I've been working on. You can see
  the code as well as the deployed project.
</p>
<div className="flex justify-around">
  <div className="flex-col">
    <div className="w-1/3">
      <img src="/nutrivurv.png" />
    </div>
    <div className="w-1/3 flex items-center">
      <p className="text-white">
        Nutrivurv is an application that makes it easy for you to
        track your health and fitness. It features a way to track all
        of your food in a journal. We use the Edamam API to return all
        of the data. It also allows you to update your weight so that
        you can see your progress over time. Finally, it includes a
        blog so that users can share their progress.
      </p>
    </div>
  </div>
</div>

<div className="w-1/3">
  <img src="/spider_graph_chart.png" />
</div>
<div className="w-1/3 flex">
  <p className="text-white">
    Spider Graph is an application that makes it easy for users to
    create graphs of their data. They are able to add as many axis as
    they need to present their data. The back end consists of a REST
    API built using Node, Express, Knex and Postgres. Deployed to
    Heroku.
  </p>
</div>
</div> */
}
