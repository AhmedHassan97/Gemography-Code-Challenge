import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import RepoCard from "../Components/CardComponent";
import ReactPaginate from "react-paginate";
import { intervalToDuration } from "date-fns";
import "./home.css";
const Home = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  // const [postsPerPage] = useState(30);
  //  const [offset, setOffset] = useState(1);
  //  const [posts, setAllPosts] = useState([]);

  const handlePageClick = (event) => {
    // const selectedPage = event.selected;
    setPage(page + 1);
  };

  const getRepos = async (
    pageNumber = 1,
    year = "2021",
    month = "04",
    day = "26"
  ) => {
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${year}-${month}-${day}&sort=stars&order=desc&page=${pageNumber}`
    );
    setRepos(response.data.items);
    setPageCount(Math.ceil(response.data.total_count / 30));
    console.log(response);
    console.log(response.data.items[0].owner.avatar_url);
  };

  useEffect(() => {
    getRepos();
  }, []);

  useEffect(() => {
    getRepos(page);
  }, [page]);

  return (
    <div>
      {repos?.map((repo) => (
        <RepoCard
          key={repo.id}
          repoName={repo.name}
          repoDesc={repo.description}
          starsCount={repo.stargazers_count}
          issuesCount={repo.open_issues_count}
          avatarUrl={repo.owner.avatar_url}
          createDate={repo.created_at}
        ></RepoCard>
      ))}
      <div className="paginationBar">
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={pageCount}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
};
export default Home;
