import Head from "next/head";
import styles from "../styles/Home.module.css";
import Layout from "../components/layout/index.js";

const Index = ({ title, description, ...props }) => {
  return (
    <div>
      <Layout>
        <p className="text-lg">Hello, world!</p>
        <p></p>
      </Layout>
    </div>
  );
};

export default Index;
