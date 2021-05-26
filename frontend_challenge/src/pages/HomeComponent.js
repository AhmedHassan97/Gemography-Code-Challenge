import React from "react";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import RepoCard from "../Components/CardComponent";
import { sub, format } from "date-fns";

import "./home.css";
const Home = () => {
  const [repos, setRepos] = useState([]);
  const [page, setPage] = useState(1);

  const loader = useRef(null);

  const handleObserver = (entities) => {
    const target = entities[0];
    if (target.isIntersecting) {
      setPage((page) => page + 1);
    }
  };
  const getRepos = async (pageNumber = 1) => {
    const date = format(
      sub(new Date(), {
        months: 1,
      }),
      "yyyy/MM/dd"
    ).split("/");
    const response = await axios.get(
      `https://api.github.com/search/repositories?q=created:>${date[0]}-${date[1]}-${date[2]}&sort=stars&order=desc&page=${pageNumber}`
    );
    setRepos((repos) => repos.concat(response.data.items));
  };

  useEffect(() => {
    getRepos();
  }, []);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1,
    };
    const observer = new IntersectionObserver(handleObserver, options);
    if (loader.current) {
      observer.observe(loader.current);
    }
  }, [repos]);

  useEffect(() => {
    getRepos(page);
  }, [page]);

  return (
    <div>
      {repos?.map((repo, index) => (
        <>
          <RepoCard
            key={repo.id}
            repoName={repo.name}
            repoDesc={repo.description}
            starsCount={repo.stargazers_count}
            issuesCount={repo.open_issues_count}
            avatarUrl={repo.owner.avatar_url}
            createDate={repo.created_at}
            user={repo.owner.login}
          ></RepoCard>
          {index === repos?.length - 5 && <div ref={loader}></div>}
        </>
      ))}
    </div>
  );
};
export default Home;
