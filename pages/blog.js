import { PageWrapper, Section, Text, Title } from '../components'
import {
  PostSearchInput,
  PostsList,
  useFilterPosts
} from '../domains/Blog/domains/Post'

import Image from 'next/image'
import { TagSelect } from '../domains/Blog/components'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'

export default function Blog() {
  // [ADDITIONAL_HOOKS]
  /* A hook that allows us to use the `t` function to translate strings. */
  const { t } = useTranslation('landing')
  const {
    filter,
    tags,
    categories,
    isAdvancedSearch,
    handleQueryChange,
    handleTagChange,
    handleCategoryChange,
    handleClear,
    toggleAdvancedSearch
  } = useFilterPosts()

  return (
    <div className="blog-page">
      {isAdvancedSearch ? (
        <Section id="advanced_search_section" dark className="advanced-search">
          <div className="row justify-content-between align-items-center advanced-search-header">
            <div className="col-auto">
              <Title as="h3" className="title">
                {t('blog.advanced_search_section.title')}
              </Title>
            </div>
            <div className="col-auto" onClick={toggleAdvancedSearch}>
              <div className="close-icon">
                <Image
                  src="/assets/close_light.svg"
                  alt="Search"
                  layout="fill"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="sort-input-wrapper">
                <PostSearchInput
                  onChange={handleQueryChange}
                  advancedSearchHidden
                />
              </div>
            </div>

            {!!categories?.length && (
              <div className="categories-select-wrapper col-12">
                <TagSelect
                  onChange={handleCategoryChange}
                  title={t('blog.advanced_search_section.categories_title')}
                  tags={categories}
                />
              </div>
            )}

            {!!tags?.length && (
              <div className="col-12">
                <TagSelect
                  onChange={handleTagChange}
                  title={t('blog.advanced_search_section.tags_title')}
                  tags={tags}
                />
              </div>
            )}
          </div>
        </Section>
      ) : (
        <PageWrapper pageMetaProps={{ title: t('head.blog.title') }}>
          <Section dark id="prime-section" className="prime-section">
            <div className="row">
              <div className="col-12">
                <Title>{t('blog.prime_section.title')}</Title>
              </div>
              <div className="col-12 col-md-7">
                <Text description className="subtitle">
                  {t('blog.prime_section.subtitle')}
                </Text>
              </div>
              <div className="col-12 col-md-7">
                <div className="sort-input-wrapper">
                  <PostSearchInput
                    value={filter?.query}
                    onClear={handleClear}
                    onSettings={toggleAdvancedSearch}
                    onChange={handleQueryChange}
                  />
                </div>
              </div>
            </div>
          </Section>
          <Section id="posts-section">
            <div className="row content">
              <div className="col-12">
                {filter.query && (
                  <div className="results-wrapper">
                    <div className="results-icon">
                      <Image
                        width="24px"
                        height="24px"
                        src={
                          filter.isTag
                            ? '/assets/tag-icon.svg'
                            : '/assets/search-icon.svg'
                        }
                        alt="Search"
                        layout="fixed"
                      />
                    </div>
                    <h2 className="mb-0 results-title">
                      {!filter.isTag && t('blog.prime_section.results_title')}
                      <span className="results-tag">{filter.query}</span>
                    </h2>
                  </div>
                )}
                <PostsList filter={filter.filters} />
              </div>
            </div>
          </Section>
        </PageWrapper>
      )}
    </div>
  )
}
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['landing']))
    }
  }
}
