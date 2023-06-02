import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

import BackLink from '@/components/BackLink';

import styles from '@styles/Index.module.scss';

if (typeof window !== 'undefined') {
  const theme = localStorage.getItem('theme');

  document.documentElement.setAttribute('data-theme', theme);
}

export async function getStaticPaths() {
  try {
    const files = fs.readdirSync('public/posts');

    const paths = files.map(fileName => ({
      params: {
        slug: fileName.replace('.md', ''),
      },
    }));

    return {
      paths,
      fallback: 'blocking',
    };
  } catch (error) {
    console.error(error);

    return {
      paths: [],
      fallback: false,
    };
  }
}

export async function getStaticProps({params: {slug}}) {
  try {
    const fileName = fs.readFileSync(`public/posts/${slug}.md`, 'utf-8');
    const {data: frontmatter, content} = matter(fileName);

    return {
      props: {
        frontmatter,
        content,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {},
    };
  }
}

const Project = ({frontmatter, content}) => {
  return (
    <div className={styles.container}>
      <section className={styles.projectTitle}>
        <BackLink />
        <h1>{frontmatter.shortName}&nbsp;</h1>
        <span className={styles.description}>
          {frontmatter.shortDescription}
        </span>
      </section>

      <div className={styles.tags}>
        {frontmatter.tags.map(tag => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>

      <p className={styles.hook}>{frontmatter.description}</p>

      <article
        className={styles.projectDescription}
        dangerouslySetInnerHTML={{__html: md().render(content)}}
      />
    </div>
  );
};

export default Project;
