import PlayButton from "@/components/elements/play.button";
import Ceremony from "@/components/partials/ceremony";
import Cover from "@/components/partials/cover";
import Persons from "@/components/partials/persons";
import Wishes from "@/components/partials/wishes";
import usePlayMusic from "@/hooks/usePlayMusic";
import useAOS from "@/hooks/useAOS";
import Head from "next/head";
import { useRouter } from "next/router";
import { config } from "@/constants/config";

const Home = () => {
  useAOS();
  const router = useRouter();
  const { togglePlay, play, audioRef } = usePlayMusic();

  const title = "Manusa Yadnya Mepandes";
  const name = router.query.to || "";
  const folder = "mepandes";
  const theme = config.theme.floral;

  return (
    <>
      <Head>
        {name ? (
          <title>
            {title} | {name}
          </title>
        ) : (
          <title>{title}</title>
        )}
        <meta property="og:title" content={title} key="title" />
      </Head>
      <PlayButton audioRef={audioRef} play={play} togglePlay={togglePlay} />
      <Cover togglePlay={togglePlay} name={name} />
      <Persons />
      <Ceremony />
      <Wishes folder={folder} theme={theme} />
    </>
  );
};

export default Home;
