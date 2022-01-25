import { useState, useEffect } from 'react';

export default function useGithub() {
  const [user, setUser] = useState({});
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    getUser();
    getRepos();
  }, []);

  const getUser = async (username) => {
    const response = await fetch('https://api.github.com/users/andresleao');
    const data = await response.json();
    setUser(data);
  };

  const getRepos = async (username) => {
    const response = await fetch(
      'https://api.github.com/users/andresleao/repos?per_page=25&sort=created:asc'
    );
    const repositories = await response.json();
    setRepositories(repositories);
  };

  return {
    user,
    repositories,
  };
}
