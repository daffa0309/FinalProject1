import React, { Fragment, useState, useEffect } from "react";
import { setTopNews, clearTopNews } from "../actions/news";
import NewsList from "../components/NewsList";
import { connect } from "react-redux";
import TopNavCovid19 from "../layout/TopNavCovid19";

const Covid19 = ({ setTopNews, news, clearTopNews }) => {
  const [page, setPage] = useState(1);



  const handleLoadMore = () => {
    setPage(page + 1);
  };



  return (
    <Fragment>
      <TopNavCovid19 />
 
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

export default connect(mapStateToProps, { setTopNews, clearTopNews })(Covid19);
