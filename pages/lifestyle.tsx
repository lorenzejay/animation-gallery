import AnimatedGallery from "@/components/AnimatedGallery";
import Layout from "@/components/Layout";
import { useAppDispatch, useAppState } from "@/utils/appReducer";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

const Lifestyle = () => {
  const router = useRouter();
  const { orderedGallery } = useAppState();

  const dispatch = useAppDispatch();
  useEffect(() => {
    const findVividIndex = orderedGallery.findIndex(
      (g) => g.slug === router.pathname
    );

    const newOrder = [...orderedGallery];
    newOrder[0] = newOrder.splice(findVividIndex, 1, newOrder[0])[0];
    // newOrder.splice(0, 0, orderedGallery[findVividIndex]);
    if (newOrder) {
      // @ts-ignore
      dispatch({ type: "GALLERY_REORDERED", reorderedGallery: newOrder });
    }
  }, [dispatch, router.pathname]);

  return <AnimatedGallery orderedGallery={orderedGallery} />;
};

Lifestyle.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
export default Lifestyle;
