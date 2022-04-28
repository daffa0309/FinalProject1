import React, { Fragment, useState, useEffect } from "react";
import { setTopNews, clearTopNews } from "../actions/news";
import NewsList from "../components/NewsList";
import { connect } from "react-redux";
import TopNavProgramming from "../layout/TopNavProgramming";

const Programming = ({ setTopNews, news, clearTopNews }) => {
  const [page, setPage] = useState(1);



  const handleLoadMore = () => {
    setPage(page + 1);
  };



  return (
    <Fragment>
      <TopNavProgramming />
 
      <NewsList
        newsItemsTotal={news.newsItemsTotal}
        loading={news.newsLoading}
        newsItems={news.newsItems}
        theme={news.theme}
        loadMore={() => handleLoadMore()}
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  news: state.news,
});

export default connect(mapStateToProps, { setTopNews, clearTopNews })(Programming);
