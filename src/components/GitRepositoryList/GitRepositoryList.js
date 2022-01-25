import * as S from './styled';
import { FaUserCircle, FaInfoCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function GitRepositoryList({ user, repositories }) {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <S.Container>
      <S.Title>
        <FaUserCircle size={35} style={{ marginRight: '.5rem' }} />
        {user.name}
      </S.Title>

      <S.List>
        {repositories.map((repository) => (
          <S.ItemContainer key={repository.id}>
            <S.ItemTitle>
              <S.Field>
                <span style={{ color: '#EA98EE', marginRight: '1rem' }}>
                  Project Name:
                </span>
                {repository.name}
              </S.Field>
            </S.ItemTitle>
            <S.Field>
              <span style={{ color: '#EA98EE', marginRight: '1rem' }}>
                Url:
              </span>
              {repository.html_url}
            </S.Field>
            <S.Field>
              <span style={{ color: '#EA98EE', marginRight: '1rem' }}>
                Created At:
              </span>
              {repository.created_at}
            </S.Field>
            <S.Details onClick={() => handleClick(repository.id)}>
              <FaInfoCircle size={30} style={{ marginRight: '.5rem' }} />
              Details
            </S.Details>
          </S.ItemContainer>
        ))}
      </S.List>
    </S.Container>
  );
}

export default GitRepositoryList;
