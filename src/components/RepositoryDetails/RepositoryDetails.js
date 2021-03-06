import * as S from './styled';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiCommentDetail } from 'react-icons/bi';

function RepositoryDetails({ repositories }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    repositories
      .filter((repository) => Number(repository.id) === Number(id))
      .map((repository) => setRepos(repository));

    console.log(repositories);
  }, [id, repositories]);

  return (
    <>
      <S.Back onClick={() => navigate('/')}>Back</S.Back>
      <S.Container>
        <S.Title>Repository Details</S.Title>
        <S.Details>
          <S.Avatar>
            <BiCommentDetail size={210} color={'#f25bdb'} />
          </S.Avatar>

          <S.ItemContainer>
            <S.Item>
              <span style={{ color: '#f25bdb', marginRight: '.5rem' }}>
                Id:
              </span>
              {repos.id}
            </S.Item>
            <S.Item>
              <span style={{ color: '#f25bdb', marginRight: '.5rem' }}>
                Name:
              </span>
              {repos.name}
            </S.Item>

            <S.Item>
              <span style={{ color: '#f25bdb', marginRight: '.5rem' }}>
                Url:
              </span>
              {repos.html_url}
            </S.Item>
            <S.Item>
              <span style={{ color: '#f25bdb', marginRight: '.5rem' }}>
                Created AT:
              </span>
              {repos.created_at}
            </S.Item>
            <S.Item>
              <span style={{ color: '#f25bdb', marginRight: '.5rem' }}>
                Visibility:
              </span>
              {repos.visibility}
            </S.Item>
          </S.ItemContainer>
        </S.Details>
      </S.Container>
    </>
  );
}

export default RepositoryDetails;
