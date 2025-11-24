import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { writings } from '../data/writings';

const ArticleDetail = () => {
  const { id } = useParams();
  const article = writings.find(a => a.id === parseInt(id));

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/writing" className="text-primary-600 hover:text-primary-700">
            ← Back to Writing
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16">
      <Section className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Back Button */}
          <Link
            to="/writing"
            className="inline-flex items-center text-gray-600 hover:text-primary-600 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Writing
          </Link>

          {/* Article Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium">
                {article.category}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(article.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="text-sm text-gray-500">•</span>
              <span className="text-sm text-gray-500">
                {article.readTime}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {article.title}
            </h1>
          </motion.div>

          {/* Article Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 md:p-12">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{
                  __html: article.content
                    .split('\n')
                    .map((line) => {
                      if (line.startsWith('# ')) {
                        return `<h1 class="text-3xl font-bold text-gray-900 mt-8 mb-4">${line.slice(2)}</h1>`;
                      }
                      if (line.startsWith('## ')) {
                        return `<h2 class="text-2xl font-bold text-gray-900 mt-6 mb-3">${line.slice(3)}</h2>`;
                      }
                      if (line.startsWith('### ')) {
                        return `<h3 class="text-xl font-bold text-gray-900 mt-4 mb-2">${line.slice(4)}</h3>`;
                      }
                      if (line.trim() === '') {
                        return '<br />';
                      }
                      return `<p class="text-gray-600 leading-relaxed mb-4">${line}</p>`;
                    })
                    .join(''),
                }}
              />
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ArticleDetail;

