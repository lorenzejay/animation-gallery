import Layout from "@/components/Layout";

const Portraits = () => {
  return <div>portrait</div>;
};

export default Portraits;
Portraits.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
