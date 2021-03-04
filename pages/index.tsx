import { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import navigation from "../data/navigation";
import metas from "../data/metas";
import projects from "../data/projects";
import HomeIntro from "../components/HomeIntro";
import ShowCase from "../components/ShowCase";
import CallToActionCenter from "../components/CallToActionCenter";
import { Props as PostType } from "../components/Post";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const blogPath = path.relative(__dirname, "/content/blog");

type Props = {
  posts: Array<PostType>;
};

const Home: NextPage<Props> = ({ posts }) => (
  <div>
    <Head>
      <title>{metas.siteTitle}</title>
      <meta name="description" content={metas.siteDescription} />

      <meta property="og:title" content={metas.siteTitle} />
      <meta property="og:description" content={metas.siteDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.thibaud-duthoit.fr/" />
      <meta name="twitter:creator" content="@DuthoitThibaud" />
    </Head>

    <HomeIntro navItems={navigation} />

    <main>
      <ShowCase />

      <Projects
        id="references"
        heading="Références"
        title="Développements Full-stack"
        subtitle="Quelques projets"
        projects={projects}
      />

      <CallToActionCenter title="On travaille ensemble ?" />

    </main>

    <Footer />
  </div>
);

export const getStaticProps: GetStaticProps = async (context) => {
  const blogSlugs = fs.readdirSync(blogPath);
  const posts: Array<PostType> = [];

  for (let i = 0; i < blogSlugs.length; i++) {
    const slug = blogSlugs[i];
    const content = await import(`../content/blog/${slug}`);
    const markdown = matter(content.default);

    posts.push({
      href: `/blog/${slug.slice(0, -3)}`,
      title: markdown.data.title || "",
      picture: markdown.data.picture || "",
      pictureAlt: markdown.data.pictureAlt || "",
      excerpt: markdown.data.excerpt || "",
      publishDate: markdown.data.date || "",
      timeReading: markdown.data.timeReading || "",
    });
  }

  const props: Props = {
    posts: posts
      .sort((a, b) => ("" + b.publishDate).localeCompare(a.publishDate))
      .slice(0, 3),
  };

  return {
    props,
  };
};

export default Home;
