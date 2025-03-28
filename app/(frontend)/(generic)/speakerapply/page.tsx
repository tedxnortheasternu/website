import { useEffect } from "react";
import { useRouter } from "next/router";

const SpeakerApplyPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.replace("https://airtable.com/appfmGmk4yM44WDKh/shrqqY5VGETe2x7tk");
  }, [router]);

  return null;
};

export default SpeakerApplyPage;

