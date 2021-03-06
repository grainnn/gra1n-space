import React from 'react';
import { Link, graphql } from 'gatsby';
import get from 'lodash/get';

import '../utils/post.css';
import Bio from '../components/Bio';
import Layout from '../components/Layout';
import TagIcon from '../components/TagIcon';
import Comment from '../components/Comment';
import SEO from '../components/SEO';
import Footer from '../components/Footer';
import { formatPostDate } from '../utils/helpers';
import { rhythm } from '../utils/typography';

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.markdownRemark');
    const { previous, next } = this.props.pageContext;

    const html = post.html;

    return (
      <Layout>
        <SEO title={post.frontmatter.title} slug={post.fields.slug} />
        <main>
          <article>
            <header style={{ marginBottom: rhythm(1) }}>
              <h1
                style={{
                  color: 'var(--textTitle)',
                }}
              >
                {post.frontmatter.title}
              </h1>
              <div className="content-title">
                <span style={{ marginRight: rhythm(1), fontFamily: 'serif' }}>
                  {formatPostDate(post.frontmatter.date)}
                </span>
                <TagIcon />
                <Link
                  to={`/tag/${post.frontmatter.tag}`}
                  className="tag"
                  style={{ marginLeft: rhythm(1 / 4) }}
                >
                  {post.frontmatter.tag}
                </Link>
              </div>
            </header>
            <div
              className="content-body"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </main>
        <aside>
          <hr style={{ marginBottom: rhythm(1) }} />

          <Bio />

          <nav style={{ marginTop: rhythm(1 / 2) }}>
            <ul
              style={{
                display: 'flex',
                // flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
                marginLeft: 0,
              }}
              className="bottom-article_nav"
            >
              <li style={{ flex: 1 }}>
                {previous && (
                  <Link
                    to={previous.fields.slug}
                    rel="prev"
                    style={{ marginRight: 20 }}
                  >
                    &lt;&lt; {previous.frontmatter.title}
                  </Link>
                )}
              </li>
              <li style={{ flex: 1, textAlign: 'right' }}>
                {next && (
                  <Link to={next.fields.slug} rel="next">
                    {next.frontmatter.title} &gt;&gt;
                  </Link>
                )}
              </li>
            </ul>
          </nav>
        </aside>

        <Comment
          title={post.frontmatter.title}
          tag={post.frontmatter.tag}
          url={post.fields.slug}
        />

        <Footer />
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tag
      }
      fields {
        slug
      }
    }
  }
`;
