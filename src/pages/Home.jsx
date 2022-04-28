import React, { Fragment, useState, useEffect } from "react";
import CategorySourceSearchForm from "../components/CategorySourceSearchForm";
import { setTopNews, clearTopNews } from "../actions/news";
import NewsList from "../components/NewsList";
import TopNav from "../layout/TopNav";
import { connect } from "react-redux";

const Home = ({ setTopNews, news, clearTopNews }) => {
  const [page, setPage] = useState(1);
  const [categorySourceUrl, setCategorySourceUrl] = useState("");
  const [type, setType] = useState("category");
  const [country, setCountry] = useState("id");
  const [category, setCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("covid");

  const handleCategorySourceSearch = (categorySourceUrl) => {
    setPage(1);
    setCategorySourceUrl(categorySourceUrl);
  };
  const handleLoadMore = () => {
    setPage(page + 1);
    handleCategorySourceSearch(categorySourceUrl);

  };

  useEffect(() => {

    if (categorySourceUrl) {
      const url = `top-headlines?country=${country}&category=${category}&sources=&q=${searchQuery}`;
      setTopNews(url, page);
    }
    return () => {
      clearTopNews();
    };
  }, [categorySourceUrl, page]);

  return (
    <Fragment>
      <TopNav />

      <NewsList
        newsItemsTotal={news.newsItemsTotal}
        loading={news.newsLoading}
        newsItems={news.newsItems}
        theme={news.theme}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { setTopNews, clearTopNews })(Home);
