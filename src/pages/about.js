import React from 'react';
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { githubUrl } from '../../config';

// 所有tag标签
class About extends React.Component {
  render() {
    return (
      <Layout>
        <div>
          <SEO title="About" />
          <h2>About</h2>
          <p>
            很多东西从别人口中讲出来，自己都会觉得很容易，就那么一点东西，没什么值得好说的，但其实知道一些东西不容易，讲出来让人听懂更不简单。
          </p>
          <p>
            工作中也有一些东西用到时候很熟悉，时间久了又很陌生，再次邂逅又要从头开始。
          </p>
          <p>
            在论坛、博客、公众号逛来逛去，合上电脑扔下手机，什么都没留下，这就是笔记存在的原因，只有总结才能有收获。
          </p>
          <p>
            希望在这里记录自己学习到的知识、遇到的问题，同时提高自己的表达和写作能力。
          </p>
          <ul style={{ marginTop: '1rem' }}>
            <li>
              <a href={githubUrl} target="blank">
                Github
              </a>
            </li>
          </ul>
        </div>
        <Footer hideAbout={true} />
      </Layout>
    );
  }
}

export default About;
