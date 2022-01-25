import * as S from './styled';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../Header/Header';
import GitRepositoryList from '../GitRepositoryList/GitRepositoryList';
import RepositoryDetails from '../RepositoryDetails/RepositoryDetails';

import useGithub from '../../hooks/useGithub';

function Layout() {
  const { user, repositories } = useGithub();

  return (
    <Router>
      <S.Container>
        <Header />
        <S.ListContainer>
          <Routes>
            <Route
              path="/"
              element={
                <GitRepositoryList user={user} repositories={repositories} />
              }
            />
            <Route
              path="/details/:id"
              element={<RepositoryDetails repositories={repositories} />}
            />
          </Routes>
        </S.ListContainer>
      </S.Container>
    </Router>
  );
}

export default Layout;
