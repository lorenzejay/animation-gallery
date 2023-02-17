import AnimatedGallery from "@/components/AnimatedGallery";
import Layout from "@/components/Layout";
import { useAppState } from "@/utils/appReducer";

const Portraits = () => {
  const { orderedGallery } = useAppState();

  return (
    <div className="overflow-hidden">
      <AnimatedGallery orderedGallery={orderedGallery} />
    </div>
  );
};

export default Portraits;
Portraits.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
