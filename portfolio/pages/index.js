import Layout from "../components/layout/index.js";

const Index = ({ title, description, ...props }) => {
  return (
    <div>
      <Layout>
        <p className="text-lg">Hello, world!</p>
      </Layout>
    </div>
  );
};

export default Index;
