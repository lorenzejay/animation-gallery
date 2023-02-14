import AnimatedGallery from "@/components/AnimatedGallery";
import Layout from "@/components/Layout";
import { useAppState } from "@/utils/appReducer";

const Portraits = () => {
  const { orderedGallery } = useAppState();

  return <AnimatedGallery orderedGallery={orderedGallery} />;
};

export default Portraits;
Portraits.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
